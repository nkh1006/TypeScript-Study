var StarbuksGrade;
(function (StarbuksGrade) {
    StarbuksGrade[StarbuksGrade["WELCOME"] = 0] = "WELCOME";
    StarbuksGrade[StarbuksGrade["GREEN"] = 1] = "GREEN";
    StarbuksGrade[StarbuksGrade["GOLD"] = 2] = "GOLD";
})(StarbuksGrade || (StarbuksGrade = {}));
function getDiscount(v) {
    switch (v) {
        case StarbuksGrade.WELCOME:
            return 0;
        case StarbuksGrade.GREEN:
            return 5;
        case StarbuksGrade.GREEN:
            return 10;
    }
}
console.log(getDiscount(StarbuksGrade.GREEN));
console.log(StarbuksGrade.GREEN);
console.log(StarbuksGrade);
