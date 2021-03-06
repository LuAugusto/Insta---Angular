import { Progresso } from './../../progresso.service';
import { Bd } from './../../bd.service';
import { FormGroup,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import {interval, Observable, Subject} from 'rxjs'
import 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  public email:string
  private imagem:any

  public progressoPublicacao: string  = 'pendente'
  public porcentagemUpload: number

  public formulario:FormGroup = new FormGroup({
    'titulo':new FormControl(null)
    })

  constructor(private bd:Bd, private progresso:Progresso) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email
    })
  }

  public publicar():void{

   this.bd.publicar({
     email:this.email,
     titulo:this.formulario.value.titulo,
     imagem:this.imagem[0]
   })

   let acompanhamentoUpload = interval(1500);
   let continua = new Subject()

   continua.next(true);

   acompanhamentoUpload.pipe(takeUntil(continua))
   .subscribe(() => {
    console.log(this.progresso.status)
    console.log(this.progresso.estado)
    this.progressoPublicacao = 'andamento'

   })
   
  }

  public preparaImagemUpload(event:Event):void{
   this.imagem = (<HTMLInputElement>event.target).files;
  }

}
