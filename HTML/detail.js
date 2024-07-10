const userData = async()=>{
    const mesUser = await fetch("https://jsonplaceholder.org/users", {
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    const result = await mesUser.json()
    return result
} 
console.log(userData());
window.addEventListener("DOMContentLoaded", async()=>{
    const users = await userData()
    const resultUser = document.querySelector(".mesUsers")
    if(resultUser===null){
        return alert("Désolé , cet utiliseur n'existe pas")
    }
    users.forEach(element => {
        return resultUser.innerHTML+=`
        <div class="user">
        <p>${element.id}</p>
        <p>${element.firstname}</p>
        <p>${element.lastname}</p>
        <p>${element.email}</p>
        <p>${element.birthDate}</p>
        <p>${element.address.suite}</p>
        <p>${element.phone}</p>
        </div>`
        
    });
})

// la fonction pour recuperer les id

let btn = document.querySelector("button")
btn.addEventListener("click", async () =>{
    const inpt = document.querySelector(".userInput")

    let id = parseInt(inpt.value);

    if (id>0 && id<=30) {
        let erreur = document.querySelector(".erreur")
        erreur.style.display= "none"

        const listUser = await userData();
        let element = listUser.filter((item)=> item.id == id)
        console.log(element)

        const resultUser = document.querySelector(".mesUsers")
        if(resultUser===null){
            return alert("Désolé , nous n'avons pas pu recuperer la div")
        }
        element.forEach(element => {
            return resultUser.innerHTML=`
            <div class="user">
            <p>${element.id}</p>
            <p>${element.firstname}</p>
            <p>${element.lastname}</p>
            <p>${element.email}</p>
            <p>${element.birthDate}</p>
            <p>${element.address.suite}</p>
            <p>${element.phone}</p>
            </div>`     
        });
    }else{
        let erreur = document.querySelector(".erreur")
        erreur.style.display= "block"
        erreur.style.color= "red"
        erreur.innerHTML="Cet identifiant n'as pas encore été enregistrer"
    }

})
