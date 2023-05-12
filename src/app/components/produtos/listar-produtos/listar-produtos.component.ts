import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css'],
})
export class ListarProdutosComponent {
  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumeros: number[] = [15, 15.18, 100];
  listaProdutos: any[] = [
    {
      nome: 'Curso de Angular',
      precoProduto: 35.56,
      validade: '2021-12-31',
      id: 1,
    },
    {
      nome: 'Curso de Ionic',
      precoProduto: 50,
      validade: '2021-12-31',
      id: 2,
    },
    {
      id: 3,
      nome: 'Curso de Ionic Avançado',
      precoProduto: 50,
      validade: '2021-12-31',
    },
  ];

  objetoModelo = {
    nome: 'Fatima',
    idade: 18,
    altura: 1.56,
    graduado: true,
  };

  constructor() {
    for (let item of this.listaStrings) {
      console.log(item);
    }
    for (const item of this.listaNumeros) {
      console.log(item);
    }

    console.log(this.objetoModelo);
  }
}
