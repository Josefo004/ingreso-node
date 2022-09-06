import { DataTypes } from 'sequelize';
import db from '../../db/conex';

const Persona = db.define('Persona', {
  perid: { type: DataTypes.INTEGER, primaryKey: true },
  documento: { type: DataTypes.STRING },
  paterno : { type: DataTypes.STRING },
  materno : { type: DataTypes.STRING },
  nombre : { type: DataTypes.STRING },
  biometrico: { type: DataTypes.INTEGER }
}, {
  timestamps: false,
  tableName: 'persona',
});

export default Persona;
