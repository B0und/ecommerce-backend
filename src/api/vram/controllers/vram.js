'use strict';

/**
 *  vram controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::vram.vram');
