const data = document.querySelector(".form-floating>.form-control")
const btn = document.querySelector(".btn-outline-primary")
const url = 'https://api.chucknorris.io/jokes/random'

async function handleclick(){
    let a = await fetch(url)
    
    let b = await a.json()
    
    data.innerText = b.value 
}


btn.addEventListener("click",handleclick)