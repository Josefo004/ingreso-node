
import { Router } from 'express'
import { check } from 'express-validator';
import { getPersona, postPersona } from '../controllers/personas.controllers';

import { validarCampos } from '../middlewares/validar-campos';

const router = Router();

router.get('/:termino',[
  check('termino', 'el dato es Obligatorio').notEmpty(),
  validarCampos
], getPersona);

router.post('/', [
  check('documento', 'el dato es Obligatorio').notEmpty(),
  check('nombre', 'el dato es Obligatorio').notEmpty(),
  validarCampos
], postPersona);

export default router;


