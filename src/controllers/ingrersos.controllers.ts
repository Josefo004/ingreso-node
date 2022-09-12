import { Request, Response } from "express";
import { insert_Ingreso } from "../helpers/cIngresos";

export const postIngreso = async (req: Request, res: Response) => {
  const {id} = req.body;
  console.log('ID ', id);
  
  const resultado = await insert_Ingreso(id);
  const estado = resultado.length>0 ? 200 : 400 ;

  res.status(estado).json(
    resultado
  );
}