const elForm = document.querySelector("#form")
const elInput = document.querySelector(".email__input")
const elPasswordInput = document.querySelector(".password__input")
elForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const elEmailValue = elInput.value
    const elPasswordValue = elPasswordInput.value

    fetch('https:reqres.in/api/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: elEmailValue,
            password: elPasswordValue
        })

    }).then(res => res.json()).then(data => {
        if(data){
            window.localStorage.setItem('__auth_token__', JSON.stringify(data))
            
            window.location.replace('index.html');
        }
    })
    })











// const adventurer = {
//     name:"Alic",
//     cat:{
//         name:"Dinah"
//     }
// }

// const dogName  = adventurer.cat?.name
// console.log(dogName)

// const adventurer ={
//     name:"Alice"
// };
// let name = adventurer.name


// console.log(name)


// let num = [1,2,3,4,5,6]
// let [,,,x,...arr] = num