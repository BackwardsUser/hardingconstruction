var imageContainer = document.getElementById("img-container");

fetch('/pictures')
.then(result => result.json())
.then(res => {
    res.forEach(image => {
        var img = document.createElement("img")
        img.src = image;

        img.addEventListener("click", () => {
            if (img.id == "displaying") {
                img.id = "";
                return;
            }
            if (document.getElementById("displaying")) document.getElementById("displaying").id = "";
            img.id = "displaying";
        })

        imageContainer.appendChild(img);
    });

    if (imageContainer.children.length == 0) {
        imageContainer.innerText = "Images failed to load...";
    }

});