import { DataTypes } from 'sequelize';
import db from '../../db/conex';

const Ingreso = db.define('Ingreso', {
  ingid: { type: DataTypes.INTEGER, autoIncrement:true, primaryKey:true },
  perid: { type: DataTypes.INTEGER },
  dateingreso: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  datesalida: { type: DataTypes.DATE, defaultValue: null }
}, {
  timestamps: false,
  tableName: 'ingreso'
});

export default Ingreso;
