const accessKey='v3xopknMl0EQ7k1kfGtWqk8v32rsSUzk2KjGAF6ZArs';
const searchForm = document.querySelector('form');
const searchInput= document.getElementById("search-input");
const imageContainer = document.getElementById("images-container");

//adding event
searchForm.addEventListener('submit',function(e){
    e.preventDefault();
    const inputText = searchInput.value.trim();
    if(inputText!==''){
        Fetchimages(inputText);
    }else{
        imageContainer.innerHTML=`<h2> Please enter an querry </h2>`;
    }
})

//funtion to fetch images of the api
async function Fetchimages(query){
    imageContainer.innerHTML = '';
    const url = `https://api.unsplash.com/photos?=${query}&per_page=50&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    for(let i=0;i<data.length;i++){
        const images = document.createElement('div');
        images.classList.add('imagediv')
        images.innerHTML=`<img class="images" src="${data[i].urls.regular}">`;
        imageContainer.appendChild(images);
        //console.log(data[i]);

        const overlayElement = document.createElement("div");
        overlayElement.classList.add('overlay');
        images.appendChild(overlayElement);
        overlayElement.innerHTML = `<p>${data[i].alt_description
        }</p>`;
    }
    
    /*  data.array[0].forEach(image =>{
        const images = document.createElement('div');
        images.innerHTML = `<img scr="${image.urls.regular}">`;

        imageContainer.appendChild(images);
    }) */ 

    
}