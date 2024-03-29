const item = document.querySelector('#item')
const toDoBox = document.querySelector('#to-do-box')

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            addToDo(this.value);
            this.value = " ";
        }
    }
)

const addToDo = (item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    ${item} 
    <i class="fa-sharp fa-solid fa-circle-xmark"></i></li>
    `
   listItem.addEventListener(
    'click',
    function(){
        this.classList.toggle('done')
    }
   )
   listItem.querySelector("i").addEventListener(
    'click',
    function(){
        listItem.remove()
    }
   )

    toDoBox.appendChild(listItem)
}

// Show Date //

let time = document.getElementById("time");

setInterval(() =>{
    let d = new Date();
    time.innerHTML = d.toLocaleString();
},1000)

