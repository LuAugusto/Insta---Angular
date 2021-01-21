import { Progresso } from './progresso.service';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class Bd{


      constructor(private progresso:Progresso){}
      public publicar(publicacao:any):void{

            console.log(publicacao);
            let nomeImagem = Date.now()

            firebase.storage().ref()
                  .child(`imagens/${nomeImagem}`)
                  .put(publicacao.imagem)
                        

            
            firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
            .push({
                  titulo:publicacao.titulo
            })

            
      }
      public consultaPublicacoes(emailUsuario:string):any{
            firebase.database().ref(`publicacoes/${btoa(emailUsuario)}`)
            .once('value')
            .then((snapshot:any) => {
                  console.log(snapshot.val());

                  snapshot.forEach((childSnapshot:any) =>{
                        //cosnultar url img
                        firebase.storage().ref()
                        .child(`imagens/${childSnapshot.key}`)
                        .getDownloadURL()
                        .then((url:string) => {
                              console.log(url);
                        })
                  })
            })
      }
}