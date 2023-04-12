import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor( private http :HttpClient) { }
  postUser(data : any){
    return this.http.post<any>('http://localhost:3000/question', data)
      .pipe(map((res:any)=>{
    return res;
      }))
  }
  getUser(){
    return this.http.get<any>('http://localhost:3000/question')
      .pipe(map((res:any)=>{
    return res;
      }))
  }
//   updateUser(data :any,id: number){
//     return this.http.put<any>('http://localhost:3000/question/'+id ,data)
//       .pipe(map((res:any)=>{
//     return res;
//       }))
//   }
//   deleteUser(id : number){
//     return this.http.delete<any>('http://localhost:3000/question/'+id)
//     .pipe(map((res:any)=>{
//     return res;
//     }))
// }
getProduct(id:string){
    return this.http.get<any>(`http://localhost:3000/question/${id}`);
}
}
