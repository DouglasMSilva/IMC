

function IMC() {
    // let under = document.getElementById('underWeight');
    // let normal = document.getElementById('normalWeight');
    // let over = document.getElementById('overWeight');
    // let ob1 = document.getElementById('obesity1');
    // let ob2 = document.getElementById('obesity2');
    let massa = parseFloat(document.getElementById('massa').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let imc = parseFloat((massa/altura**2));
    let span = document.getElementById('msg');
    span.innerHTML = `Seu IMC é de ${imc}`;
    span.style.display = "block";

    if(imc < 18.5) {
        // under.style.color = 'red';
        setColor(0);
    }

    else if(imc >= 18.5 && imc < 24.9) {
        //normal.style.color = 'red';
        setColor(1);
    }

    else if(imc >= 25 && imc < 29.9) {
        //over.style.color = 'red';
        setColor(2);
    }

    else if(imc >= 30 && imc < 34.9) {
        //ob1.style.color = 'red';
        setColor(3);
    }

    else if(imc >= 35 && imc < 40) {
        //ob2.style.color = 'red';
        setColor(4);
    }
    
}

//Evento que permite a entrada de apenas dados numéricos em um input sem a presença de setas
document.querySelector(".numero").addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9.,]/g, '');
});


function mostraIMC() {



}

let campos = document.querySelectorAll(".classify");


function setColor(index) {
    campos[index].style.color = 'red';
}