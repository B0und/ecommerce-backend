'use strict';

/**
 * memory-type service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::memory-type.memory-type');
