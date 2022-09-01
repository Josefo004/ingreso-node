import { Request, Response } from "express";
import { datos_persona_byCI } from "../helpers/cPersonas";

export const getPersona =  async (req: Request, res: Response) => {
  const {termino} = req.params
  const buscarenlocal = await datos_persona_byCI(termino);
  //const buscarenJulio = await datos_persona_byCI_julio(termino);

  res.json(buscarenlocal);
}