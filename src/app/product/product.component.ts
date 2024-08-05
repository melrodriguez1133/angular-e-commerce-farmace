import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import { CartService } from '../cart/cart.service';
import { Product } from '../models/products';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  cartCount: number=0;

  products: Product[] = [];

  constructor(private router: Router,private productsService: ProductService,private cartService: CartService) { 

  }

  navigateToCart() {
    this.router.navigate(['/carrito']);
  }

  // Se ejecuta al inicializar el componente, obtiene los productos y actualiza el conteo de productos en el carrito.
  ngOnInit(): void {
    console.log('get products');
    this.products = this.productsService.getProducts();
    this.cartCount = this.cartService.getProducts().length; 
  }

  // Agrega un producto al carrito y actualiza el conteo de productos en el carrito.
  addToCart(product: Product): void {
    console.log('Método addToCart llamado con el producto:', product);
    this.cartService.addProduct(product);
  
    this.cartCount = this.cartService.getProducts().length; 
  
    console.log('Productos en el carrito:', this.cartCount);
  }
  
}
