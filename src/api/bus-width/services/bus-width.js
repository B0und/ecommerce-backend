'use strict';

/**
 * bus-width service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bus-width.bus-width');
