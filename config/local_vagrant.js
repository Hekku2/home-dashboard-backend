'use strict';

/**
 * Local environment settings for vagrant dev environment
 */
module.exports = {
  connections: {
    mysql: {
      adapter: 'sails-mysql',
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'homedashboard',
      charset: 'utf8',
      collation: 'utf8_swedish_ci'
    }
  },
  models: {
    connection: 'mysql'
  },
  session: {
    secret: 'VAGRANT-SECRET'
  },
  port: 1337,
  environment: 'development',
  log: {
    level: 'info'
  }
};
