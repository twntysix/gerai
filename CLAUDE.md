# CLAUDE.md - Standar Vibe Coding untuk Karyawan

> **Dokumen ini adalah panduan wajib untuk seluruh karyawan yang melakukan vibe coding bersama Claude.**
> Tujuan: memastikan setiap output kode memiliki kualitas produksi, konsisten, aman, dan siap deploy.

---

## 1. Filosofi & Prinsip Dasar

### 1.1 Vibe Coding Mindset
Vibe coding bukan berarti "asal jadi". Vibe coding berarti:
- **Cepat tapi rapi** — iterasi cepat dengan tetap menjaga kualitas kode.
- **Pragmatis** — pilih solusi yang paling sederhana yang menyelesaikan masalah.
- **Reproducible** — siapa pun di tim harus bisa menjalankan kode yang sama dengan hasil yang sama.
- **Production-ready by default** — setiap delivery harus bisa di-deploy, bukan hanya berjalan di laptop developer.

### 1.2 Bahasa & Komunikasi
- Komunikasi dengan Claude boleh menggunakan Bahasa Indonesia atau Bahasa Inggris.
- Komentar kode, nama variabel, dan dokumentasi teknis **wajib** menggunakan Bahasa Inggris.
- Pesan commit menggunakan Bahasa Inggris dengan format Conventional Commits.

---

## 2. Tech Stack Wajib

### 2.1 Stack Utama
- **Framework**: Laravel (versi LTS terbaru, minimum Laravel 11.x)
- **Bahasa**: PHP 8.2+ (gunakan typed properties, readonly, enums, dan match expressions)
- **Database**: **MySQL 8.0+** (WAJIB — tidak menggunakan database lain kecuali ada izin tertulis Tech Lead)
- **Cache & Queue**: Redis 7+
- **Web Server**: Nginx + PHP-FPM (production), `php artisan serve` hanya untuk development
- **Package Manager**: Composer (PHP) dan npm/pnpm (frontend assets)

### 2.2 Standar Laravel
Setiap project Laravel **wajib** mengikuti:
- **Laravel Cookbook & Official Documentation** — https://laravel.com/docs
- **Laravel Best Practices** — https://github.com/alexeymezenin/laravel-best-practices
- **PSR-12 Coding Standard**
- **Laravel Pint** untuk auto-formatting (preset: `laravel`)

### 2.3 Frontend (jika diperlukan)
- **Blade + Livewire 3** untuk SSR interactive UI (default pilihan)
- **Inertia.js + Vue 3 / React** untuk SPA-like experience
- **Tailwind CSS** untuk styling
- **Vite** sebagai bundler

---

## 3. Standar MySQL (WAJIB)

> **⚠️ Seluruh project menggunakan MySQL 8.0+. Standar berikut wajib diikuti.**

### 3.1 Konfigurasi Database

**Charset & Collation:**
- Charset: `utf8mb4`
- Collation: `utf8mb4_unicode_ci`
- Storage Engine: `InnoDB` (default, jangan diubah)

Konfigurasi di `config/database.php`:
```php
'mysql' => [
    'driver' => 'mysql',
    'host' => env('DB_HOST', '127.0.0.1'),
    'port' => env('DB_PORT', '3306'),
    'database' => env('DB_DATABASE', 'forge'),
    'username' => env('DB_USERNAME', 'forge'),
    'password' => env('DB_PASSWORD', ''),
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefix' => '',
    'strict' => true,
    'engine' => 'InnoDB',
    'options' => extension_loaded('pdo_mysql') ? array_filter([
        PDO::MYSQL_ATTR_SSL_CA => env('MYSQL_ATTR_SSL_CA'),
    ]) : [],
],
```

**File `.env.example` (WAJIB):**
```env
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=app_database
DB_USERNAME=app_user
DB_PASSWORD=secret
```

### 3.2 Aturan Migration

**WAJIB diikuti:**

