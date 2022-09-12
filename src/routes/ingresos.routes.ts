
import { Router } from 'express'
import { check } from 'express-validator';
import { postIngreso } from '../controllers/ingrersos.controllers';
import { validarCampos } from '../middlewares/validar-campos';

const router = Router();

router.post('/',[
  check('id', 'el dato es Obligatorio').notEmpty(),
  validarCampos
], postIngreso);

export default router;


