import { Autenticacao } from './../../autenticacao.service';
import { FormGroup , FormControl,Validators} from '@angular/forms';
import { Component, OnInit,EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter()

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(100)]),
    'senha': new FormControl(null,[Validators.required,Validators.minLength(6)]),
  })
 

  constructor(private autenticacao:Autenticacao) { }

  public msg:any
  ngOnInit(): void {

  }
  

  public exibirPainelCadastro():void{
    this.exibirPainel.emit('cadastro')
  }

  public autenticar(): void{
    this.msg = this.autenticacao.autenticar( this.formulario.value.email,this.formulario.value.senha)
     
  }
  

}
