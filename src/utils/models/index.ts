export interface Prato {
  descricao: string;
  foto: string;
  id: number;
  nome: string;
  porcao: string;
  preco: number;
  capa?: string;
  titulo?: string;
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

export interface Payment {
  card?: {
    name: string;
    number: string;
    code: number;
    expires: {
      month: number;
      year: number;
    };
  };
  delivery?: {
    receiver: string;
    address: {
      description: string | "";
      city: string;
      zipCode: string;
      number: number;
      complement: string | "";
    };
  };
}
