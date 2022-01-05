require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
      typeCast: (field, next) => {
        if (field.type?.toUpperCase().includes('TINY') && field.length === 1) {
          const value = field.toString();
          return value ? value === '1' : null; // 1 = true, 0 = false, else return null
        }
        return next();
      },
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },

    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10,
    },
  },

  test: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      typeCast: (field, next) => {
        if (field.type?.toUpperCase().includes('TINY') && field.length === 1) {
          const value = field.toString();
          return value ? value === '1' : null; // 1 = true, 0 = false, else return null
        }
        return next();
      },
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10,
    },
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASS,
      typeCast: (field, next) => {
        if (field.type?.toUpperCase().includes('TINY') && field.length === 1) {
          const value = field.toString();
          return value ? value === '1' : null; // 1 = true, 0 = false, else return null
        }
        return next();
      },
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
  },
};
