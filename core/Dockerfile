FROM python:3.12-slim


WORKDIR /Mingle/
ADD req.txt /core/

RUN apt-get update \
    && apt-get -y install libpq-dev gcc \
    && pip install psycopg2

RUN pip install -r /core/req.txt

ADD . /core/
WORKDIR /core/



CMD python manage.py makemigrations \
    && python manage.py migrate \
    && python manage.py test \
    && gunicorn core.wsgi:application -b 0.0.0.0:8000

    