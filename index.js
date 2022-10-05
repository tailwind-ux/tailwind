// setTimeout(() => {
//     location.href = location.href
// }, 5000);

const landingImage = document.querySelector('.landingImage');
const bodyParent = document.querySelector('.bodyParent');
const homeLogo = document.querySelector('.homeLogo');
const searchBar = document.querySelector('.searchBar');
let colorStatus = false;

function changeColor(){
    if(window.scrollY > landingImage.clientHeight - 50 ){
        colorStatus = true;
    } else {
        colorStatus = false;
    }
    if(colorStatus){
        homeLogo.classList.remove('stroke-white')
        homeLogo.classList.add('stroke-black')

        searchBar.children[0].classList.remove('stroke-white')
        searchBar.children[0].classList.add('stroke-black')
        searchBar.children[1].classList.remove('text-white')
        searchBar.children[1].classList.add('text-black')
        searchBar.children[1].classList.remove('placeholder:text-white/75')
        searchBar.children[1].classList.add('placeholder:text-black/75')

        searchBar.classList.remove('border-white')
        searchBar.classList.add('border-black')
    } else {
        homeLogo.classList.add('stroke-white')
        homeLogo.classList.remove('stroke-black')

        searchBar.children[0].classList.add('stroke-white')
        searchBar.children[0].classList.remove('stroke-black')
        searchBar.children[1].classList.add('text-white')
        searchBar.children[1].classList.remove('text-black')
        searchBar.children[1].classList.add('placeholder:text-white/75')
        searchBar.children[1].classList.remove('placeholder:text-black/75')


        searchBar.classList.add('border-white')
        searchBar.classList.remove('border-black')
    }
}
window.addEventListener('scroll', changeColor)

// Search Component
const searchComponent = document.querySelector('.searchComponent');
const searchInput = document.querySelector('.searchInput');

const arrayComponentsElements = [
    document.querySelector('.notificationComponent')
]
const searchList = [
    'Notification Component'
]

// searchInput.addEventListener('click', (e)=> {
//     searchComponent.classList.remove('hidden');
// })
// bodyParent.addEventListener('click', (e)=> {
//     searchComponent.classList.add('hidden');
// })

for (const each of searchList) {
    searchComponent.innerHTML += `<a class="hover:text-white hover:bg-slate-800">${each}</a>`;
}


searchInput.addEventListener('keyup', (e)=> {
    console.log(e.target.value);
})

// let searchShowlist = 
function moveToComponent(item){
    window.scrollTo(0, arrayComponentsElements[item].offsetHeight -70)
}
for (let i = 0; i < searchComponent.children.length; i++) {
    console.log(searchComponent.children[i])
    searchComponent.children[i].addEventListener('click', ()=>{
        console.log(789)
        moveToComponent(i)
    })
}