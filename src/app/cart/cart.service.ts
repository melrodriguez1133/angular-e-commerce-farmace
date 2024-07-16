import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = []; 

  private cartCount = new BehaviorSubject<number>(0);

// Método para agregar un producto al carrito si no está agregado previamente
addProduct(product: Product): void {
  // Verificar si el producto ya está en el carrito
  if (!this.isProductInCart(product)) {
    this.products.push(product); // Agregar producto al arreglo
    this.cartCount.next(this.products.length); // Actualizar contador de productos
    console.log('Producto agregado al carrito:', product);
  } else {
    console.log('El producto ya está en el carrito:', product);
  }
}

// Método para verificar si un producto ya está en el carrito
private isProductInCart(product: Product): boolean {
  return this.products.some(p => p.id === product.id); // Comparar por ID u otra propiedad única
}

// Método para obtener todos los productos en el carrito
getProducts(): Product[] {
  return this.products;
}

getProductById(id: number): Product | undefined {
  return this.products.find(p => p.id === id);
}


// Método para obtener el número total de productos en el carrito
getCartCount(): BehaviorSubject<number> {
  return this.cartCount;
}

//Metodo para eliminar productos del carrito
removeItem(product: Product) {
  this.products = this.products.filter(p => p.id !== product.id);
}

clearCart() {
  this.products = [];
}
}