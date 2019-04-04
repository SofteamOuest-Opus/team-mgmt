import connexion from './connexion'
//création d'une nouvelle transaction
export default () => (req, res, next) => connexion.transaction(async () => next());