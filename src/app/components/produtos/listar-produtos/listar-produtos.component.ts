import { IProduto } from './../../../model/IProduto.model';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css'],
})
export class ListarProdutosComponent {
  listaProdutos: IProduto[] = [];
  constructor(private produtosService: ProdutosService) {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtosService.buscarTodos().subscribe((retorno) => {
      this.listaProdutos = retorno;
    });
  }
}
