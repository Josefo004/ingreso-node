
import { Router } from 'express'
import { check } from 'express-validator';
import { postIngreso, putIngreso } from '../controllers/ingrersos.controllers';
import { validarCampos } from '../middlewares/validar-campos';

const router = Router();

router.post('/',[
  check('perid', 'el dato es Obligatorio').notEmpty(),
  validarCampos
], postIngreso);

router.put('/',[
  check('ingid', 'el dato es Obligatorio').notEmpty(),
  validarCampos
], putIngreso);

export default router;


