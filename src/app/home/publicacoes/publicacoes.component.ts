import { Bd } from './../../bd.service';
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css']
})
export class PublicacoesComponent implements OnInit {

  public email:string
  constructor(private bd:Bd) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
     this.email =  user.email
    })
    this.atualizarTimeLine();
  }
  public atualizarTimeLine():void{
    this.bd.consultaPublicacoes(this.email)
  }

}
