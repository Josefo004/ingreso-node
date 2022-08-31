
import { Router } from 'express'
import { check } from 'express-validator';
import { getPersona } from '../controllers/personas.controllers';
import { validarCampos } from '../middlewares/validar-campos';

const router = Router();

router.get('/',[
  check('usuario', 'El Usuario es Obligatorio').notEmpty(),
  check('password', 'La contraseña es Obligatoria').notEmpty(),
  validarCampos
], getPersona);

export default router;


