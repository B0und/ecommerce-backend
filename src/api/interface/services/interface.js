'use strict';

/**
 * interface service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::interface.interface');
