fetch('/motd')
.then(res => res.json())
.then(result => {
    document.getElementById("motd").innerText = result;
});