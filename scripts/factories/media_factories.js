function mediaFactory(data) {
    const { id, photographerid, title, image, likes, date, price, video  } = data;
    console.log(data)


    

    const picture = `assets/catalogue/${photographerid}/${image}`;
    const movie = `assets/catalogue/${photographerid}/${image}`;
    function getMediaCardDOM() {
        const article = document.createElement('article');
        const photo = document.createElement('div');
         if (image ==undefined)
         {
            const vide = document.createElement('video');
            photo.appendChild(vide);
            
         }
         else {
            const img = document.createElement('img');
            photo.appendChild(img)

         }

         article.appendChild(photo);
         return article;

    }

    if(image == undefined){
        return { id, photographerid, title, movie, likes,date, price, video, getMediaCardDOM }
    } else{
        return { id, photographerid, title, picture, likes,date, price, video, getMediaCardDOM }
    }
}


