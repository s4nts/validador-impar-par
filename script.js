function check() {
    const n1 = +document.getElementById('n1').value;

    const result = document.getElementById('result');

    if (n1 % 2 == 0) {
        result.innerHTML = n1 + ' é par';
    } else {
        result.innerHTML = n1 + ' é ímpar';
    }

    console.log(n1 % 2);
}   
