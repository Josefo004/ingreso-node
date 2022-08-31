import { DataTypes } from 'sequelize';
import db from '../db/conex';

const Usuario = db.define('Usuario', {
  usuid: { type: DataTypes.INTEGER },
  usuario: { type: DataTypes.STRING },
  clave: { type: DataTypes.STRING },
  perid: { type: DataTypes.INTEGER },
  bloqueado: { type: DataTypes.BOOLEAN }
}, {
  tableName: 'usuario'
});

export default Usuario;
