import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { JsonPlaceHolder } from './json-place-holder';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

 Url:string = "https://jsonplaceholder.typicode.com/photos";

  constructor(private Http:HttpClient) { }

  GetAlbums(){

   return this.Http.get<JsonPlaceHolder[]>(this.Url);

  } 
  
  


}
