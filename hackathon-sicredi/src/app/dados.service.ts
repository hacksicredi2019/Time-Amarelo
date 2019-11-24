import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<any>(`http://172.22.239.57:5000/escola/id/43367348`).subscribe(dados => {
      console.log(dados);
    });





  }
}
