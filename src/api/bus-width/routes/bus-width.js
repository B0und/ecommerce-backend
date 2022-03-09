'use strict';

/**
 * bus-width router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::bus-width.bus-width');
