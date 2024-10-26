const  loaderEi = document.querySelector('.loader');

const loaderToggle = (info) => {
    if(info){
        loaderEi.classList.remove('hidden')     
    } else {
        loaderEi.classList.add('hidden') 
    }
};

export default loaderToggle;