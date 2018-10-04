setInterval(() => {
    if (document.getElementById('title').innerHTML == "Retro Design") {
        document.getElementById('title').innerHTML = "Retro Design_"
    } else {
        document.getElementById('title').innerHTML = "Retro Design"
    }
}, 1000);