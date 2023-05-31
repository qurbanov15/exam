const menuBtnn=document.querySelector("#barmenu")
const respMenu=document.querySelector(".menuresp")
menuBtnn.addEventListener("click",function () {
    respMenu.classList.toggle("menuClick")
})
const bizproCards=document.querySelector(".bizproCards")
const card=document.createElement("div")
card.className="card"
function createCard(dataApi){
    const cardTop=document.createElement("div")
    cardTop.className="cardTop"
    const icon =document.createElement("i")
    icon.className=dataApi.icon
    cardTop.appendChild(icon)
    const h5 =document.createElement("h5")
    h5.innerText=dataApi.h5
    const p=document.createElement("p")
    p.innerText=dataApi.p
    delete_btn=document.createElement("button")
    const uptade_link=document.createElement("a")
    uptade_link.innerText="uptade link"
    uptade_link.href=`./uptade.html#${+dataApi.id}`


    delete_btn.innerText="X"
    card.append(cardTop,h5,p,delete_btn,uptade)
bizproCards.append(card)
 

delete_btn.addEventListener("click",function () {
    fetch('http://localhost:3000/card/' + dataApi.id, {
method: 'DELETE',
})
.then(res => res.json()) 
.then(data =>console.log(data))
    
})
}
fetch("http://localhost:3000/card")
.then(res=> res.json())
.then(data=>{
    data.forEach(elem => {
        createCard(elem)
        
       
    });
    
    console.log(data);
})
