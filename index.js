//document.getElementById("coun-el").innerText = 5;

// intialize the count as 0
// listen for clicks on the increment 
// increment the count variable when the button is clicked 
// change the count in the HTML to refleck the view count 
let saveEl = document.getElementById("save-el")
 let countEl = document.getElementById("count-el")// pass an argument
 console.log(saveEl)
// console.log(countEl)
let count = 0

function increment() {
    count  += 1 
    countEl.innerText = count
    
  
}

function save(){
    console.log(count)
}



function save(){
    let countStr = count + " - "
    
    saveEl.textContent += countStr 
    countEl.textContent = 0
    count = 0 
}