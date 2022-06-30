import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { JsonPlaceHolder } from '../json-place-holder';
import { Observable, Subject } from 'rxjs';
import { ShoppinCart } from '../shoppin-cart';
import { AlbumCardComponent } from '../album-card/album-card.component';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  shoppingCart:ShoppinCart[];

  Albumns:JsonPlaceHolder[];
  AlbumnsCopy:JsonPlaceHolder[];

  shoppingcart$ = new Observable<ShoppinCart[]>();
  count:number = 0;

  constructor(private Http:HttpService,private shppingCart:ShoppingCartService) {  
      
   this.Albumns = [];  
   this.AlbumnsCopy = [];  
   this.shoppingCart = [];

   this.GetAlbums();
 
  }

  ngOnInit(): void {

    this.shoppingcart$ = this.shppingCart.GetShoppingCart$();
    this.shoppingcart$.subscribe(response=> this.count = response.length);
  }

  GetAlbums(){

   return this.Http.GetAlbums().subscribe(x=>{
    
    this.Albumns = x; 
    this.AlbumnsCopy = this.Albumns.slice(1,10);
  
  },error=>{
    alert('Ocurrio un error al intentar obtener la informacion');
  })

  }
 

}
