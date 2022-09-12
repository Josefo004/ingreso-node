import Ingreso from "../models/tables/ingreso";

export const insert_Ingreso = async(id:string) => {
  try {
    const ingreso = await Ingreso.create({perid:id});
    console.log(ingreso);
    //await ingreso.save();
    return [ingreso];
  } catch (error) {
    console.log(error);
    return [];
  }
}

