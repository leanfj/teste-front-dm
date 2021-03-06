import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const clientes = [
      {
        id: 1,
        nome: 'Paulo Santos de Almeida',
        email: 'paulo.santos@email.com',
        cpf: '02341233409',
        idade: 32,
        endereco: {
          tipo: 'Rua',
          logradouro: 'Visconde de Souza',
          numero: '23',
          complemento: 'Bloco 2, Ap 201',
          bairro: 'Barra da Tijuca',
          cidade: 'Rio de Janeiro',
          Estado: 'RJ',
          Pais: 'Brasil',
          Cep: '22783-115'
        },
        telefone: {
          pais: '55',
          area: '21',
          numero: '987654321'
        },
        thumb: 'http://loremflickr.com/g/150/150/face?random=1',
        obs:
          'No último atendimento, o Sr. Paulo estava bastante irritado com a demora no cadastro das notas fiscais.',
        pontos: {
          total: 189247.73,
          historico: 54852,
          utilizados: 109000,
          expirados: 78000
        }
      },
      {
        id: 2,
        nome: 'Antonio Marques da Silva',
        email: 'tonhomsilva@email.com',
        cpf: '23456789012',
        idade: 32,
        endereco: {
          tipo: 'Rua',
          logradouro: 'Visconde de Souza',
          numero: '23',
          complemento: 'Bloco 2, Ap 201',
          bairro: 'Barra da Tijuca',
          cidade: 'Rio de Janeiro',
          Estado: 'RJ',
          Pais: 'Brasil',
          Cep: '22783-115'
        },
        telefone: {
          pais: '55',
          area: '21',
          numero: '987654321'
        },
        thumb: 'http://loremflickr.com/g/150/150/face?random=1',
        obs:
          'No último atendimento, o Sr. Antonio Marques estava bastante irritado com a demora no cadastro das notas fiscais.',
        pontos: {
          total: 1892.73,
          historico: 54852,
          utilizados: 109000,
          expirados: 78000
        }
      },
      {
        id: 3,
        nome: 'João Sousa Siqueira',
        email: 'jaosiq@email.com',
        cpf: '34567890123',
        idade: 32,
        endereco: {
          tipo: 'Rua',
          logradouro: 'Visconde de Souza',
          numero: '23',
          complemento: 'Bloco 2, Ap 201',
          bairro: 'Barra da Tijuca',
          cidade: 'Rio de Janeiro',
          Estado: 'RJ',
          Pais: 'Brasil',
          Cep: '22783-115'
        },
        telefone: {
          pais: '55',
          area: '21',
          numero: '987654321'
        },
        thumb: 'http://loremflickr.com/g/150/150/face?random=1',
        obs:
          'No último atendimento, o Sr. João Sousa estava bastante irritado com a demora no cadastro das notas fiscais.',
        pontos: {
          total: 1897.73,
          historico: 54852,
          utilizados: 109000,
          expirados: 78000
        }
      },
      {
        id: 4,
        nome: 'Armando Jogada',
        email: 'armando.player@gmail.com',
        cpf: '45678901234',
        idade: 32,
        endereco: {
          tipo: 'Rua',
          logradouro: 'Visconde de Souza',
          numero: '23',
          complemento: 'Bloco 2, Ap 201',
          bairro: 'Barra da Tijuca',
          cidade: 'Rio de Janeiro',
          Estado: 'RJ',
          Pais: 'Brasil',
          Cep: '22783-115'
        },
        telefone: {
          pais: '55',
          area: '21',
          numero: '987654321'
        },
        thumb: 'http://loremflickr.com/g/150/150/face?random=1',
        obs:
          'No último atendimento, o Sr. Armando Jogada estava bastante irritado com a demora no cadastro das notas fiscais.',
        pontos: {
          total: 189471247.73,
          historico: 54852,
          utilizados: 109000,
          expirados: 78000
        }
      },
      {
        id: 5,
        nome: 'Jordência Sexta',
        email: 'jordanfriday@hotmail.com',
        cpf: '56789012345',
        idade: 32,
        endereco: {
          tipo: 'Rua',
          logradouro: 'Visconde de Souza',
          numero: '23',
          complemento: 'Bloco 2, Ap 201',
          bairro: 'Barra da Tijuca',
          cidade: 'Rio de Janeiro',
          Estado: 'RJ',
          Pais: 'Brasil',
          Cep: '22783-115'
        },
        telefone: {
          pais: '55',
          area: '21',
          numero: '987654321'
        },
        thumb: 'http://loremflickr.com/g/150/150/face?random=1',
        obs:
          'No último atendimento, o Sra. Jordência Sexta estava bastante irritado com a demora no cadastro das notas fiscais.',
        pontos: {
          total: 19247.73,
          historico: 54852,
          utilizados: 109000,
          expirados: 78000
        }
      },
      {
        id: 6,
        nome: 'Kelly Guissa',
        email: 'salsich@obig.net',
        cpf: '67890123456',
        idade: 32,
        endereco: {
          tipo: 'Rua',
          logradouro: 'Visconde de Souza',
          numero: '23',
          complemento: 'Bloco 2, Ap 201',
          bairro: 'Barra da Tijuca',
          cidade: 'Rio de Janeiro',
          Estado: 'RJ',
          Pais: 'Brasil',
          Cep: '22783-115'
        },
        telefone: {
          pais: '55',
          area: '21',
          numero: '987654321'
        },
        thumb: 'http://loremflickr.com/g/150/150/face?random=1',
        obs:
          'No último atendimento, o Sra. Kelly Guissa estava bastante irritado com a demora no cadastro das notas fiscais.',
        pontos: {
          total: 189997.73,
          historico: 54852,
          utilizados: 109000,
          expirados: 78000
        }
      },
      {
        id: 7,
        nome: 'Paula Lima',
        email: 'plima@obig.net',
        cpf: '67890123456',
        idade: 32,
        endereco: {
          tipo: 'Rua',
          logradouro: 'Visconde de Souza',
          numero: '23',
          complemento: 'Bloco 2, Ap 201',
          bairro: 'Barra da Tijuca',
          cidade: 'Rio de Janeiro',
          Estado: 'RJ',
          Pais: 'Brasil',
          Cep: '22783-115'
        },
        telefone: {
          pais: '55',
          area: '21',
          numero: '987654321'
        },
        thumb: 'http://loremflickr.com/g/150/150/face?random=1',
        obs:
          'No último atendimento, o Sra. Paula Lima estava bastante irritado com a demora no cadastro das notas fiscais.',
        pontos: {
          total: 1847.73,
          historico: 54852,
          utilizados: 109000,
          expirados: 78000
        }
      },
      {
        id: 8,
        nome: 'Carlos Teixiera',
        email: 'calostex@obig.net',
        cpf: '67890123456',
        idade: 32,
        endereco: {
          tipo: 'Rua',
          logradouro: 'Visconde de Souza',
          numero: '23',
          complemento: 'Bloco 2, Ap 201',
          bairro: 'Barra da Tijuca',
          cidade: 'Rio de Janeiro',
          Estado: 'RJ',
          Pais: 'Brasil',
          Cep: '22783-115'
        },
        telefone: {
          pais: '55',
          area: '21',
          numero: '987654321'
        },
        thumb: 'http://loremflickr.com/g/150/150/face?random=1',
        obs:
          'No último atendimento, o Sr. Carlos Teixiera estava bastante irritado com a demora no cadastro das notas fiscais.',
        pontos: {
          total: 9247.73,
          historico: 54852,
          utilizados: 109000,
          expirados: 78000
        }
      },
      {
        id: 9,
        nome: 'Samara Pina',
        email: 'sampi@obig.net',
        cpf: '67890123456',
        idade: 32,
        endereco: {
          tipo: 'Rua',
          logradouro: 'Visconde de Souza',
          numero: '23',
          complemento: 'Bloco 2, Ap 201',
          bairro: 'Barra da Tijuca',
          cidade: 'Rio de Janeiro',
          Estado: 'RJ',
          Pais: 'Brasil',
          Cep: '22783-115'
        },
        telefone: {
          pais: '55',
          area: '21',
          numero: '987654321'
        },
        thumb: 'http://loremflickr.com/g/150/150/face?random=1',
        obs:
          'No último atendimento, o Sra. Samara Pina estava bastante irritado com a demora no cadastro das notas fiscais.',
        pontos: {
          total: 189247,
          historico: 54852,
          utilizados: 109000,
          expirados: 78000
        }
      },
      {
        id: 10,
        nome: 'Barbara Sintra',
        email: 'bsintra@obig.net',
        cpf: '67890123456',
        idade: 32,
        endereco: {
          tipo: 'Rua',
          logradouro: 'Visconde de Souza',
          numero: '23',
          complemento: 'Bloco 2, Ap 201',
          bairro: 'Barra da Tijuca',
          cidade: 'Rio de Janeiro',
          Estado: 'RJ',
          Pais: 'Brasil',
          Cep: '22783-115'
        },
        telefone: {
          pais: '55',
          area: '21',
          numero: '987654321'
        },
        thumb: 'http://loremflickr.com/g/150/150/face?random=1',
        obs:
          'No último atendimento, o Sra. Barbara Sintra estava bastante irritado com a demora no cadastro das notas fiscais.',
        pontos: {
          total: 189273,
          historico: 54852,
          utilizados: 109000,
          expirados: 78000
        }
      }
    ];

    const notas = [];

    return { clientes, notas };
  }
}
