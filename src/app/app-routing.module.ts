import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { CadastrarProdutosComponent } from './components/produtos/cadastrar-produtos/cadastrar-produtos.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'produtos', component:ListarProdutosComponent},
  { path: 'produtos/cadastrar', component: CadastrarProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
