
import { Router } from 'express'
import { check } from 'express-validator';
import { getPersona } from '../controllers/personas.controllers';
import { validarCampos } from '../middlewares/validar-campos';

const router = Router();

router.get('/:termino',[
  check('termino', 'el dato es Obligatorio').notEmpty(),
  validarCampos
], getPersona);

export default router;


