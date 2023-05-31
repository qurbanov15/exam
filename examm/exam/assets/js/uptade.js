const h5 =document.querySelector("#h5")
const p =document.querySelector("#p")
const icon =document.querySelector("#icon")
const uptadeBtn=document.querySelector(".uptadeBtn")
fetch(`http://localhost:3000/card/` + window.location.hash.slice(2), {
   method: "PUT",
   headers: {
     "Content-type": "application/json; charset=UTF-8"
   },
   body: JSON.stringify({
    icon:icon.value,
    h5:h5.value,
    p:p.value,
   })
 })
   .then((response) => response.json())
   .then((data) => console.log(data))
   .catch((error) => console.error(error));
fetch("http://localhost:3000/card/"+window.location.hash.slice(2))
.then(res=> res.json())
.then(data=>{
h5.value=data[0].h5
p.value=data[0].p
icon.value=data[0].icon
}
    )
  