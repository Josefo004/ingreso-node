import { Request, Response } from "express";
import { find_Ingreso } from "../helpers/cIngresos";
import { datos_persona, datos_persona_julio, esNumero } from "../helpers/cPersonas";

export const getPersona = async (req: Request, res: Response) => {
  const {termino} = req.params;

  const buscarenIngreso = await find_Ingreso(termino);
  if (buscarenIngreso.length>0) {
    res.status(200).json({
      tipo: 1,
      data: buscarenIngreso
    });
    return;
  }
  const buscarenlocal = await datos_persona(termino);
  if (buscarenlocal.length>0) {
    res.status(200).json({
      tipo: 2,
      data: buscarenlocal
    });
    return;
  }
  let campo = '';
  esNumero(termino)? campo='ci' : campo='name';
  const buscarenJulio = await datos_persona_julio(termino,campo);
  if (buscarenJulio.length>0){
    res.status(200).json({
      tipo: 3,
      data: buscarenJulio
    });
    return;
  }
  res.status(204).json({
    tipo: 4,
    data: []
  });
  return;
}