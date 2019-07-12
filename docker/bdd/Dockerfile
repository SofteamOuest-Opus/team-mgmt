FROM postgres:10
MAINTAINER olivier.graton@softeam.fr

ADD init_db.sh /docker-entrypoint-initdb.d/
USER postgres

EXPOSE 5432