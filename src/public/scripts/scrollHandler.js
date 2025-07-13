// var motd = document.getElementById('motd');
var header = document.getElementById('header');
var title = document.getElementById('title');
document.addEventListener('scroll', e => {
    var scrollingElement = e.target.scrollingElement
    if (scrollingElement.scrollTop == 0) {
        // motd.classList.remove('hidden');
        header.classList.remove('small');
        title.classList.remove('small-title');
    } else {
        // motd.classList.add('hidden');
        header.classList.add("small");
        title.classList.add("small-title");
    }
});