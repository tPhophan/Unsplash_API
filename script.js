const countImg = 10;
const apiKey = 'xkP3lai2nFVZo71yORcirVu1VxTtya_D4Dt0YwPiqLA';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${countImg}`;

const imgContainerEl = document.querySelector('#img-container');
let imgArr = [];

async function ft_getImage(){
    try{
        const res = await fetch(apiUrl);
        imgArr = await res.json();
        ft_displayImage();
    }
    catch(err){
        console.log(err);
    }
}

function ft_displayImage(){
    imgArr.forEach((photo) => {
        const item = document.createElement('a')
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');

        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('title', photo.alt_description);
        img.setAttribute('alt', photo.alt_description);

        item.appendChild(img);
        imgContainerEl.appendChild(item);
    });
}

window.addEventListener('scroll',()=>{
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100){
        ft_getImage();
    }
});

ft_getImage();