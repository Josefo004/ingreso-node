import express, { Application } from 'express';
import cors from 'cors';
import personasRouter from '../routes/personas.routes';
import usuariosRouter from '../routes/usuarios.routes';
import permisosRouter from '../routes/permisos.routes';
import ingresosRouter from '../routes/ingresos.routes';
import db from '../db/conex';

class Server {

  private app: Application;
  private port: string; 
  private apiPaths = {
    personas: `/api/personas`,
    usuarios: `/api/usuarios`,
    permisos: `/api/permisos`,
    ingresos: `/api/ingresos`
  }

  constructor(){
    this.app = express();
    this.port = process.env.PORT || '4500';

    //base de datos
    this.dbConnection();
    //middlewares
    this.middlewares();

    //definir rutas
    this.routes();
  }

  middlewares(){
    //cors
    this.app.use(cors());

    //lectura del Body
    this.app.use(express.json());

    //Carpeta del INDEX
    this.app.use(express.static('public'));
  }

 async dbConnection(){
  try {
    await db.authenticate();
    console.log('Data Base en linea PSQL');
  } catch (error) {
    console.info(error);
    process.exit();
  }
 }

  routes(){
    this.app.use( this.apiPaths.usuarios, usuariosRouter );
    this.app.use( this.apiPaths.personas, personasRouter );
    this.app.use( this.apiPaths.permisos, permisosRouter );
    this.app.use( this.apiPaths.ingresos, ingresosRouter );
  }

  listen(){
    this.app.listen( this.port, () => {
      console.log(`Servidor corriendo en ${this.port}`);
    });
  }

}

export default Server;