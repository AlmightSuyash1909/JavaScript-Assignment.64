let input = document.querySelector(`input[type = "text"]`)
let root = document.querySelector(`.movies-list`)

let allMovies = [
    {
        name:"Dune Part - 1",
        watched:false,
    },
    {
        name:"Dune Part - 2",
        watched:false,
    },

]

input.addEventListener("keyup", (event) => {
    if(event.keyCode === 13){

        allMovies.push(
            {
                name:event.target.value,
                watched:false,
            }
        )
 
        event.target.value = ""
        createMovieUi ()
    }
})

function deleteMovie(event){
    // event.target.parentElement.remove()
    let id = event.target.dataset.id;
    allMovies.splice(id,1)

    createMovieUi()
}

function handleChange(event){
    // console.log(event.target.id)
    let id = event.target.id

    allMovies[id].watched = !allMovies[id].watched
}

function createMovieUi (){

    root.innerHTML = ""
    
    allMovies.forEach((movie,i) => {
        let li = document.createElement("li")
    
        let input = document.createElement("input")
        input.classList.add("styled-checkbox")
        input.type = "checkbox"
        input.id = i
        // input.checked = movie.watched
        input.addEventListener("change",handleChange)
    
        let label = document.createElement("label")
        label.for  = i
        label.innerText = movie.name
        
        let span = document.createElement("span")
        span.innerText = "❌"
        span.setAttribute('data-id',i)
        span.addEventListener("click" ,deleteMovie)
    
        li.append(input,label,span)

        root.append(li)
    }) 
}

createMovieUi()