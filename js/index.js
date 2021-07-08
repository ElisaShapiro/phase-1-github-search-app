document.addEventListener('DOMContentLoaded', (e) => {
    document.querySelector("#github-form").addEventListener("submit", (e) => {
        e.preventDefault()
        fetchUsers(e.target.search.value) //(document.querySelector("#github-form #search").value)
    })
    //fetchRepos()
    // renderProfileCards()


function fetchUsers(value){    
    fetch(`https://api.github.com/search/users?q=${value}`, {
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        }}) 
    .then(response => response.json())
    .then(json => json.items.forEach((user) => {
        renderProfileCards(user)
    }))    
}
function fetchRepos(value){
    fetch(`https://api.github.com/users/${value}/repos`, {
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        }})
    .then(response => response.json())
    .then(json => json.forEach((user) => {
        renderRepos(user)
    }))
}

function renderProfileCards(user){
    let divContainer = document.createElement("div");
    let h2Name = document.createElement("h2");
    let imageHere = document.createElement("img")
    let aRepo = document.createElement("a")   

    h2Name.textContent = user.login;
    divContainer.className = 'usercard';
    imageHere.src = user.avatar_url;
    aRepo.textContent = `Visit ${user.login}'s Github`
    aRepo.onClick = fetchRepos(user.login);
  
    divContainer.append(h2Name, imageHere, aRepo)
    document.querySelector('#github-container').append(divContainer)
}
function renderRepos(user){
    debugger
}
})