'use strict';

/**
 * vram service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vram.vram');
