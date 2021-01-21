import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  ngOnInit():void{
    var config = {
      apiKey: "AIzaSyDm5u_PBqeyEbuDjA6ogfac2gU2ZfUUi2A",
      authDomain: "jta-instagram-clone-faf61.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-faf61.firebaseio.com",
      projectId: "jta-instagram-clone-faf61",
      storageBucket: "jta-instagram-clone-faf61.appspot.com",
      messagingSenderId: "533199827712",
      appId: "1:533199827712:web:509122f376291dc57039e5",
      measurementId: "G-2N1FEPRY24"
    };
    // Initialize Firebase
    firebase.initializeApp(config);
  }

}
