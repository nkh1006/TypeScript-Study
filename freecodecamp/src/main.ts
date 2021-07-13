/*
    let hello: string = "world";
    hello = true;
*/

/*
    const getFullName = (name: string, surname: string): string => {
        return name + " " + surname;
    };
*/

interface User {
    name: string;
    age: number;
    getMessage(): string;
}

const user: User = {
    name: "Monster",
    age: 30,
    getMessage() {
        return "Hello" + name;
    }
};

const user2: User = {
    name: "Jack",
    age: 12
};
