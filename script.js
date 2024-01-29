const notecontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn2");
let notes = document.querySelectorAll(".input-box")

function showNotes(){
    notecontainer.innerHTML = localStorage.getItem("notes");
}
showNotes();


function UPDATESTROAGE() {
    localStorage.setItem("notes" ,notecontainer.innerHTML)

    
}

createbtn.addEventListener("click" ,()=>{
    let   inputbox =document.createElement("p");
    let img = document.createElement("img");
    inputbox.className ="input-box";
    inputbox.setAttribute("contenteditable" ,"true");
    img.src="images/delete.png";
    notecontainer.appendChild(inputbox).appendChild(img);
})

notecontainer.addEventListener("click",(e)=>{
    if(e.target.tagName ==='IMG'){
        e.target.parentElement.remove();
        UPDATESTROAGE();

    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                UPDATESTROAGE();
            }
        })

    }

})

document.addEventListener("keydown" ,event =>{
    if(event.key ==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

