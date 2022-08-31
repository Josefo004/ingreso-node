import { Request, Response } from "express";
import { datos_persona_byCI, datos_persona_byCI_julio } from "../helpers/cPersonas";

export const getPersona =  async (req: Request, res: Response) => {
  const {termino} = req.params;

  let resultado: any [] = [];

  const buscarenlocal = await datos_persona_byCI(termino);
  if (buscarenlocal.length===0) {
    const buscarenJulio = await datos_persona_byCI_julio(termino);
  }

  // if (buscarenlocal.length==0) {
  //   const buscarenJulio = await datos_persona_byCI_julio(termino);
  //   if (buscarenjulio.) {
      
  //   }
  // }


  res.json(buscarenJulio);
}