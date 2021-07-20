interface User {
   name: string;
} 

interface Product {
   id: string;
   price: number;
}

class Cart {
   protected user: User;
   private store: object;

   constructor(user: User) {
       this.user = user;
       this.store = {};
   }
   put(id: string, product: Product) {
       this.store[id] = product;
   }
   get(id: string) {
       return this.store[id];
   }
}

class PromotionCart extends Cart {
    addPromotion() {
        this.user;
    }
}

const cart2 = new PromotionCart({ name: 'john' });
const cartJohn = new Cart({ name: 'john' });
const cartJay = new Cart({ name: 'jay' });