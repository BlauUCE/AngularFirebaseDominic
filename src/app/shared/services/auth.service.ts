import { Injectable } from '@angular/core';
import { UserI } from "../models/user.interface";
import { Observable } from "rxjs";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userData: Observable<firebase.User>;

  constructor( private afAuth: AngularFireAuth) { 
    this.userData = afAuth.authState;
  }

  loginByEmail(user: UserI) {
    const {email, password} = user;

    return this.afAuth.auth
    .signInWithEmailAndPassword(email, password);
    /* .then(res => {
      console.log("Successfully", res);
    })
    .catch(err => console.log("Error", err)); */
  }

  logOut() {
    this.afAuth.auth.signOut();
  }
}
