document.addEventListener('DOMContentLoaded', (e) => {
    document.querySelector("#github-form").addEventListener,("submit", (e) => {
        e.preventDefault()
        console.log(e.target.search.value) //(document.querySelector("#github-form #search").value)
    })
    fetchUsers()
    fetchRepos()
    renderProfileCards()
})

function fetchUsers(value){    
    fetch(`https://api.github.com/search/users?q=${value}`, {
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        }}) 
    .then(response => response.json())
    .then(json => json.items.forEach(renderProfileCards))
    
}
function fetchRepos(value){
    fetch(`https://api.github.com/users/${value}/repos`, {
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        }})
    .then(response => response.json())
    .then(json => console.log(json))
}

function renderProfileCards(octocat){
    let divContainer = document.createElement("div");
    let h2Name = document.createElement("h2");
    let divImage = document.createElement("div");
    let aRepo = document.createElement("a")   

    h2Name.textContent = items.login;
    divContainer.className = 'usercard';
    divImage.src = items.avatar_url;
    aRepo.textContent = `Visit ${items.login}'s Github`
  
    document.querySelector('#github-container').append(divContainer)
}
 