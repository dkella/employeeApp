Kella notes:
### 20220616
## Setup Laravel
1. composer create-project laravel/laravel:^8.0 example-app
2. composer install

## Install react:
1. composer require laravel/ui
2. php artisan ui react
3. npm install
4. npm run dev //run twice

## set auth pages
```
php artisan ui:auth 
```

## debugbar
```
composer require barryvdh/laravel-debugbar
```

## migrate
```
php artisan migrate
```

## Create new Model (auto create: migration factory seeder)
factory -create demo data
```
php artisan make:model Employee -mfs
```
```
php artisan migrate
```

amend according:
1. EmployeeFactory
2. EmployeeSeeder
3. Model
4. DatabaseSeeder

```
php artisan migrate --seed
```
