import axios from 'axios'
import db from '../db/conex';
import { TJulio, Tjulioquery } from '../interfaces/interfaces';

//usuario por IDUSUARIO
export const datos_persona_byCI = async(ter:string) => {
  const q = `select * FROM persona as p where p.documento LIKE '${ter}%'`;
  const [results] = await db.query(q);
  return results;
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
