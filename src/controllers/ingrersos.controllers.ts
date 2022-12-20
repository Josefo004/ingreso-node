import { Request, Response } from "express";
import { insert_Ingreso, update_ingreso } from "../helpers/cIngresos";

export const postIngreso = async (req: Request, res: Response) => {
  const {perid} = req.body;
  console.log('ID ', perid);

  //console.log({perid});
  
  const resultado = await insert_Ingreso(perid);
  console.log(resultado);
  
  const estado = resultado.length>0 ? 200 : 400 ;

  res.status(estado).json(
    resultado
  );
}

export const putIngreso =  async (req: Request, res: Response) => {
  const {ingid} = req.body;
  const resultado = await update_ingreso(ingid);
  console.log(resultado);
  const estado = resultado.length>0 ? 200 : 400 ;
  res.status(estado).json(
    resultado
  );
}