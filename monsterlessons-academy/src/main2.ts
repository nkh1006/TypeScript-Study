interface IUser {
  name: string,
  age?: number,
  getMessage() : string
}

const user: IUser = {
  name: "Moster",
  age: 30,
  getMessage() {
    return "Hello " + name
  }
}

const user2: IUser = {
  name: "Jack",
  getMessage() {
    return "Hello " + name
  }
}