interface IUser {
  firstName: string;
  lastName: string;
  getFullName(): string;
  unchangeableName: string
}

class User implements IUser {
  firstName: string
  lastName: string
  readonly unchangeableName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.unchangeableName = firstName;
  }

  changeUnchangableName(): void {
    /* this.unchangalbeName = "foo"; */
  }
  
  getFullName(): string {
    return this.firstName + ' ' + this.lastName
  }
}

const userClass = new User("Monster", "lessons");

console.log(userClass.getFullName());