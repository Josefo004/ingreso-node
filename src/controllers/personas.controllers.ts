import { Request, Response } from "express";
import { datos_persona, datos_persona_julio, esNumero } from "../helpers/cPersonas";


export const getPersona = async (req: Request, res: Response) => {
  const {termino} = req.params;
  const buscarenlocal = await datos_persona(termino);
  if (buscarenlocal.length>0) {
    res.status(200).json(buscarenlocal);
    return;
  }
  let campo = '';
  esNumero(termino)? campo='ci' : campo='name';
  const buscarenJulio = await datos_persona_julio(termino,campo);
  if (buscarenJulio.length>0){
    res.status(200).json(buscarenJulio);
    return;
  }
  res.status(400).json([]);
  return;
}