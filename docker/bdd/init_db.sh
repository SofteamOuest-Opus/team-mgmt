#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE ROLE team_api WITH LOGIN PASSWORD 'team_api';
    CREATE DATABASE team_api WITH TEMPLATE = template0 OWNER = team_api ;
EOSQL