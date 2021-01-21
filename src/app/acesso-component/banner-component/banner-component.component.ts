import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {Imagem} from './image.model';
@Component({
  selector: 'app-banner-component',
  templateUrl: './banner-component.component.html',
  styleUrls: ['./banner-component.component.css'],
  animations:[
    trigger('banner',[
      state('escondido',style({
        opacity:0
      })),
      state('visivel', style({
        opacity:1
      })),
      transition('escondido <=> visivel', animate('1s ease-in'))

    ])
  ]
})
export class BannerComponentComponent implements OnInit {

  public estado: string = 'escondido'

  public imagens: Imagem[] = [
    {estado: 'visivel', url:'/assets/banner/1.png'},
    {estado: 'escondido', url:'/assets/banner/2.png'},
    {estado: 'escondido', url:'/assets/banner/3.png'},
    {estado: 'escondido', url:'/assets/banner/4.png'},
    {estado: 'escondido', url:'/assets/banner/5.png'},
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.logicaRotacao(),3000)
  }

  public logicaRotacao():void{

    let idx: number

    for(let i: number = 0; i <= 4; i++){
      if(this.imagens[i].estado === 'visivel'){
        this.imagens[i].estado = 'escondido'
        
        idx = i === 4 ? 0 : i + 1

        break
      }
    }

    this.imagens[idx].estado = 'visivel';
    setTimeout(() => this.logicaRotacao(),2000);
  }

}
