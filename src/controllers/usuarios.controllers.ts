import { Request, Response } from "express";
import { consulta_usuario } from "../helpers/cUsuarios";

export const getUsuario = async (req: Request, res: Response) => {
  const {usuario, password} = req.body;
  const resultado = await consulta_usuario(usuario,password);
  res.status(200).json(
    resultado
  );
}