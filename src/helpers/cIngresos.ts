import db from "../db/conex";
import Ingreso from "../models/tables/ingreso";


export const insert_Ingreso = async(id:string) => {
  try {
    const existeIngreso = await Ingreso.findOne({
      where:{ perid: id, datesalida: null }
    });
    //console.log('existe', existeIngreso);
    if (existeIngreso!=undefined) {
      console.log('La Persona ya Ingreso');
      return [existeIngreso];
    }
    const ingreso = await Ingreso.create({perid:id});
    await ingreso.save();
    return [ingreso];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const find_Ingreso = async(ter: string) => {
  const q = `SELECT i.ingid, p.perid, p.documento as documento, concat(p.nombre,' ', p.paterno,' ',p.materno) as nombrec, i.dateingreso, i.datesalida  
  FROM ingreso AS i, persona AS p 
  WHERE i.perid = p.perid AND 
        i.datesalida IS NULL AND 
        concat(p.nombre,' ', p.paterno,' ',p.materno,' ',p.documento) like '%${ter}%'`;
  const [results] = await db.query(q);
  return results;
}

export const update_ingreso = async(idi: string) => {
  try {
    const existeIngreso = await Ingreso.findOne({
      where:{ ingid: idi }
    });
    console.log('existe', existeIngreso);
    if (existeIngreso!=undefined) {
      await existeIngreso.update(
        { datesalida: new Date()},
        { where: { ingid:idi }}
      );
    }
    return [existeIngreso];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const show_ingresos_by_date = async(fi:string, ff:string) => {
  const q = `SELECT i.ingid as id, p.documento as documento, concat(p.nombre,' ', p.paterno,' ',p.materno) as nombrec, i.dateingreso, i.datesalida  
  FROM ingreso AS i, persona AS p 
  WHERE i.perid = p.perid AND 
        i.dateingreso BETWEEN '${fi}' AND '${ff}';`;
  const [results] = await db.query(q);
  return results;
}

export const show_ingresos_of = async(peid:string) => {
  const q = `SELECT i.ingid as id, p.documento as documento, concat(p.nombre,' ', p.paterno,' ',p.materno) as nombrec, i.dateingreso, i.datesalida  
  FROM ingreso AS i, persona AS p 
  WHERE i.perid = p.perid AND 
        i.perid = ${peid};`
  const [results] = await db.query(q);
  return results;
}

  // try {
  //   const q = `insert into ingreso(perid, dateingreso) values(${id}, now());`;
  //   const ingreso = await db.query(q);
  //   // const ingreso = await Ingreso.create({perid:id});
  //   // console.log(ingreso);
  //   // await ingreso.save();
  //   return ingreso;
  // } catch (error) {
  //   console.log(error);
  //   return [];
  // }

  // try {
  //   const q = `UPDATE ingreso SET datesalida = now() WHERE ingid=${idi};`;
  //   const ingreso = await db.query(q);
  //   return ingreso;
  // } catch (error) {
  //   console.log(error);
  //   return [];
  // }