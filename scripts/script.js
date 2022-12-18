window.onscroll = ()=>{
    const heading = document.querySelector('header');
    if (window.scrollY > 0){
        heading.style.boxShadow = '0 0 10px';
    } else {
        heading.style.boxShadow = 'none';
    }
}