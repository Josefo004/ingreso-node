import { DataTypes } from 'sequelize';
import db from '../db/conex';

const Persona = db.define('Persona', {
  perid: { type: DataTypes.INTEGER },
  documento: { type: DataTypes.STRING },
  paterno : { type: DataTypes.STRING },
  materno : { type: DataTypes.STRING },
  nombre : { type: DataTypes.STRING }
}, {
  tableName: 'persona',
});

export default Persona;
