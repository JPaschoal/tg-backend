import { Sequelize } from 'sequelize'
import config from './configdb'

const connection = new Sequelize(config);

export default connection;