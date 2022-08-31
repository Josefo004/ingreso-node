import { Request, Response } from "express";

export const getPersona = (req: Request, res: Response) => {
  const {usuario, password} = req.query;
  res.json({
    msg: 'GETPERSONA',
    usuario,
    password
  });
}