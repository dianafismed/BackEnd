import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  'lgpd-database',
  'root',
  '8267Veneno*',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 8000,
    define: {
      timestamps: false
    }
  }
);

export default sequelize;