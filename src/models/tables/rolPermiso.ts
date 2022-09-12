import { DataTypes, INTEGER } from 'sequelize';
import db from '../../db/conex';
import Usuario from './usuario';

const RolPermiso = db.define('RolPermiso', {
  rolid: { type: DataTypes.INTEGER, primaryKey:true },
  usuid: { type: DataTypes.INTEGER },
  permisos: { type: DataTypes.ARRAY(DataTypes.STRING) }
}, {
  timestamps: false,
  tableName: 'rolpermiso'
});

export default RolPermiso;
