import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IncomeTax{
  year:string;
  age:string;
  amount:string;
}

@Injectable({
  providedIn: 'root'
})
export class IncomeTaxableService {
  private baseUrl = '//localhost:8081/calculator';

  constructor(private http:HttpClient) { }

  fetch(data):Observable<any>{
    const param = new HttpParams()
    .set('age',data.age)
    .set('taxYear',data.year)
    .set('taxableAmount',data.amount)
    .set('medMembers',data.members)
    .set('period',data.period);
     console.log(param);
     return this.http.get<any>(this.baseUrl,{params:param});
   
  }
}
