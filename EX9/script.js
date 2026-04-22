var imglist_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';

function getimg() {

    fetch(imglist_Url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            add_new_img(data.photos.photo);
        })
        .catch(error => {
            console.error('Error fetching from Flickr:', error);
        });
}

function add_new_img(dataset) {
    var gal = document.getElementById("gallery");
    gal.innerHTML = ""; // Clear existing images
    
    dataset.forEach(function(item) {
        console.log(item);
        var img = document.createElement("img");
        

        var photoUrl = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`;
        
        img.setAttribute("src", photoUrl);
        gal.appendChild(img);
    });
}
