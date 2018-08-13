import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public afd: AngularFireDatabase) {  }

  getDiensten(){
return this.afd.list('/diensten/');
  }

  addDiensten(name){
    this.afd.list('/diensten/').push(name);
  }

  removeDiensten(id){
    this.afd.list('/diensten/').remove(id);
  }

}
