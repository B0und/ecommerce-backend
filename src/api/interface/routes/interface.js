'use strict';

/**
 * interface router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::interface.interface');
