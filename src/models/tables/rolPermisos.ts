import { DataTypes, INTEGER } from 'sequelize';
import db from '../../db/conex';

const RolPermisos = db.define('RolPermiso', {
  rolid: { type: DataTypes.INTEGER, primaryKey:true },
  usuid: { type: DataTypes.INTEGER },
  permisos: { type: DataTypes.ARRAY(DataTypes.STRING) }
}, {
  timestamps: false,
  tableName: 'rolpermisos'
});

export default RolPermisos;
