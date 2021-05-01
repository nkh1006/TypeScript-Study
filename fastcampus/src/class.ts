interface User {
   name: string;
}

interface Product {
   id: string;
   price: number;
}

class Cart {
   user: User;
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