1. **Selalu gunakan `id()`** untuk primary key (default Laravel = `bigIncrements`).
2. **Foreign key wajib pakai `foreignId()->constrained()`** dengan `onDelete()` dan `onUpdate()` eksplisit.
3. **Setiap tabel wajib punya `timestamps()`** kecuali tabel pivot sederhana.
4. **Soft delete** menggunakan `softDeletes()` untuk data yang tidak boleh hilang permanen.
5. **Tambahkan index** di kolom yang sering di-query (foreign keys, kolom search, kolom `where`).
6. **Kolom `string`** harus eksplisit panjangnya jika beda dari default 255.
7. **Migration wajib reversible** — implement `down()` dengan benar.
8. **Tidak boleh edit migration yang sudah di-merge ke main** — buat migration baru.

**Contoh migration yang benar:**
```php
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')
                ->constrained()
                ->cascadeOnUpdate()
                ->restrictOnDelete();
            $table->string('sku', 50)->unique();
            $table->string('name');
            $table->text('description')->nullable();
            $table->decimal('price', 12, 2);
            $table->unsignedInteger('stock')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            $table->softDeletes();

            $table->index(['is_active', 'category_id']);
            $table->index('name');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
```

### 3.3 Aturan Tipe Data MySQL

| Tipe Data | Gunakan Untuk | Hindari |
|-----------|---------------|---------|
| `BIGINT UNSIGNED` | Primary key, foreign key | `INT` untuk PK |
| `VARCHAR(255)` | Nama, email, slug | `TEXT` untuk data pendek |
| `TEXT` | Deskripsi, konten artikel | `VARCHAR` untuk data panjang |
| `DECIMAL(p, s)` | Uang, harga, kurs | `FLOAT`/`DOUBLE` untuk uang |
| `TIMESTAMP` | created_at, updated_at | `DATETIME` jika tidak butuh timezone |
| `JSON` | Data semi-struktur, settings | Serialized string |
| `BOOLEAN` (TINYINT(1)) | Flag is_active, is_published | `VARCHAR('Y'/'N')` |
| PHP Enum + cast | Status terbatas | `ENUM` MySQL native (sulit migrasi) |

**⚠️ Penting:**
- **Uang/Harga** WAJIB pakai `DECIMAL`, jangan `FLOAT`.
- **Boolean** pakai `TINYINT(1)` (otomatis dari `boolean()` Laravel).
- **Enum** lebih baik pakai PHP Enum + cast, bukan `ENUM` MySQL.

### 3.4 Aturan Eloquent Model

**WAJIB:**
1. **Definisikan `$fillable`** atau `$guarded` (mass assignment protection).
2. **Definisikan `$casts`** untuk tipe data spesifik (boolean, datetime, JSON, enum).
3. **Definisikan relationship** dengan return type hint.
4. **Hindari N+1** — gunakan `with()` di Controller, atau aktifkan `Model::preventLazyLoading()` di local.
5. **Scope queries** untuk filter yang sering dipakai.

**Contoh:**
```php
final class Product extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'category_id',
        'sku',
        'name',
        'description',
        'price',
        'stock',
        'is_active',
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'stock' => 'integer',
        'is_active' => 'boolean',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }
}
```

### 3.5 Performance & Indexing

**Aturan indexing:**
- Setiap **foreign key** harus punya index (otomatis dengan `foreignId()->constrained()`).
- Kolom yang sering di-`WHERE`, `ORDER BY`, atau `JOIN` wajib di-index.
- Composite index untuk query multi-kolom yang sering muncul.
- **Hindari over-indexing** — terlalu banyak index memperlambat write.

**Query optimization:**
- Gunakan `select()` untuk ambil hanya kolom yang dibutuhkan.
- Gunakan `chunk()` atau `lazy()` untuk proses data besar (>1000 row).
- Gunakan `cursor()` untuk iterasi memory-efficient.
- **Selalu eager load** relasi yang akan dipakai (`with()`).

```php
// ❌ N+1 problem
$products = Product::all();
foreach ($products as $product) {
    echo $product->category->name;
}

// ✅ Eager loading
$products = Product::with('category')->get();
foreach ($products as $product) {
    echo $product->category->name;
}

// ✅ Untuk data besar
Product::with('category')->lazy()->each(function ($product) {
    // process
});
```

### 3.6 Backup & Migration di Production
- **WAJIB backup database** sebelum menjalankan migration di production.
- Gunakan `php artisan migrate --pretend` untuk review SQL sebelum eksekusi.
- Untuk perubahan struktur tabel besar, pertimbangkan `pt-online-schema-change` (Percona Toolkit).
- **Tidak boleh `migrate:fresh` atau `migrate:refresh` di production**.

