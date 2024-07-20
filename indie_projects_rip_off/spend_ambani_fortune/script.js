const sellbutton = document.getElementById("sell")
const buybutton = document.getElementById("buy")
const amountid = document.getElementById("amount")

sellbutton.addEventListener('click',button => {
    amountid.innerText=amountid.innerText-1;
})
buybutton.addEventListener('click',button => {
    amountid.innerText=parseFloat(amountid.innerText)+1;
})