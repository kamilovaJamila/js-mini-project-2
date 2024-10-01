let words = document.querySelector('#word');
let output = document.querySelector('#output');
let  btn = document.querySelector('#btn');

// addEventListener click function

btn.addEventListener('click', function(){
    let str = words.value 
    output.textContent = str.length
})
