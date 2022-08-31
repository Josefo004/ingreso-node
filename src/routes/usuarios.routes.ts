
import { Router } from 'express'
import { check } from 'express-validator';
import { getUnUsusario, getUsuario } from '../controllers/usuarios.controllers';
import { validarCampos } from '../middlewares/validar-campos';

const router = Router();

router.post('/', [
  check('usuario', 'El Usuario es Obligatorio').notEmpty(),
  check('password', 'La contraseña es Obligatoria').notEmpty(),
  validarCampos
], getUsuario);

router.get('/:id', [
  check('id', 'El ID de usuario es Obligatorio').notEmpty(),
  check('id', 'El ID debe ser Numero').isNumeric(),
  validarCampos
], getUnUsusario);

export default router;