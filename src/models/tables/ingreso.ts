import { DataTypes } from 'sequelize';
import db from '../../db/conex';

const Ingreso = db.define('Ingreso', {
  perid: { type: DataTypes.INTEGER },
  dateingreso: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  datesalida: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  timestamps: false,
  tableName: 'ingreso'
});

export default Ingreso;
