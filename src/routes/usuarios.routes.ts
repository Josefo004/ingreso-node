
import { Router } from 'express'
import { check } from 'express-validator';
import { getUsuario } from '../controllers/usuarios.controllers';
import { validarCampos } from '../middlewares/validar-campos';

const router = Router();

router.post('/', [
  check('usuario', 'El Usuario es Obligatorio').notEmpty(),
  check('password', 'La contraseña es Obligatoria').notEmpty(),
  validarCampos
], getUsuario);

export default router;