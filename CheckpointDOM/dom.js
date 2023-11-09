let btnplus = document.querySelector('.btnplus');
let btnmoins = document.querySelector('.btnmoins');

btnplus.addEventListener('click', increaseQuantity);
btnmoins.addEventListener('click', decreaseQuantity);


function increaseQuantity(){
    document.querySelector('.qty').value = parseInt(document.querySelector('.qty').value)+1;
    soustotal();
}



function decreaseQuantity(){
    if(document.querySelector('.qty').value >0)
    {
        document.querySelector('.qty').value = parseInt(document.querySelector('.qty').value)-1;
        soustotal();
    }
    
}

function soustotal(){
    let prix = parseInt(document.querySelector('.prix-produit').innerHTML);
    let qty = parseInt(document.querySelector('.qty').value);
    let soust = prix * qty;

    document.querySelector('.prix-total').innerHTML = soust;


}

function supprimerpanier() {
    const element = document.getElementById("prod");
element.remove(); 
  }

//fonction aimer les articles
function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}