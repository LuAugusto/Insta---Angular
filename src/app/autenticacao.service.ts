import { Usuario } from './acesso-component/usuario.model';
import firebase from 'firebase';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
@Injectable()
export class Autenticacao{

      public token_id:string
      public msg:string
      

      constructor(private router:Router){}
      public cadastrarUsuario(usuario:Usuario):Promise<any>{
            return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
                  .then((resposta:any) => {

                        delete usuario.senha
                        firebase.database().ref(`usuario_detalhe/${(usuario.email)}`)
                              .set(usuario)


                  })
                  .catch((error: Error) => {
                        return error;
                  })
      }           

      public autenticar(email:string, senha:string):void{

            firebase.auth().signInWithEmailAndPassword(email, senha)
                  .then((resposta:any) => {
                        firebase.auth().currentUser.getIdToken()
                        .then((idToken:string) => {
                              this.token_id = idToken
                              localStorage.setItem('idToken',idToken);
                              this.router.navigate(['/home']);
                        })
                  })
                  .catch((error:Error) => {
                     this.msg = error.message
                     
                  })
      }
      public autenticado():boolean{

            if(this.token_id === undefined && localStorage.getItem('idToken') !== null){
                  this.token_id = localStorage.getItem('idToken');
            }
            if(this.token_id === undefined){
                  this.router.navigate(['/']);
            }
            return this.token_id !== undefined;
      }

      public sair():void{
            firebase.auth().signOut()
            .then(() => {
                  localStorage.removeItem('idtoken')
                  this.token_id = undefined
                  this.router.navigate(['/']);

            })
            
      }
}