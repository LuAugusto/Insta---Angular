import { Bd } from './bd.service';
import { Autenticacao } from './autenticacao.service';
import {AutenticacaoGuard} from './autenticacao-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcessoComponentComponent } from './acesso-component/acesso-component.component';
import { BannerComponentComponent } from './acesso-component/banner-component/banner-component.component';
import { LoginComponentComponent } from './acesso-component/login-component/login-component.component';
import { CadastroComponentComponent } from './acesso-component/cadastro-component/cadastro-component.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PublicacoesComponent } from './home/publicacoes/publicacoes.component';
import { IncluirPublicacaoComponent } from './home/incluir-publicacao/incluir-publicacao.component';
import {Progresso} from './progresso.service';



@NgModule({
  declarations: [
    AppComponent,
    AcessoComponentComponent,
    BannerComponentComponent,
    LoginComponentComponent,
    CadastroComponentComponent,
    HomeComponent,
    PublicacoesComponent,
    IncluirPublicacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [Autenticacao,AutenticacaoGuard,Bd,Progresso],
  bootstrap: [AppComponent]
})
export class AppModule { }
