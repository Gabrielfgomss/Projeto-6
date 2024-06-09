export interface Prato {
  nome: string;
  descricao: string;
  capa: string;
  id: number;
  quantidade: string;
  valor: number;
}

export interface Restaurante {
  capa: string;
  destaque?: boolean;
  tipoComida?: string;
  nomeRestaurante: string;
  descricaoRestaurante: string;
  nota?: string;
  id: number;
  pratos: Prato[];
}
