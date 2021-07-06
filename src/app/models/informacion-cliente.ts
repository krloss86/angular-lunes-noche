export interface InformacionCliente {
  saldos: Saldos;
  equipo: Equipo;
  cliente: Cliente;
  recomendaciones: Recomendaciones;
}

export interface Recomendaciones {
  recomendaciones: Recomendacione[];
}

export interface Recomendacione {
  titulo: string;
  subTitulo: string;
  descripcion: string;
}

export interface Cliente {
  contactos: Contacto[];
}

interface Contacto {
  fecha: string;
  empresa: string;
  descripcion: string;
}

interface Equipo {
  datosEquipo: DatosEquipo[];
}

interface DatosEquipo {
  titulo: string;
  dato: string;
}

export interface Saldos {
  datosSaldos: DatosSaldo[];
}

export interface DatosSaldo {
  titulo: string;
  fecha: string;
  descripcion: string;
}