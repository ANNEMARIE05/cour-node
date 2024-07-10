
// fetch("https://jsonplaceholder.org/posts", {
//     method:"GET",
//     headers:{
//         "Content-Type":"application/json"
//     }
// }).then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log("data :", data);
// })


const getDatas = async ()=>{
    const response = await fetch("https://jsonplaceholder.org/posts", {
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    const data = await response.json()
    return data
}
window.addEventListener("DOMContentLoaded", async(event)=>{
    const data = await getDatas()
    const posts = document.querySelector(".posts") 

    if(posts === null){
       return alert ("la div n'a pas pu etre selectionner")
    } 

    data.forEach((post)=>{
        posts.innerHTML+=`
        <div class="post">
            <p>${post.title}</p>
            <img src=${post.thumbnail} alt="" width="150px" height="150px">
            <p>${post.publishedAt}</p>
            <button onclick=()=>window.location.href="detail.html>Voir plus</button>
        </div>
        `
    })

})