Backup MySQL standar:
```bash
docker compose exec mysql mysqldump \
    -u root -p${DB_ROOT_PASSWORD} \
    --single-transaction \
    --routines \
    --triggers \
    ${DB_DATABASE} > backup-$(date +%Y%m%d-%H%M%S).sql
```

---

## 4. Struktur Project Standar

```
project-root/
├── app/
│   ├── Console/
│   ├── Exceptions/
│   ├── Http/
│   │   ├── Controllers/      # Tipis, hanya orchestration
│   │   ├── Middleware/
│   │   ├── Requests/         # Form Request untuk validation
│   │   └── Resources/        # API Resources untuk transformation
│   ├── Models/
│   ├── Services/             # Business logic
│   ├── Repositories/         # Optional, untuk query kompleks
│   ├── Actions/              # Single-action classes (recommended)
│   ├── Events/
│   ├── Listeners/
│   ├── Jobs/
│   └── Enums/                # PHP 8.1+ Enums
├── config/
├── database/
│   ├── factories/
│   ├── migrations/
│   └── seeders/
├── docker/                   # WAJIB - lihat Section 6
│   ├── mysql/
│   ├── nginx/
│   ├── php/
│   └── supervisor/
├── routes/
│   ├── api.php
│   ├── web.php
│   └── console.php
├── tests/
│   ├── Feature/
│   └── Unit/
├── .env.example              # WAJIB di-commit
├── .gitignore
├── .dockerignore             # WAJIB
├── Dockerfile                # WAJIB - lihat Section 6
├── docker-compose.yml        # WAJIB - lihat Section 6
├── docker-compose.prod.yml   # Untuk production
├── phpstan.neon              # WAJIB - static analysis
├── pint.json                 # Konfigurasi Laravel Pint
├── README.md                 # WAJIB
└── CLAUDE.md                 # Project-specific instructions (jika ada)
```

---

## 5. Standar Coding Laravel

### 5.1 Aturan Umum (dari Laravel Best Practices)

**WAJIB diikuti:**
1. **Single Responsibility Principle** — satu class, satu tanggung jawab.
2. **Fat Models, Skinny Controllers** — business logic di Service/Action atau Model, bukan Controller.
3. **Validation di Form Request**, bukan di Controller.
4. **Mass Assignment Protection** — selalu definisikan `$fillable` atau `$guarded` di Model.
5. **Eager Loading** untuk hindari N+1 query.
6. **Tidak boleh business logic di Blade template**.
7. **Gunakan Eloquent** daripada Query Builder, dan Query Builder daripada raw SQL.
8. **Gunakan Config & Language files**, hindari hardcoded string.
9. **Gunakan IoC Container atau Facades** alih-alih `new Class()`.
10. **Tidak boleh menjalankan query di Blade** — selalu pass dari Controller.

### 5.2 Naming Conventions

| Item | Convention | Contoh |
|------|------------|--------|
| Controller | Singular, PascalCase, suffix `Controller` | `UserController` |
| Model | Singular, PascalCase | `User`, `BlogPost` |
| Table | Plural, snake_case | `users`, `blog_posts` |
| Pivot Table | Singular, alphabetical, snake_case | `role_user` |
| Migration | snake_case, deskriptif | `2024_01_01_create_users_table` |
| Method | camelCase | `getActiveUsers()` |
| Variable | camelCase | `$activeUser` |
| Route | kebab-case | `/users/active-list` |
| Route Name | snake_case dengan dot | `users.active_list` |
| Form Request | PascalCase, suffix `Request` | `StoreUserRequest` |
| View | kebab-case | `resources/views/show-user.blade.php` |

### 5.3 Validation
**WAJIB** menggunakan Form Request:

```php
class StoreUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('create', User::class);
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', Password::defaults()],
        ];
    }
}
```

### 5.4 Service Layer / Action Pattern

Untuk business logic kompleks, gunakan **Action classes**:

```php
final class CreateUserAction
{
    public function __construct(
        private readonly UserRepository $repository,
    ) {}

    public function execute(array $data): User
    {
        return DB::transaction(function () use ($data) {
            $user = $this->repository->create($data);
            event(new UserCreated($user));
            return $user;
        });
    }
}
```

