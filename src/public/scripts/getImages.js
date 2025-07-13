var imageContainer = document.getElementById("img-container");

fetch('/pictures')
.then(result => result.json())
.then(res => {
    res.forEach(image => {
        var img = document.createElement("img")
        img.src = image;

        img.addEventListener("click", () => {
            var main = document.getElementById('main');
            var wasLast = {top:0, left:0};
            if (img.id == "displaying") {
                img.id = "";
                main.scrollBy({
                    behavior: 'smooth',
                    left: wasLast.left,
                    top: wasLast.top
                })
                wasLast.top = 0;
                wasLast.left = 0;
                return;
            }
            wasLast.top = main.scrollTop;
            wasLast.left = main.scrollWidth;
            if (document.getElementById("displaying")) document.getElementById("displaying").id = "";
            img.id = "displaying";
            img.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });
        })

        imageContainer.appendChild(img);
    });

    if (imageContainer.children.length == 0) {
        imageContainer.innerText = "Images failed to load...";
    }

});