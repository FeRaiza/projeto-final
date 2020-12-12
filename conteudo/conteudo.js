const id = document.getElementById("container")
const btn = document.getElementById("btn")
//console.log(id)
//console.log(btn)

btn.addEventListener("click", function(e){
    e.preventDefault();
    if(id.style.display === "none"){
        id.style.display = "block"
    } else{
        id.style.display = "none";
    }
})