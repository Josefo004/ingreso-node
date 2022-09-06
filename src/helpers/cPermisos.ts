import RolPermisos from "../models/tables/rolPermisos";

export const permisos_ByUsuId = async(id:string) => {
  const permisos = await RolPermisos.findAll({
    attributes: ['usuid', 'permisos'],
    where: {usuid: id}
  });
  
  return permisos;
}

