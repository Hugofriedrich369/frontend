import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  nomeEmpresa: string = 'HAS Company';
  nomeFunc: string = 'Joao';
  sobrenomeFunc: string = "Silva";
  idFunc: number = 1;
  salFunc: number= 2000.00;
  status: boolean = true;
  nomeCompleto: string = `Nome do funcionario: ${this.nomeFunc} ${this.sobrenomeFunc}`;
  nomeProduto: string = "Curso de Angular";
  anuncio: string = `O ${this.nomeProduto} está em promoção`;
  idProduto: number = 123;
  precoProduto: number = 2.59;
  promocao: boolean = false;
  foto:string = 'assets/img/crud.png'



    constructor() {

    }

}
