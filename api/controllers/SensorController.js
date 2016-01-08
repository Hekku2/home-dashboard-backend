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
        var fetchMeasurements = function fetchMeasurements(){
            return sails.models['measurement']
                .find().sort('timestamp DESC');
        };

        var fetchSensors = function fetchSensors(){
            return sails.models['sensor']
                .find();
        };

        var formatData = function formatData(data){
            return _.map(data.sensors, function iterator(item) {
                return [
                    _findLatestMeasurement(item.id),
                    item
                ];
            });

            function _findLatestMeasurement(sensorId) {
                var measurement = _.find(data.measurements, function iterator(candidate) {
                    return candidate.sensor === sensorId;
                });
                return measurement;
            }
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

        Promise.props({
            sensors: fetchSensors(),
            measurements: fetchMeasurements()
        })
            .then(formatData)
            .then(handlerSuccess)
            .catch(handlerError)
        ;
    }
});