### 5.5 API Response Standard

Gunakan **API Resources** dan format konsisten:

```php
// Format response sukses
{
    "success": true,
    "message": "User created successfully",
    "data": { ... }
}

// Format response error
{
    "success": false,
    "message": "Validation failed",
    "errors": { ... }
}
```

---

## 6. Docker — WAJIB di Setiap Delivery

> **⚠️ Tidak ada delivery tanpa Dockerfile dan docker-compose.yml. Tanpa pengecualian.**

### 6.1 Dockerfile Standar (Multi-stage Build, MySQL only)

```dockerfile
# syntax=docker/dockerfile:1.6

# =========================
# Stage 1: Composer Dependencies
# =========================
FROM composer:2.7 AS vendor
WORKDIR /app
COPY composer.json composer.lock ./
RUN composer install \
    --no-dev \
    --no-interaction \
    --no-progress \
    --no-scripts \
    --prefer-dist \
    --optimize-autoloader

# =========================
# Stage 2: Frontend Assets
# =========================
FROM node:20-alpine AS frontend
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

# =========================
# Stage 3: Production Image
# =========================
FROM php:8.3-fpm-alpine AS production

# Install system dependencies (MySQL only)
RUN apk add --no-cache \
    nginx \
    supervisor \
    curl \
    libpng-dev \
    libxml2-dev \
    zip \
    unzip \
    oniguruma-dev \
    icu-dev \
    libzip-dev \
    mysql-client \
    mariadb-connector-c-dev

# Install PHP extensions (MySQL only, no postgres)
RUN docker-php-ext-install \
    pdo_mysql \
    mysqli \
    bcmath \
    gd \
    intl \
    opcache \
    pcntl \
    zip

# Install Redis extension
RUN apk add --no-cache --virtual .build-deps $PHPIZE_DEPS \
    && pecl install redis \
    && docker-php-ext-enable redis \
    && apk del .build-deps

WORKDIR /var/www/html

# Copy application
COPY --chown=www-data:www-data . .
COPY --from=vendor --chown=www-data:www-data /app/vendor ./vendor
COPY --from=frontend --chown=www-data:www-data /app/public/build ./public/build

# Copy configs
COPY docker/php/php.ini /usr/local/etc/php/conf.d/custom.ini
COPY docker/php/opcache.ini /usr/local/etc/php/conf.d/opcache.ini
COPY docker/nginx/default.conf /etc/nginx/http.d/default.conf
COPY docker/supervisor/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Optimize Laravel
RUN php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

EXPOSE 80
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
```

### 6.2 docker-compose.yml untuk Development (MySQL)

```yaml
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
      target: production
    container_name: ${APP_NAME:-laravel}_app
    restart: unless-stopped
    ports:
      - "${APP_PORT:-8000}:80"
    volumes:
      - .:/var/www/html
      - /var/www/html/vendor
      - /var/www/html/node_modules
    environment:
      - APP_ENV=${APP_ENV:-local}
      - DB_CONNECTION=mysql
      - DB_HOST=mysql
      - DB_PORT=3306
    depends_on:
      mysql:
        condition: service_healthy
      redis:
        condition: service_healthy
    networks:
      - app_network

  mysql:
    image: mysql:8.0
    container_name: ${APP_NAME:-laravel}_mysql
    restart: unless-stopped
    ports:
      - "${DB_PORT:-3306}:3306"
    environment:
      MYSQL_DATABASE: ${DB_DATABASE}
      MYSQL_USER: ${DB_USERNAME}
      MYSQL_PASSWORD: ${DB_PASSWORD}
      MYSQL_ROOT_PASSWORD: ${DB_ROOT_PASSWORD:-${DB_PASSWORD}}
    command:
      - --default-authentication-plugin=caching_sha2_password
      - --character-set-server=utf8mb4
      - --collation-server=utf8mb4_unicode_ci
      - --max_allowed_packet=64M
      - --innodb_buffer_pool_size=256M
    volumes:
      - mysql_data:/var/lib/mysql
      - ./docker/mysql/my.cnf:/etc/mysql/conf.d/custom.cnf:ro
      - ./docker/mysql/init:/docker-entrypoint-initdb.d:ro
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost", "-u", "root", "-p${DB_ROOT_PASSWORD:-${DB_PASSWORD}}"]
      interval: 10s
      timeout: 5s
      retries: 10
      start_period: 30s
    networks:
      - app_network

  phpmyadmin:
    image: phpmyadmin/phpmyadmin:latest
    container_name: ${APP_NAME:-laravel}_phpmyadmin
    restart: unless-stopped
    ports:
      - "${PMA_PORT:-8080}:80"
    environment:
      PMA_HOST: mysql
      PMA_PORT: 3306
      UPLOAD_LIMIT: 64M
    depends_on:
      mysql:
        condition: service_healthy
    networks:
      - app_network

  redis:
    image: redis:7-alpine
    container_name: ${APP_NAME:-laravel}_redis
    restart: unless-stopped
    ports:
      - "${REDIS_PORT:-6379}:6379"
    volumes:
      - redis_data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - app_network

  mailhog:
    image: mailhog/mailhog:latest
    container_name: ${APP_NAME:-laravel}_mailhog
    restart: unless-stopped
    ports:
      - "1025:1025"
      - "8025:8025"
    networks:
      - app_network

networks:
  app_network:
    driver: bridge

volumes:
  mysql_data:
  redis_data:
```

