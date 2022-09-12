import RolPermiso from "../models/tables/rolPermiso";

export const permisos_ByUsuId = async(id:string) => {
  const permisos = await RolPermiso.findAll({
    attributes: ['usuid', 'permisos'],
    where: {usuid: id}
  });
  
  return permisos;
}

