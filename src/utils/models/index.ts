export interface Prato {
  nome: string;
  descricao: string;
  foto: string;
  id: number;
  porcao: string;
  preco: number;
}

export interface Restaurante {
  capa: string;
  destacado?: boolean;
  tipo?: string;
  titulo: string;
  descricao: string;
  avaliacao?: number;
  id: number;
  cardapio: Prato[];
}
