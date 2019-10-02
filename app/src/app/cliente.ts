export class Cliente {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  idade: number;
  endereco: {
    tipo: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    Estado: string;
    Pais: string;
    Cep: string;
  };
  telefone: {
    pais: string;
    area: string;
    numero: string;
  };
  thumb: string;
  obs: string;
  pontos: {
    total: number;
    historico: number;
    utilizados: number;
    expirados: number;
  };
}
