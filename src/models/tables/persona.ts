import { DataTypes } from 'sequelize';
import db from '../../db/conex';

const Persona = db.define('Persona', {
  perid: { type: DataTypes.INTEGER, autoIncrement:true, primaryKey: true },
  documento: { type: DataTypes.STRING },
  paterno : { type: DataTypes.STRING, defaultValue: null },
  materno : { type: DataTypes.STRING, defaultValue: null },
  nombre : { type: DataTypes.STRING },
  biometrico: { type: DataTypes.INTEGER, defaultValue: null }
}, {
  timestamps: false,
  tableName: 'persona',
});

export default Persona;
