const API = 'https://api.giphy.com/v1/gifs/random?api_key=NMHP54Bl3lMlh3FWqzkiSC5MALLyjcoN&tag=&rating=g';
const gs = document.querySelector('#gifSection');
const input = document.querySelector('#search');

const h1Array = [];

input.addEventListener('keyup', () => {
    h1Array.map(p => {
        if(p.includes(input.value)){
            document.getElementById(p).classList.add('visible')
            document.getElementById(p).classList.add('innerSec')

        } else if (!p.includes(input.value)){
            document.getElementById(p).setAttribute('class','invisible')
        }
    })

})


async function gifReq () {
    for (let i = 0; i < 30; i++) {
        const res = await fetch(API);
        const data = await res.json();
        const newData = [data];
        
            newData.map(p => {
            const sec = document.createElement('section')
            sec.setAttribute('class','innerSec')
            sec.setAttribute('id', `${p.data.slug.slice(0,10).toLowerCase()} ${i}`)

            const h1 = document.createElement('h1')
            h1.setAttribute('class','nameTitle')
            h1.innerText = `${p.data.slug.slice(0,10).toLowerCase()} ${i}`;

            const gif = document.createElement('iframe');
            gif.setAttribute('class','gifFrames')
            gif.setAttribute('src',p.data.embed_url)

            h1Array.push(h1.textContent)

            sec.appendChild(h1);
            sec.appendChild(gif)
            gs.appendChild(sec);
        })
    }
}
gifReq();



//Testing:

// const test = {c: {a:1}, d:2, e:3} INACCESIBLE (objeto)
/*
const test = [{c: {a:1}, d:2, e:3}]

test.map(p => {
    console.log(p.c.a)
})


const arr = [1,2,3,6,6,6,5,6]

const r = arr.filter(p => p !== 6)
console.log(r)

*/


//Search Bar: ... ?

 /*if(e.target.matches('#search')){
        document.querySelectorAll('.iframe').map(p => {
            p.textContent.includes(e.target.value) ? p.classList.remove('invisible') : p.classList.add('invisible')
        })
    }*/


/* Object info:
            const inf = {
                id: i,
                slug:p.data.slug, 
                username:p.data.username,
                url: p.data.embed_url
            }
            console.log(inf);
<<<<<<< HEAD


function f (a){
    const b = a.toLowerCase()
    console.log(b)
}

f('FFFFFFFF')

=======
>>>>>>> 3d9c552dc1890f3f8397425591103e5deb3cae7f
*/