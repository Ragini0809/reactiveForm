import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
baseUrl='http://localhost:3000/'
formStatus=new BehaviorSubject<any>('')
  constructor(private http:HttpClient) { }
  postdata(endUser:string,body:string){
    return this.http.post(this.baseUrl+endUser,body)
  }
  getData(endPoint:string){
    return this.http.get(this.baseUrl+endPoint)
  }
  getDataId(endPoint:string,id:number){
 return this.http.get<any>(this.baseUrl+endPoint+'/'+id)
  }
  updateData(endPoint:string,body:any){ 
    return this.http.put(this.baseUrl+endPoint+'/'+body.id,body)
  }
  deleteData(endPoint:string,id:number){
return this.http.delete(this.baseUrl+endPoint+'/'+id)
  }

}
