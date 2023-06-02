import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent {

  nome: string = '';
  validade: string = '';
  preco: number = 0;

  constructor() {

  }
  salvarProduto(): void {
    console.log('Nome: ', this.nome)
    console.log('Validade: ', this.validade)
    console.log('Preço: ', this.preco)
    alert('Salvo com sucesso')
  }

}
