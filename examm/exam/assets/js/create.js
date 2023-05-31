const h5 =document.querySelector("#h5")
const p =document.querySelector("#p")
const icon =document.querySelector("#icon")
const createBtn=document.querySelector(".createBtn")
createBtn.addEventListener("click",function(){
    fetch("http://localhost:3000/card", {
        method: "POST",
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
})
