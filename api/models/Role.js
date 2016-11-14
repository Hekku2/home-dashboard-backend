'use strict';

var _ = require('lodash');

/**
 * Role.js
 *
 * @description :: Role of user, currently user can have a single role.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = _.merge(_.cloneDeep(require('../base/Model')), {
    attributes: {
        name: {
            type: 'string',
            unique: true
        },
        description: {
            type: 'string'
        },

        // Below is all specification for relations to another models

        // Users
        users: {
            collection: 'User',
            via: 'role'
        }
    }
});
