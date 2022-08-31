export interface Tmenu {
  titulo:   string;
  icono:    string;
  url:      string;
  permisos: string[];
  submenu?: Tmenu[];
}

//tipo JULIO API
export interface Tjulioquery {
  by: string;
  q:  string;
}

export interface TJulio {
  nombre:        string;
  ci:            string;
  expedido:      string;
  celular:       string;
  email:         string;
  biometrico:    string | null;
  position_id:   number | null;
  dependence_id: number | null;
  dependence:    Dependence | null;
  position:      Dependence | null;
}

export interface Dependence {
  id:     number;
  nombre: string;
}

// End tipo Julio