'use strict';

/**
 * power-connector service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::power-connector.power-connector');
