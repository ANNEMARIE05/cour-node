window.addEventListener("DOMContentLoaded", async()=>{
    const inpt = document.querySelector(".userInput")
    const resultUser = document.querySelector(".mesUsers")
    let btn = document.querySelector("button")

    btn.addEventListener("click", async () =>{

        const response = await fetch(
            `https://jsonplaceholder.org/users/${inpt.value}`
        )
        const user = await response.json().catch((er)=>{

        })

        console.log(user);
        resultUser.innerHTML=`
        <div class="user">
        <p>${user.id}</p>
        <p>${user.firstname}</p>
        <p>${user.lastname}</p>
        <p>${user.email}</p>
        <p>${user.birthDate}</p>
        <p>${user.address.suite}</p>
        <p>${user.phone}</p>
        </div>
        `
    })
    
})