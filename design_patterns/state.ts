interface State {
  order: Order;

  cancleOrder();
  verifyPayment();
  shipOrder();
}

class Order {

  public currentState: State;
  constructor() {
    
  }

  public setState(state: State) {
    this.currentState = state;
  }

  public getState(): State {
    return this.currentState;
  }
  
}

class PaymentPendingState implements State {
  public order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  public cancleOrder() {
    throw new Error("Method not implemented.");
  }

  public verifyPayment() {
    throw new Error("Method not implemented.");
  }

  public shipOrder() {
    throw new Error("Method not implemented.");
  }
  
}


class OrderBeingPreparedState implements State {
  public order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  public cancleOrder() {
    throw new Error("Method not implemented.");
  }

  public verifyPayment() {
    throw new Error("Method not implemented.");
  }

  public shipOrder() {
    throw new Error("Method not implemented.");
  }
  
}

class OrderShippedState implements State {
  public order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  public cancleOrder() {
    throw new Error("Method not implemented.");
  }

  public verifyPayment() {
    throw new Error("Method not implemented.");
  }

  public shipOrder() {
    throw new Error("Method not implemented.");
  }
  
}
