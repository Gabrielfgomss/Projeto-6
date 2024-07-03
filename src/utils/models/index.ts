export interface Prato {
  descricao: string;
  foto: string;
  id: number;
  nome: string;
  porcao: string;
  preco: number;
}

export interface Restaurante {
  avaliacao?: number;
  capa: string;
  cardapio: Prato[];
  descricao: string;
  destacado?: boolean;
  id: number;
  tipo?: string;
  titulo: string;
}
