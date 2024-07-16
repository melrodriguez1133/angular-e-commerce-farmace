import { Injectable } from '@angular/core';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  getProducts(): Product[] {
    return [
      {
        id: 1,
        title: 'Banditas Adhesivas',
        description: 'Banditas adhesivas ideales para cubrir pequeños cortes y rasguños. Con un diseño flexible que se adapta a la piel, estas banditas proporcionan protección y ayudan a la cicatrización.',
        image: 'https://i.pinimg.com/564x/34/0e/91/340e9144d781ea2827c9b798828d6879.jpg',
        price: 2.99,
        quantity:30
      },
      {
        id: 2,
        title: 'Esparadrapo Médico',
        description: 'Esparadrapo médico de alta calidad, ideal para fijar vendajes y otros apósitos. Con adhesivo hipoalergénico, es seguro para pieles sensibles y fácil de remover sin causar irritación.',
        image: 'https://i.pinimg.com/originals/6c/ae/f8/6caef8751fff9ca5b48ad17e4a2cf392.jpg',
        price: 3.49,
        quantity:20
      },
      {
        id: 3,
        title: 'Gazas Estériles',
        description: 'Gazas estériles de algodón, perfectas para limpiar y proteger heridas. Son suaves y absorbentes, ofreciendo una cobertura segura para evitar infecciones.',
        image: 'https://i.pinimg.com/564x/45/f5/18/45f518be517d12a838ea0136f04f9777.jpg',
        price: 4.99,
        quantity:10
      },
      {
        id: 4,
        title: 'Ibuprofeno 400 mg',
        description: 'Ibuprofeno 400 mg en tabletas, utilizado para aliviar el dolor, reducir la fiebre y disminuir la inflamación. Adecuado para el tratamiento de dolores de cabeza, musculares y menstruales.',
        image: 'https://i.pinimg.com/564x/7b/c0/dc/7bc0dc6670099bb0d228702ecd60ee1a.jpg',
        price: 6.99,
        quantity:20
      },
      {
        id: 5,
        title: 'Nurofen 200 mg',
        description: 'Nurofen 200 mg, un antiinflamatorio no esteroideo (AINE) que alivia el dolor y reduce la fiebre. Efectivo para dolores leves a moderados y molestias generales.',
        image: 'https://i.pinimg.com/564x/97/00/b7/9700b7cb43f8e17fd4c0e973bbb36821.jpg',
        price: 7.49,
        quantity:10
      }    
    ];
  }
}