import axios from 'axios';
import { Op } from 'sequelize';
import { TJulio, Tjulioquery } from '../interfaces/interfaces';
import Persona from '../models/persona';

//usuario por IDUSUARIO
export const datos_persona_byCI = async(ter:string) => {
  const resultado = await Persona.findAll({
    attributes: ['perid', 'documento', 'nombre', 'paterno', 'materno'],
    where:{documento:{
      [Op.like]: `${ter}%`
    }}
  });
  return resultado;
}

export const datos_persona_byCI_julio = async (ter:string) => {
  const buerpo:Tjulioquery={
    by: 'ci',
    q: ter
  }
  console.log(buerpo);
  const resp = await axios.post<TJulio[]>('http://dali.chuquisaca.gob.bo/api/v1/search',buerpo);
  console.log(resp.data);
  
  return resp.data;
}
