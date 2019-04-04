import connexion from './connexion'

export default () => (req, res, next) => connexion.transaction(async () => next());