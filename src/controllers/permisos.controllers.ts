import { Request, Response } from "express";
import { permisos_ByUsuId } from "../helpers/cPermisos";

export const getPermisos = async (req: Request, res: Response) => {
  const {id} = req.params;
  const resultado = await permisos_ByUsuId(id);
  const estado = resultado.length>0 ? 200 : 400 ;

  res.status(estado).json(
    resultado
  );
}