'use strict';

var _ = require('lodash');
var Promise = require('bluebird');

/**
 * SensorController
 *
 * @description :: Server-side logic for managing Sensors
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = _.merge(_.cloneDeep(require('../base/Controller')), {
    'sensorOverview': function overview(request, response) {
        var fetchMeasurements = function fetchMeasurements(sensors){
            var fetches = _.map(sensors, function fetchLatest(sensor){
                return sails.models['measurement']
                    .findOne({
                        where: {sensor: sensor.id},
                        limit: 1,
                        sort: 'timestamp DESC'
                    });
            });
            return Promise.all(fetches).then(function(data){
                return _.map(sensors, function setLatestMeasurement(sensor, index){
                    return {
                        sensor: sensor,
                        measurement: data[index]
                    }
                })
            });
        };

        var fetchSensors = function fetchSensors(){
            return sails.models['sensor']
                .find().populate('group');
        };
        /**
         * Generic success handler which is triggered when all jobs are done and data is ready to sent to client.
         *
         * @param   {Array} data  Data array to send to client
         */
        var handlerSuccess = function handlerSuccess(data) {
            response.ok(data);
        };

        /**
         * Generic error handler which is triggered whenever some error happens in jobs.
         *
         * @param   {*} error Error object
         */
        var handlerError = function handlerError(error) {
            response.negotiate(error);
        };

        fetchSensors()
            .then(fetchMeasurements)
            .then(handlerSuccess)
            .catch(handlerError);
    }
});
