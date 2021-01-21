
import { HomeComponent } from './home/home.component';
import { AcessoComponentComponent } from './acesso-component/acesso-component.component';
import { LoginComponentComponent } from './acesso-component/login-component/login-component.component';
import { CadastroComponentComponent } from './acesso-component/cadastro-component/cadastro-component.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AutenticacaoGuard} from './autenticacao-guard.service';


const routes: Routes = [
  {path:"cadastrar", component:CadastroComponentComponent},
  {path:'', component:AcessoComponentComponent},
  {path:"login",component:LoginComponentComponent},
  {path:'home',component:HomeComponent, canActivate:[AutenticacaoGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
