'use strict';

/**
 *  interface controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::interface.interface');
