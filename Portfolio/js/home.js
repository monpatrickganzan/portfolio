setTimeout( ()=>{
    document.querySelector('.main-page').style.display = 'block';
    document.querySelector('.body-loader').style.display = 'none';
    document.getElementById("body-loader").classList.add("fadeOutAnimation");
}, 5000)