const express = require('express');

module.exports = function (server) {
    // API Routes
    //Define URL base para todas as rotas
    const router = express.Router();
    server.use('/api', router);

    // BillingCycle Routes
    //Rotas de Ciclo de Pagamento
    const billingCycleService = require('../api/billingCycle/billingCycleService');
    billingCycleService.register(router, '/billingCycles');
}