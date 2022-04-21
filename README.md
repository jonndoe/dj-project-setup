This is a setup-example project to train the process of set up of django projects.


To run this project:




activate `(/home/habrauser/PycharmProjects/django-theride/some-test-project-3/env38_cookiecutter)`


run `python manage.py runserver`



to run it:


1.WITH PRODUCTION SERVER:
 - open cmd shell
 - run: conda activate env_nodejs
 - cd to project root
 - run: npm run build -> will build required javascript into /build/ folder
 - or run: npm run watch -> will build every time we changes the js files.(for development only)

 - open another cmd shell
 - cd to project root
 - run: sudo docker-compose -f docker-compose.dev.local.redis.postgres.yml up
   -> this will start up postgres and redis containers

 - open one more cmd shell
 - run: conda activate env38_python
 - cd to project root
 - run: export REDIS_URL=redis://127.0.0.1:6379/0
 - run: export DATABASE_URL=postgres://psqluser:strongpassword777@127.0.0.1:5432/someproject2
 - run: python manage.py migrate
 - run: python manage.py collectstatic
 - run: daphne someproject2.asgi:application

 -> should work now
 - TO DO: - Figure out media files handling in this configuration.


2. WITH LOCAL DJANGO-DEVELOPMENT SERVER:
 - open cmd shell
 - run: conda activate env_nodejs
 - cd to project root
 - run: npm run build -> will build required javascript into /build/ folder
 - or run: npm run watch -> will build every time we changes the js files.(for development only)

 - open another cmd shell
 - cd to project root
 - run: sudo docker-compose -f docker-compose.dev.local.redis.postgres.yml up
   -> this will start up postgres and redis containers

 - open one more cmd shell
 - run: conda activate env38_python
 - cd to project root
 - run: export REDIS_URL=redis://127.0.0.1:6379/0
 - run: export DATABASE_URL=postgres://psqluser:strongpassword777@127.0.0.1:5432/someproject2
 - run: python manage.py migrate
 - run: python manage.py runserver

 -> should work now
 - TO DO: - Figure out media files handling in this configuration.
