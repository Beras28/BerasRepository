import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppinCart } from './shoppin-cart';
import { ShoppingCartService } from './shopping-cart.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BHDTest';

  shoppingCart$ = new Observable<ShoppinCart[]>();
  count:number = 0;

  constructor(private Shoppintcart:ShoppingCartService){}

  ngOnInit(): void {

    this.shoppingCart$ = this.Shoppintcart.GetShoppingCart$();
    this.shoppingCart$.subscribe(Response=> this.count = Response.length  );
  
  }


}
