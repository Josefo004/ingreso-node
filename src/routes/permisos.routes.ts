
import { Router } from 'express'
import { check } from 'express-validator';
import { getPermisos } from '../controllers/permisos.controllers';
import { validarCampos } from '../middlewares/validar-campos';

const router = Router();

router.get('/:id',[
  check('id', 'el dato es Obligatorio').notEmpty(),
  validarCampos
], getPermisos);

export default router;


