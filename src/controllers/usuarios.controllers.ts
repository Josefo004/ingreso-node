import { Request, Response } from "express";
import { datos_usuario, datos_usuario_ById } from "../helpers/cUsuarios";

export const getUsuario = async (req: Request, res: Response) => {
  const {usuario, password} = req.body;
  const resultado = await datos_usuario(usuario,password);
  const estado = resultado.length>0 ? 200 : 400 ;

  res.status(estado).json(
    resultado
  );
}

export const getUnUsusario = async (req: Request, res: Response) => {
  const {id} = req.params;
  const resultado = await datos_usuario_ById(id);
  const estado = resultado.length>0 ? 200 : 400 ;

  res.status(estado).json(
    resultado
  );
} 