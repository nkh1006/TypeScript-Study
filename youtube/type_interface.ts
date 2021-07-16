interface Person {
    name: string;
    hungry: boolean;
};

const me: Person = {
    name: 'Harry',
    hungry: false,
}

interface Harry extends Person {
    youtuber: boolean;
}

class Harry implements Person {
    name: string;
    hungry: boolean;
}

interface Greetring {
    (name: string): string;
}

const myGreeting: Greetring = (name: boolean) => 'Hello !';