### 6.3 Konfigurasi MySQL Custom (`docker/mysql/my.cnf`)

```ini
[mysqld]
# Character set
character-set-server = utf8mb4
collation-server    = utf8mb4_unicode_ci

# InnoDB
default-storage-engine = InnoDB
innodb_buffer_pool_size = 256M
innodb_log_file_size    = 64M
innodb_flush_log_at_trx_commit = 2
innodb_flush_method     = O_DIRECT

# Connections
max_connections        = 200
max_allowed_packet     = 64M

# Logging
slow_query_log         = 1
slow_query_log_file    = /var/lib/mysql/slow-query.log
long_query_time        = 2

# Timezone (sesuaikan)
default-time-zone = '+07:00'

[client]
default-character-set = utf8mb4

[mysql]
default-character-set = utf8mb4
```

### 6.4 Init Script MySQL (Opsional, `docker/mysql/init/01-init.sql`)

```sql
-- Create test database
CREATE DATABASE IF NOT EXISTS app_database_testing
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

-- Grant access ke user aplikasi
GRANT ALL PRIVILEGES ON app_database_testing.* TO 'app_user'@'%';
FLUSH PRIVILEGES;
```

### 6.5 .dockerignore (WAJIB)

```
.git
.github
.idea
.vscode
node_modules
vendor
.env
.env.*
!.env.example
storage/logs/*
storage/framework/cache/*
storage/framework/sessions/*
storage/framework/views/*
tests
*.md
!README.md
docker-compose.override.yml
```

### 6.6 Konfigurasi Pendukung
File-file berikut **wajib** ada di folder `docker/`:
- `docker/mysql/my.cnf` — custom MySQL settings
- `docker/mysql/init/` — script SQL untuk inisialisasi (opsional)
- `docker/php/php.ini` — custom PHP settings (memory_limit, upload_max_filesize, dll)
- `docker/php/opcache.ini` — OPcache settings untuk production
- `docker/nginx/default.conf` — Nginx configuration
- `docker/supervisor/supervisord.conf` — untuk menjalankan nginx, php-fpm, queue worker, scheduler

### 6.7 Verifikasi Docker
Sebelum delivery, **wajib** jalankan dan pastikan:

```bash
# Build berhasil
docker compose build --no-cache

# Container berjalan sehat
docker compose up -d
docker compose ps     # Semua status harus "healthy"

# MySQL accessible & charset benar
docker compose exec mysql mysql -u${DB_USERNAME} -p${DB_PASSWORD} \
    -e "SHOW VARIABLES LIKE 'character_set_%';"

# Aplikasi accessible
curl -I http://localhost:8000   # Harus return 200

# Migration & seeder berjalan
docker compose exec app php artisan migrate --seed

# Tests passed
docker compose exec app php artisan test
```

---

## 7. Static Code Analysis — WAJIB

> **⚠️ Setiap delivery harus melewati static code analysis tanpa error baru.**

### 7.1 Tools Wajib

