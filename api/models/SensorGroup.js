'use strict';

var _ = require('lodash');

/**
 * SensorGroup.js
 *
 * @description :: Sensor group is a collection of sensors that are operated by same client. For example gpu and cpu
 *                 temperatures.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = _.merge(_.cloneDeep(require('../base/Model')), {
    attributes: {
        // Name of the sensor group
        name: {
            type: 'string',
            required: true
        },
        // Sensor group description
        description: {
            type: 'text'
        },
        // Below is all specification for relations to another models

        // Sensors that area attached to group
        sensors: {
            collection: 'sensor',
            via: 'group'
        }
    }
});
