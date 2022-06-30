import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';
import { ShoppinCart } from './shoppin-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingCart:ShoppinCart[];
  shoppingCart$ = new Subject<ShoppinCart[]>();
  

  constructor() { 
    this.shoppingCart = [];
  }


  AddItem(ShoppinCart:ShoppinCart){

    this.shoppingCart.push(ShoppinCart);
    this.shoppingCart$.next(this.shoppingCart);

  }


  DeleteItem(itemId:number){

   var index:number = this.shoppingCart.findIndex(x=>x.ItemId == itemId);
    this.shoppingCart.splice(index,1);
    this.shoppingCart$.next(this.shoppingCart);

  }


  GetShoppingCart$():Observable<ShoppinCart[]>{

    return this.shoppingCart$.asObservable();
  }


}
