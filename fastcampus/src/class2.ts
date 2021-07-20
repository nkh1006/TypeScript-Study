interface Person {
    name: string;
    say(message: string): void;
}

class Korean implements Person {
    constructor(public name: string) {

    }

    say(message: string): void {
        console.log(`say ${message}`);
    }
}