'use strict';

var request = require('supertest');
var expect = require('chai').expect;
var login = require("./../../helpers/login");
var _ = require('lodash');
var async = require('async');

describe('SensorController', function AuthController() {
    describe('action sensorOverview', function overviwTest() {
        var tokenDemo = '';
        var tokenAdmin = '';

        before(function beforeTest(done) {
            async.parallel(
                {
                    tokenDemo: function getTokenDemo(next) {
                        login.authenticate('demo', function callback(error, result) {
                            next(error, result.token);
                        });
                    },
                    tokenAdmin: function getTokenAdmin(next) {
                        login.authenticate('admin', function callback(error, result) {
                            next(error, result.token);
                        });
                    }
                },
                function callback(error, results) {
                    tokenDemo = results.tokenDemo;
                    tokenAdmin = results.tokenAdmin;

                    done(error);
                }
            );
        });

        it('TestCase #1 - no measurements for sensor in database', function it(done) {
            request(sails.hooks.http.app)
                .get('/sensor/sensorOverview')
                .set('Authorization', 'bearer ' + tokenDemo)
                .set('Content-Type', 'application/json')
                .expect(200)
                .end(
                    function end(error, result) {
                        if (error) {
                            return done(error);
                        }
                        expect(result.res.body).to.be.a('array');
                        expect(result.res.body[4].sensor.name).to.equal('Outside TEMP');
                        expect(result.res.body[4]).to.not.have.property('measurement');

                        done();
                    }
                );
        });

        it('TestCase #2 - has measurements for sensor in database', function it(done) {
            request(sails.hooks.http.app)
                .get('/sensor/sensorOverview')
                .set('Authorization', 'bearer ' + tokenDemo)
                .set('Content-Type', 'application/json')
                .expect(200)
                .end(
                    function end(error, result) {
                        if (error) {
                            return done(error);
                        }
                        expect(result.res.body).to.be.a('array');
                        expect(result.res.body[0].sensor.name).to.equal('Desktop CPU TEMP');
                        expect(result.res.body[0]).to.have.property('measurement');
                        expect(result.res.body[0].measurement.value).to.equal(21);

                        done();
                    }
                );
        });
    });

});
