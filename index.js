function naza(){
    const API_KEY = "WYhA3RoJ4a2fZWJGMkLzUJbObvKDLyzHTpjfpZNQ"
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key="+API_KEY)
        .then(response=>{
            $(".loader").fadeOut(1000);
            $('.gallery').fadeIn(1000);
            // console.log(response);
            return  response.json();
        })
        .then(res=>{
            displayNaza(res)
        })

}
naza();

function displayNaza(res){
    // console.log(res.photos);
    const images = [];
    for(i=0;i<200;i+=10){
        const data = res.photos[i];
        images.push(data)
    }
    // console.log(images);
    const imageCard = images.map(data=>{
                        return `<div class="card" style="width:400px" > 
                            <img src=${data.img_src} class="card-img-top" style="height:300px">
                            <div class="card-margin">
                                <h5 class="card-title">${data.rover.name} - ${data.camera.full_name}</h5> 
                                <p class="card-text">${data.earth_date}</p>
                                <button class="btn-like">Like</button>
                                <i class="fa fa-heart heart" aria-hidden="true"></i>
                            </div>
                        </div>`
                    })
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML=imageCard; 
    const button = document.querySelectorAll('.btn-like');
    for (i=0;i<20;i++){
        button[i].addEventListener('click',function(){
            for(z=0;z<20;z++){
                const heart = document.querySelectorAll('.heart');
                heart[z].style.color = 'red';
            }
        })
    }
}
