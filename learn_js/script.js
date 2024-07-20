const submitbutton = document.querySelector('button');
const ul = document.querySelector('ul');

submitbutton.addEventListener('click',(e)=>
{
    e.preventDefault();
    const name= document.querySelector('#name1').value;
    const emailid = document.querySelector('#email').value;
    ul.appendChild(document.createElement("li"));
    ul.lastElementChild.textContent = `${name} ${emailid}`;
})

