This is a setup-example project to train the process of set up of django projects.






To run this project:



to run it:

1. WITH LOCAL DJANGO-DEVELOPMENT SERVER:

   NOTE: THIS IS DEVELOPMENT CONFIGURATION, MEANS WE USE DJANGO DEVELOPMENT SERVER AND
         WE ONLY USE DOCKER FOR POSTGRES AND REDIS.

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
 - run: conda activate env38_python_complete
 - cd to project root
 - run: export REDIS_URL=redis://127.0.0.1:6379/0
 - run: export DATABASE_URL=postgres://psqluser:strongpassword777@127.0.0.1:5432/someproject2
 - run: python manage.py migrate
 - run: python manage.py runserver








2.WITH PRODUCTION SERVER:

NOTE: THIS SET UP FOR PRODUCTION IS NOT COMPLETE!
      - WE HAVE TO ADD NGINX(OR MAYBE TRAEFIK) TO HANDLE THE MEDIA FILES(WE CAN USE NGINX/TRAEFIK DOCKER IMAGE)
      - BETTER TO WRAP DJANGO APP INTO SEPARATE DOCKER CONTAINER AS WELL
      - SO FINALLY WE SHOULD HAVE:
               - DJANGO APP WORKING WITH DAPHNE IMAGE; ---> THIS IS NOT IMPLEMENTED WITH DOCKER
               - POSTGRES IMAGE;
               - REDIS IMAGE;
               - NGINX OR TRAEFIK IMAGE;  ---> THIS IS STILL NOT IMPLEMENTED AT ALL


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
 - run: conda activate env38_python_complete
 - cd to project root
 - run: export REDIS_URL=redis://127.0.0.1:6379/0
 - run: export DATABASE_URL=postgres://psqluser:strongpassword777@127.0.0.1:5432/someproject3
 - run: python manage.py migrate
 - run: python manage.py collectstatic
 - run: daphne mainproject.asgi:application

 -> should work now
 - TO DO: - Figure out media files handling in this configuration.(NGINX AND/OR TRAEFIK DOCKER IMAGES)
