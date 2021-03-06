import { state, style, trigger, transition, animate, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso-component',
  templateUrl: './acesso-component.component.html',
  styleUrls: ['./acesso-component.component.css'],
  animations:[
    trigger('animacao-banner',[
      state('criado',style({
        opacity:1
      })),
      transition('void => criado',[
        style({opacity: 0, transform: 'translate(-30px,0)'}),
        animate('500ms 0s ease-in-out')
      ])
    ]),
    trigger('animacao-painel',[
      state('criado',style({
        opacity:1
      })),
      transition('void => criado', [
        style({opacity: 0, transform: 'translate(50px,0)'}),
        animate('1.5s 0s ease-in-out', keyframes([
          style({offset: 0.15, opacity:1, transform:'translateX(0)'}),
          style({offset: 0.86, opacity:1, transform:'translateX(0)'}),
          style({offset: 0.88, opacity:1, transform:'translateY(-10px)'}),
          style({offset: 0.90, opacity:1, transform:'translateY(10px)'}),
          style({offset: 0.92, opacity:1, transform:'translateY(-10px)'}),
          style({offset: 0.94, opacity:1, transform:'translateY(10px)'}),
          style({offset: 0.96, opacity:1, transform:'translateY(-10px)'}),
          style({offset: 0.98, opacity:1, transform:'translateY(10px)'}),
        ]))
      ])
    ])
  ]
})
export class AcessoComponentComponent implements OnInit {

  public estadoBanner: string = 'criado';
  public estadoPainel: string = 'criado';
  public cadastro:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public exibirPainel(event:string):void{
    this.cadastro = event === 'cadastro' ? true : false
  }

  public inicioAnimacao():void{
    //console.log('inicio animação')
  }
  public fimAnimacao():void{
    //console.log('fim animação')
  }
}
