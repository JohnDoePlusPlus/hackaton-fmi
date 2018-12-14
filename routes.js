const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('setting-up', '/setting-up/:step')