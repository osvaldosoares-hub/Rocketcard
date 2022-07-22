const url = 'https://api.github.com/users/osvaldosoares-hub'

const following = document.getElementById('following')
const followers = document.getElementById('followers')
const repo = document.getElementById('repo')
const comp= document.getElementById('comp')
const local = document.getElementById('local')
const name = document.querySelector('.name')
const user = document.querySelector('.user-img')
fetch(url)
.then(response => response.json())
.then(data => {

    user.src = data.avatar_url
    name.textContent = data.name
    following.textContent = data.following+` seguidores`
    followers.textContent = data.followers +` seguindo`
    repo.textContent= data.public_repos+` repositorio`
    comp.textContent=JSON.stringify(data.company)
    local.textContent=data.location
})
.catch(error=>console.error(error))

const back  = document.querySelector('.div-background')
const button = document.getElementById('costumizar');
let colors = ['blue','yello','black','brown','orange','green']
button.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random()*colors.length)]

    back.style.background = randomColor;
})