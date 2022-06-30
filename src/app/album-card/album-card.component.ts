import { Component, Input, OnInit } from '@angular/core';
import { JsonPlaceHolder } from '../json-place-holder';
import { Observable,Subject } from 'rxjs';
import { ShoppinCart } from '../shoppin-cart';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {

  @Input() AlbumItem:JsonPlaceHolder = {thumbnailUrl:"",id:0,title:"",url:"",albumId:0};

  ShoppingCart:ShoppinCart;
  ShoppingCart$ = new Observable<ShoppinCart[]>();

  constructor(private shoppingcart:ShoppingCartService) { 
    this.ShoppingCart = {ItemId:0,ItemTitle:""};
  }

  ngOnInit(): void {

    this.ShoppingCart$ = this.shoppingcart.GetShoppingCart$();
    this.ShoppingCart$.subscribe(x=> console.log(x.length))

  }

  AddItem(ItemId:number,ItemTitle:string){

    this.ShoppingCart = {ItemId:ItemId,ItemTitle:ItemTitle};

    this.shoppingcart.AddItem(this.ShoppingCart);

  }

  
   
   

}
