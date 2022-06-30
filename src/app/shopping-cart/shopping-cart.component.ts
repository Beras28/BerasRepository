import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppinCart } from '../shoppin-cart';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingcart$ = new Observable<ShoppinCart[]>();
  shoppingCartObj:ShoppinCart[] = [];
  count:number = 0;

  constructor(private shoppingCart:ShoppingCartService) { }

  ngOnInit(): void {

    this.shoppingcart$ = this.shoppingCart.GetShoppingCart$();
    this.shoppingcart$.subscribe( response=>
       this.shoppingCartObj = response
      );


  }

  DeleteItem(ItemId:number){

    this.shoppingCart.DeleteItem(ItemId);


  }

}
