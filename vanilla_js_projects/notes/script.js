const createButton = document.querySelector('#create-button');
const notesContainer = document.querySelector('.notes-container');
let notes = document.querySelectorAll(".input");

function getStorage(){
    notesContainer.innerHTML = localStorage.getItem("notes");
    // console.log(notesContainer.innerHTML);
}

function setStorage(){
    
    localStorage.setItem("notes",notesContainer.innerHTML);
    // console.log(notesContainer.innerHTML);
}
getStorage();
// localStorage.clear();
createButton.addEventListener('click',()=>{
    let p = document.createElement('p');
    let img = document.createElement('img');
    let br = document.createElement('br');

    p.setAttribute("contenteditable","true");
    p.classList.add("input");
    img.src="./img/delete.png";
    img.classList.add("delete-icon");

    p.appendChild(img);
    p.appendChild(br);
    notesContainer.appendChild(p);

});

notesContainer.addEventListener('click',(e)=>{
    if(e.target.className==="delete-icon")
    {   
        e.target.parentElement.remove();
        setStorage();
    }
    else if(e.target.className=="input")
    {
        notes = document.querySelectorAll(".input");
        notes.forEach(note=>{
            note.onkeyup=function(){
                setStorage();
            }
        })
    }
});
document.addEventListener('keydown',(e)=>{
    if(e.key=="Enter")
    {

        document.execCommand("insertLineBreak");
        e.preventDefault();
        console.log(notesContainer)

    }
})