| Tool | Fungsi | Wajib |
|------|--------|-------|
| **Larastan (PHPStan)** | Static analysis Laravel-aware | ✅ |
| **Laravel Pint** | Code style fixer (PSR-12 + Laravel preset) | ✅ |
| **Rector** | Automated refactoring | Recommended |
| **PHP Insights** | Code quality metrics | Recommended |

### 7.2 Setup Larastan

Install:
```bash
composer require --dev larastan/larastan
```

File `phpstan.neon` (WAJIB):
```yaml
includes:
    - vendor/larastan/larastan/extension.neon

parameters:
    paths:
        - app
        - config
        - database
        - routes
        - tests

    # Mulai dari level 5, tingkatkan secara bertahap ke level 8
    level: 6

    ignoreErrors:
        # Tambahkan pengecualian dengan komentar alasan

    excludePaths:
        - ./*/*/FileToBeExcluded.php

    checkMissingIterableValueType: false
```

### 7.3 Setup Laravel Pint

File `pint.json`:
```json
{
    "preset": "laravel",
    "rules": {
        "declare_strict_types": true,
        "strict_comparison": true,
        "ordered_imports": {
            "sort_algorithm": "alpha"
        },
        "no_unused_imports": true
    },
    "exclude": [
        "bootstrap/cache",
        "storage"
    ]
}
```

### 7.4 Composer Scripts (WAJIB)

Tambahkan di `composer.json`:
```json
{
    "scripts": {
        "lint": "vendor/bin/pint",
        "lint:test": "vendor/bin/pint --test",
        "analyse": "vendor/bin/phpstan analyse --memory-limit=2G",
        "test": "php artisan test",
        "test:coverage": "php artisan test --coverage --min=70",
        "check": [
            "@lint:test",
            "@analyse",
            "@test"
        ]
    }
}
```

### 7.5 Workflow Pengecekan

**Sebelum commit/delivery, WAJIB jalankan:**

```bash
# 1. Format code
composer lint

# 2. Static analysis
composer analyse

# 3. Run tests
composer test

# Atau jalankan semuanya sekaligus:
composer check
```

**Aturan ketat:**
- ❌ **Tidak boleh ada error baru** dari PHPStan setelah modifikasi.
- ❌ **Tidak boleh ada code style violation** dari Pint.
- ❌ **Tidak boleh menurunkan code coverage** di bawah 70%.
- ✅ Jika ada false positive PHPStan, **wajib** tambahkan di `ignoreErrors` dengan komentar alasan.

### 7.6 Pre-commit Hook (Recommended)

```bash
#!/bin/sh
# .git/hooks/pre-commit
docker compose exec -T app composer check || exit 1
```

---

## 8. Testing — Wajib

### 8.1 Standar Minimum
- **Code coverage**: minimum **70%** untuk feature baru
- **Setiap endpoint API**: wajib punya Feature Test
- **Setiap business logic**: wajib punya Unit Test
- **Setiap bug fix**: wajib disertai regression test

### 8.2 Tools
- **Pest PHP** (preferred) atau **PHPUnit**
- **Mockery** untuk mocking
- Database testing menggunakan `RefreshDatabase` trait dengan **MySQL test database** (bukan SQLite, supaya behaviour sama dengan production)

### 8.3 Konfigurasi Testing dengan MySQL

File `phpunit.xml` (gunakan MySQL untuk konsistensi dengan production):
```xml
<php>
    <env name="APP_ENV" value="testing"/>
    <env name="DB_CONNECTION" value="mysql"/>
    <env name="DB_HOST" value="mysql"/>
    <env name="DB_PORT" value="3306"/>
    <env name="DB_DATABASE" value="app_database_testing"/>
    <env name="CACHE_DRIVER" value="array"/>
    <env name="QUEUE_CONNECTION" value="sync"/>
    <env name="SESSION_DRIVER" value="array"/>
    <env name="MAIL_MAILER" value="array"/>
</php>
```

Buat database testing di MySQL:
```bash
docker compose exec mysql mysql -uroot -p${DB_ROOT_PASSWORD} \
    -e "CREATE DATABASE IF NOT EXISTS app_database_testing CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```

