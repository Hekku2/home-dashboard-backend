'use strict';

var _ = require('lodash');

/**
 * Measurement.js
 *
 * @description :: Measurement is a single point of data provided by sensor. Measurement format is defined by sensor.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = _.merge(_.cloneDeep(require('../base/Model')), {
  attributes: {
    // Measurement value
    value: {
      type: 'float',
      required: true
    },
    timestamp: {
      type: 'datetime',
      required: true
    },

    // Below is all specification for relations to another models

    // Sensor of the measurement
    sensor: {
      model: 'sensor'
    }
  }
});
