import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private database:AngularFirestore) { }

  async getEmailList(){
    let emailList = [];
    await this.database.collection("Users").ref.get().then(users=>{
      emailList = users.docs.map(doc=>doc.data().email)
    },
    error=>console.log(error))

    return emailList;
  }
}