### 8.4 Struktur Test
```php
// tests/Feature/Api/UserControllerTest.php
it('creates a user with valid data', function () {
    $response = $this->postJson('/api/users', [
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'password' => 'password123',
    ]);

    $response->assertCreated()
        ->assertJsonPath('data.email', 'john@example.com');

    $this->assertDatabaseHas('users', ['email' => 'john@example.com']);
});
```

---

## 9. Security Checklist

Setiap delivery wajib memenuhi:

- ✅ Tidak ada credential di kode (gunakan `.env`)
- ✅ `.env` tidak di-commit, hanya `.env.example`
- ✅ Mass assignment dilindungi (`$fillable`/`$guarded`)
- ✅ SQL injection dihindari (gunakan Eloquent/Query Builder dengan binding, **tidak boleh string concatenation di raw query**)
- ✅ XSS dihindari (gunakan `{{ }}` di Blade, jangan `{!! !!}` kecuali sangat perlu)
- ✅ CSRF protection aktif untuk semua state-changing request
- ✅ Authorization menggunakan Policy/Gate, bukan check manual di controller
- ✅ Rate limiting di endpoint sensitif (login, register, dll)
- ✅ Input validation lengkap di Form Request
- ✅ Password di-hash dengan `Hash::make()` atau `bcrypt()`
- ✅ HTTPS enforced di production (`URL::forceScheme('https')`)
- ✅ Headers security: CSP, HSTS, X-Frame-Options (gunakan middleware)
- ✅ Database user untuk aplikasi **tidak boleh root** — buat user khusus dengan privilege terbatas
- ✅ MySQL port (3306) **tidak di-expose ke public** di production
- ✅ MySQL backup terjadwal dan terenkripsi di production

---

## 10. Git Workflow

### 10.1 Branch Naming
- `feature/<ticket-id>-short-description`
- `bugfix/<ticket-id>-short-description`
- `hotfix/<ticket-id>-short-description`
- `chore/<short-description>`

### 10.2 Commit Message (Conventional Commits)
```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `build`, `ci`

Contoh:
```
feat(auth): add two-factor authentication

Implement TOTP-based 2FA using google2fa-laravel package.
Includes setup, verification, and recovery code generation.

Closes #123
```

### 10.3 Pull Request Checklist
Setiap PR **wajib** menyertakan:
- [ ] Deskripsi perubahan dan alasan
- [ ] Screenshot/recording (jika ada perubahan UI)
- [ ] `docker compose build` berhasil
- [ ] `docker compose up` aplikasi berjalan tanpa error
- [ ] `composer check` passed (lint + analyse + test)
- [ ] Migration tested up & down (di MySQL)
- [ ] Updated documentation (README, API docs)
- [ ] Tidak ada `dd()`, `dump()`, atau `console.log()` tertinggal

---

## 11. Cara Bekerja dengan Claude (Vibe Coding)

### 11.1 Prompt Pattern yang Dianjurkan

**❌ Kurang baik:**
> "Buatkan API user"

**✅ Lebih baik:**
> "Buatkan CRUD API untuk resource `Product` dengan field name, price (decimal), stock, dan category_id (relasi ke Category). Gunakan Form Request untuk validation, API Resource untuk response, dan Action class untuk business logic. Sertakan migration dengan index yang tepat untuk MySQL, dan Feature Test minimal untuk store dan update."

### 11.2 Aturan Delivery dari Claude

Setiap kali Claude membantu menghasilkan kode untuk delivery, Claude **wajib**:

1. ✅ Mengikuti struktur project di Section 4
2. ✅ Menggunakan naming convention di Section 5.2
3. ✅ Menggunakan **MySQL 8.0+** sebagai database (tidak boleh SQLite/PostgreSQL)
4. ✅ Migration mengikuti standar di Section 3.2 (charset utf8mb4, foreign key constrained, index tepat)
5. ✅ Menggunakan tipe data MySQL yang tepat (DECIMAL untuk uang, dll di Section 3.3)
6. ✅ Menggunakan Form Request untuk validation
7. ✅ Menggunakan Service/Action untuk business logic
8. ✅ Menyertakan/memperbarui `Dockerfile` dan `docker-compose.yml` dengan service MySQL yang sesuai standar
9. ✅ Menyertakan `phpstan.neon` dan `pint.json` jika belum ada
10. ✅ Menyertakan tests (minimum Feature Test untuk endpoint) dengan **MySQL test database**
11. ✅ Memperbarui `README.md` dan `.env.example` dengan kredensial MySQL placeholder
12. ✅ Memberikan instruksi cara menjalankan: `docker compose up`, migration, test
13. ✅ Memastikan kode lulus `composer check` (Pint + Larastan + Test)

### 11.3 Hal yang Perlu Dikomunikasikan ke Claude
Saat memulai task, beri konteks:
- Versi Laravel dan PHP yang digunakan
- Versi MySQL (default 8.0+)
- Apakah project baru atau menambah ke existing project
- Apakah ada existing pattern di project yang harus diikuti
- Apakah ada existing schema/tabel terkait

### 11.4 Yang Tidak Boleh
- ❌ Skip pembuatan Dockerfile dengan alasan "nanti saja"
- ❌ Skip static analysis dengan alasan "code masih kecil"
- ❌ Mengganti database ke SQLite/PostgreSQL tanpa izin Tech Lead
- ❌ Menggunakan SQLite untuk testing (harus MySQL agar behaviour konsisten)
- ❌ Hardcode kredensial atau konfigurasi
- ❌ Commit `vendor/`, `node_modules/`, atau `.env`
- ❌ Menggunakan `env()` di luar file config (gunakan `config()`)
- ❌ Menjalankan migration langsung di production tanpa backup
- ❌ Menggunakan `FLOAT`/`DOUBLE` untuk uang/harga
- ❌ Raw SQL dengan string concatenation (rentan SQL injection)
- ❌ Menjalankan `migrate:fresh` atau `migrate:refresh` di production

---

## 12. Quick Start Checklist (Project Baru)

```bash
# 1. Create new Laravel project
composer create-project laravel/laravel my-project
cd my-project

