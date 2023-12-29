const innerBanner = document.querySelector(".inner-banner-img");
document.addEventListener("scroll",(e)=>{
    let valScroll1 = document.documentElement.scrollTop;
    if(valScroll1>10){
    }
    else{
        innerBanner.style.marginTop=3.4+"rem";
    }
});