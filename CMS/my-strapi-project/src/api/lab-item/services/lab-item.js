'use strict';

/**
 * lab-item service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lab-item.lab-item');
