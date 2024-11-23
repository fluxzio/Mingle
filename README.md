# Подготовка
Проект работает на следующих конфигурациях:
- ОС: Windows 10
- Версия Python: 3.12
- Версия PGSQL: 17.2

В папке **core** создать 2 файла: 
- .env
- .env.docker

Задать в .env файлах следующие параметры:
- SECRET_KEY
- DEBUG
- POSTGRES_DB
- POSTGRES_USER
- POSTGRES_PASSWORD

# Запуск

Чтобы запустить бэкенд:
```
cd core
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
Чтобы запустить фронтенд(предварительно открыть отдельный терминал):
```
cd mingle
npm install
npm run dev
```

Также можно запустить все в docker:
```
docker-compose build
docker-compose up
```

# О проекте
Mingle — это проект социальной сети, вдохновлённый функциональностью и интерфейсом Instagram. Основная цель проекта — создать платформу для обмена фотографиями, видео, лайками, комментариями и другими функциями, типичными для социальных сетей.