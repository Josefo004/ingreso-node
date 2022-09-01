import { DataTypes } from 'sequelize';
import db from '../db/conex';
import Persona from './persona';

const Usuario = db.define('Usuario', {
  usuid: { type: DataTypes.INTEGER, primaryKey: true },
  usuario: { type: DataTypes.STRING },
  clave: { type: DataTypes.STRING },
  perid: { type: DataTypes.INTEGER },
  bloqueado: { type: DataTypes.BOOLEAN }
}, {
  timestamps: false,
  tableName: 'usuario'
});

Usuario.hasOne(Persona, {foreignKey: 'perid'});
Persona.belongsTo(Usuario);

export default Usuario;
