#!/bin/sh
set -e

>&2 echo "Waiting for postgresql..."

#until flyway -url=jdbc:postgresql://team-mgmt-bdd:5432/team_api -user=team_api -password=team_api info; do
until flyway info; do
  >&2 echo "Postgresql is unavailable - sleeping for 30s..."
  sleep 30
done

>&2 echo "Postgresql is up - executing command"
#flyway -url=jdbc:postgresql://team-mgmt-bdd:5432/team_api -user=team_api -password=team_api clean migrate
flyway clean migrate