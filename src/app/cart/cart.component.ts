import { Component ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { CartService } from './cart.service';
import { ProductService } from '../product/product.service';
import { Product } from '../models/products';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent  implements OnInit {

  products: Product[] = [];
  DuplicateProducts: Product[] = [];

  constructor(private cartService: CartService,private router: Router) { }
  
  // Se ejecuta al inicializar el componente, obtiene los productos del carrito y crea un array con cantidades inicializadas en 1.
  ngOnInit(): void {
    console.log('get products');
    this.products = this.cartService.getProducts();
    this.DuplicateProducts = this.products.map(product => ({ ...product, quantity: 1 }));
   
    console.log('Lista de productos:');
    this.products.forEach(product => console.log(product));
    
    console.log('Lista de productos:');
    this.DuplicateProducts.forEach(product => console.log(product));
  }

  navigateTo(route: string): void {
    this.router.navigateByUrl(route);
  }
  
  // Disminuye la cantidad del producto en el carrito, asegurando que sea minimo 1.
  decreaseQuantity(product: Product) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  // Aumenta la cantidad del producto en el carrito, hasta el límite de la cantidad disponible.
  increaseQuantity(product: Product) {
    const originalProduct = this.products.find(p => p.id === product.id);
    if (originalProduct && product.quantity < originalProduct.quantity) {
      product.quantity++;
    }
  }

  // Elimina el producto del carrito y actualiza la lista de productos.
  removeItem(product: Product) {
    this.products = this.products.filter(p => p.id !== product.id);
    this.cartService.removeItem(product);
    this.DuplicateProducts = this.cartService.getProducts(); // Update the local products array
    console.log('Lista de productos delete:');
    this.products.forEach(product => console.log(product));
  }

  // Calcula el precio total de todos los productos en el carrito considerando sus cantidades.
  getTotalPrice(): number {
    return this.DuplicateProducts.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  // Limpia el carrito y navega a la página de productos para continuar con la compra.
  proceedToCheckout() {
    this.cartService.clearCart();
    this.DuplicateProducts = this.cartService.getProducts();
    console.log('Proceed to checkout');
    this.router.navigate(['/productos']);
  }
  

}
