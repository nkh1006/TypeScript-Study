function outer() {
    if(true) {
        let score = 0;
    }

    for(var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 100);
    }
}