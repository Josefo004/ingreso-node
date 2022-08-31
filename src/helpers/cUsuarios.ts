import { Op } from 'sequelize';
import db from '../db/conex';
import Persona from '../models/persona';
import Usuario from '../models/usuario';

/* export const consulta_predios = async (cc:string) => {

  let q: string = `SELECT p.objectid, p.referenciacatastral_ant, p.shape 
    FROM parcelas p 
    WHERE p.referenciacatastral_ant LIKE '${cc}%' 
    ORDER BY p.referenciacatastral_ant limit 5;`;

    const results = await db.query(q);
  
    return results;
  
} */

export const consulta_usuario = async(u:string, p:string) => {
  
  const usuarios = await Usuario.findAll({
    attributes: ['usuid', 'usuario', 'clave', 'perid', 'bloqueado'],
    where: {
      [Op.and]: [
        {usuario: u},
        {clave: p}
      ]
    }
  });


  /* const q = `select u.*, concat(p.nombre,' ',p.paterno,' ',p.materno) as nombre from usuario as u JOIN persona as p on p.perid = u.perid where u.usuario = '${u}' and u.clave = '${p}'`;

  const results = await db.query(q); */
  
  return usuarios;
  
}

export const consulta_persona = async(perid:number) => {
  const personas = await Persona.findOne({ 
    where: { perid: perid } 
  });
  return personas;
}

//usuario por USUARIO y CONTRASEÑA
export const datos_usuario = async(u:string, p:string) => {
  const q = `SELECT u.*, concat(p.nombre,' ',p.paterno,' ',p.materno) as nombre 
  FROM usuario as u 
  JOIN persona as p on p.perid = u.perid where u.usuario = '${u}' and u.clave = '${p}'`;
  const [results] = await db.query(q);
  return results;
}

//usuario por IDUSUARIO
export const datos_usuario_ById = async(id:string) => {
  const q = `SELECT u.*, concat(p.nombre,' ',p.paterno,' ',p.materno) as nombre 
  FROM usuario as u 
  JOIN persona as p on p.perid = u.perid where u.usuid = ${id}`;
  const [results] = await db.query(q);
  return results;
}