# 2. Install dev dependencies
composer require --dev larastan/larastan laravel/pint

# 3. Setup files (gunakan template di dokumen ini)
touch Dockerfile docker-compose.yml .dockerignore phpstan.neon pint.json
mkdir -p docker/{mysql,nginx,php,supervisor}
mkdir -p docker/mysql/init

# 4. Setup .env
cp .env.example .env
# Edit DB_CONNECTION=mysql, DB_HOST=mysql, dll

# 5. Build & start
docker compose build
docker compose up -d

# 6. Setup app
docker compose exec app php artisan key:generate
docker compose exec app php artisan migrate

# 7. Setup testing database
docker compose exec mysql mysql -uroot -p${DB_ROOT_PASSWORD} \
    -e "CREATE DATABASE IF NOT EXISTS app_database_testing CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

# 8. Verify
docker compose exec app composer check

# 9. Initial commit
git init
git add .
git commit -m "chore: initial project setup with docker, mysql, and static analysis"
```

---

## 13. Referensi & Bacaan Wajib

- **Laravel Official Docs**: https://laravel.com/docs
- **Laravel Best Practices**: https://github.com/alexeymezenin/laravel-best-practices
- **Larastan**: https://github.com/larastan/larastan
- **Laravel Pint**: https://laravel.com/docs/pint
- **MySQL 8.0 Reference Manual**: https://dev.mysql.com/doc/refman/8.0/en/
- **MySQL InnoDB Tuning**: https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html
- **Conventional Commits**: https://www.conventionalcommits.org/
- **PSR-12**: https://www.php-fig.org/psr/psr-12/
- **PHP The Right Way**: https://phptherightway.com/
- **Docker Best Practices**: https://docs.docker.com/develop/develop-images/dockerfile_best-practices/

---

## 14. Penutup

Standar ini bersifat **wajib** untuk setiap delivery. Setiap pengecualian harus mendapat persetujuan tertulis dari Tech Lead dan dicatat di `CHANGELOG.md` atau `DECISIONS.md`.

**Aturan emas:**
> *"Jika tidak bisa di-build dengan `docker compose build`, tidak terhubung dengan MySQL yang sehat, tidak lulus `composer check`, dan tidak punya test — itu bukan delivery, itu draft."*

---

**Versi Dokumen**: 1.1
**Tanggal**: 2026
**Status**: ACTIVE — wajib diikuti
**Database Standard**: MySQL 8.0+ (mandatory)
