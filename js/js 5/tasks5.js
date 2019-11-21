function summ (max) {
    function rand (max) {
        return Math.round(Math.random() * (max));   
    }
    var mas = [],
        sum = 0;
    for (var i = 0; i < max; i++) {
        mas[i] = rand(max);
        ((i % 2) == 0) ? sum += mas[i] : '';
    }
    console.log('Массив чисел: ' + mas);
    console.log('Cумма четных чисел: ' + sum);
}
summ(10);