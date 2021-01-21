import { Autenticacao } from './../../autenticacao.service';
import { Usuario } from './../usuario.model';
import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-cadastro-component',
  templateUrl: './cadastro-component.component.html',
  styleUrls: ['./cadastro-component.component.css']
})
export class CadastroComponentComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter()

  public formulario: FormGroup = new FormGroup({
   
    'email': new FormControl(null, [Validators.required,Validators.minLength(10),Validators.maxLength(100)]),
    'nome_completo': new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(100)]),
    'nome_usuario': new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(100)]),
    'senha':new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(20)])
 
  })
  public msg:any

  constructor(
    private autenticacao: Autenticacao
  ) { }

  ngOnInit(): void {
  }

  public exibirPainelLogin():void{
    this.exibirPainel.emit('login')
  }

  public cadastrarUsuario():void{
    //console.log(this.formulario);

    let usuario: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    )
    this.autenticacao.cadastrarUsuario(usuario)
      .then(() => this.exibirPainelLogin())
      .catch((error:Error) => {
          this.msg = error;
      })
  }
}
