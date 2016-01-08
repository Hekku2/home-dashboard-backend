'use strict';

var _ = require('lodash');

/**
 * Sensor.js
 *
 * @description :: Sensor represents physical sensor somewhere. Sensor defines what kind of date is provided
 *                 by it.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = _.merge(_.cloneDeep(require('../base/Model')), {
  attributes: {
    // Name of the sensor
    name: {
      type: 'string',
      required: true
    },
    // Sensor description
    description: {
      type: 'text'
    },

    // Below is all specification for relations to another models

    // Measurements that area attached to author
    measurements: {
      collection: 'measurement',
      via: 'sensor'
    }
  }
});
