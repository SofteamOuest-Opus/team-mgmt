module.exports = {
    url: 'jdbc:postgresql://team-mgmt-bdd:5432/team_api',
    schemas: 'public',
    locations: 'filesystem:flyway/migration',
    user: 'team_api',
    password: 'team_api',
    sqlMigrationSuffix: '.sql',
    baselineOnMigrate: 'true'
};
