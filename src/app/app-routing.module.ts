import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcluidoComponent } from './components/concluido/concluido.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ProdutoCadastroComponent } from './components/produto-cadastro/produto-cadastro.component';
import { SistemaComponent } from './components/sistema/sistema.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ListaprodutosComponent } from './components/produto-lista/produto-lista.component';
import { ClienteListaComponent } from './components/cliente-lista/cliente-lista.component';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component';
import { PetCadastroComponent } from './components/pet-cadastro/pet-cadastro.component';
import { PetListaComponent } from './components/pet-lista/pet-lista.component';

const routes: Routes = [
  {path: '', component: CadastroComponent, children: [
    {path: '', component: FormularioComponent},
    {path: 'concluido', component: ConcluidoComponent},
  ]},
  {path: 'sistema', component: SistemaComponent, children: [
    {path: '', component: ProdutoCadastroComponent, children: [
      {path: '', component: ConcluidoComponent},
    ]},
    {path: 'produtos-cadastro', component: ProdutoCadastroComponent},
    {path: 'produtos-lista', component: ListaprodutosComponent},
    {path: 'clientes-lista', component: ClienteListaComponent},
    {path: 'clientes-cadastro', component: ClienteCadastroComponent},
    {path: 'pets-cadastro', component: PetCadastroComponent},
    {path: 'pets-lista', component: PetListaComponent},
  ]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*app component router outlet,
  concluido tem que ser subrotas da cadastro

*/