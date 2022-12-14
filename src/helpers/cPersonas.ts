import axios from 'axios';
import { Op, Sequelize } from 'sequelize';
import { TJulio, Tjulioquery, TPersona2 } from '../interfaces/interfaces';
import Persona from '../models/tables/persona';

import dotenv from 'dotenv'
dotenv.config();

//si una cadena es CI o nombre
export const esNumero = (cadx:string) => {
  let cnumero = 0;
  let cletra = 0;
  for (let i = 0; i < cadx.length; i++) Number(cadx[i])? cnumero++ : cletra++
  return cnumero > cletra ? true : false;  
  // console.log('numero ', cnumero);
  // console.log('letras', cletra);
}

export const datos_persona = async(ter:string) => {
  const resultado = await Persona.findAll({
    attributes: ['perid', 'documento', 'nombre', 'paterno', 'materno', 'biometrico', [Sequelize.fn('concat', Sequelize.col('nombre'), ' ', Sequelize.col('paterno'), ' ', Sequelize.col('materno')), 'nombrec']],
    where: [
      Sequelize.where(Sequelize.fn('concat', Sequelize.col('nombre'), ' ', Sequelize.col('paterno'), ' ', Sequelize.col('materno'), ' ', Sequelize.col('documento')), 
      { [Op.like]: `%${ter}%` })
    ]
  });
  return resultado;
}

//API JULIO
export const datos_persona_julio = async (q:string, by:string) => {
  const apiJulio = process.env.API_JULIO || '';
  const buerpo:Tjulioquery={
    by,
    q
  }
  //console.log(buerpo);
  try {
    const resp = await axios.post<TJulio[]>(apiJulio,buerpo);
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    return [];
  }
}

export const insert_Persona = async(per:TPersona2) => {
  try {
    const persona = await Persona.create({per});
    await persona.save();
    return [persona];
  } catch (error) {
    console.log(error);
    return [];
  }
}


//usuario por IDUSUARIO
// export const datos_persona_byCI = async(ter:string) => {
//   const resultado = await Persona.findAll({
//     attributes: ['perid', 'documento', 'nombre', 'paterno', 'materno'],
//     where:{documento:{
//       [Op.like]: `${ter}%`
//     }}
//   });
//   return resultado;
// }
