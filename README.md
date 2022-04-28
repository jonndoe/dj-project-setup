This is a setup-example project to train the process of setting up of django projects.







To run this project:


to run it:

1. WITH LOCAL DJANGO-DEVELOPMENT SERVER:

   NOTE: THIS IS DEVELOPMENT CONFIGURATION, MEANS WE RUN DJANGO IN CONDA ENV AND USE DJANGO    DEVELOPMENT SERVER AND
         WE ONLY USE DOCKER FOR POSTGRES - REDIS - NGINX.

 - open 1st cmd shell
 - run: conda activate env_nodejs
 - cd to project root
 - run: npm run build -> will build required javascript into /build/ folder
 - or run: npm run watch -> will build every time we changes the js files.(for development only)

 - open 2nd cmd shell
 - cd to project root
 - run: sudo docker-compose -f docker-compose.dev.local.redis.postgres.yml up
   -> this will start up postgres and redis containers

 - open 3rd cmd shell
 - run: conda activate env38_python_complete
 - cd to project root
 - run: export REDIS_URL=redis://127.0.0.1:6379/0
 - run: export DATABASE_URL=postgres://psqluser:strongpassword777@127.0.0.1:5432/someproject2
 - run: python manage.py migrate
 - run: python manage.py runserver

 - open 4th cmd shell
 - cd to project root
 - run: sudo docker-compose -f docker-compose.dev.local.nginx.yml up --build
   --> this will build and run nginx container
   !!! - Nginx container in this configuration uses the host network because it is proxying to another ports of Host Network.
   When we make production setup it is better to set it using inside docker network for security reasons.









2.WITH PRODUCTION SERVER:

NOTE: THIS SET UP FOR PRODUCTION IS NOT COMPLETE!
      - WE HAVE TO ADD NGINX(OR MAYBE TRAEFIK) TO HANDLE THE MEDIA FILES(WE CAN USE NGINX/TRAEFIK DOCKER IMAGE)
      - BETTER TO WRAP DJANGO APP INTO SEPARATE DOCKER CONTAINER AS WELL
      - SO FINALLY WE SHOULD HAVE:
               - DJANGO APP WORKING WITH DAPHNE IMAGE; ---> THIS IS NOT IMPLEMENTED WITH DOCKER
               - POSTGRES IMAGE;
               - REDIS IMAGE;
               - NGINX IMAGE;


 - open 1st cmd shell
 - run: conda activate env_nodejs
 - cd to project root
 - run: npm run build -> will build required javascript into /build/ folder
 - or run: npm run watch -> will build every time we changes the js files.(for development only)

 - open 2nd cmd shell
 - cd to project root
 - run: sudo docker-compose -f docker-compose.dev.local.redis.postgres.yml up
   -> this will start up postgres and redis containers

 - open 3rd cmd shell
 - run: conda activate env38_python_complete
 - cd to project root
 - run: export REDIS_URL=redis://127.0.0.1:6379/0
 - run: export DATABASE_URL=postgres://psqluser:strongpassword777@127.0.0.1:5432/someproject3
 - run: python manage.py migrate
 - run: python manage.py collectstatic
 - run: daphne mainproject.asgi:application

 - open 4th cmd shell
 - cd to project root
 - run: sudo docker-compose -f docker-compose.dev.local.nginx.yml up --build
   --> this will build and run nginx container
   !!! - Nginx container in this configuration uses the host network because it is proxying to   another ports of Host Network.
   When we make production setup it is better to set it using inside docker network for security reasons.
