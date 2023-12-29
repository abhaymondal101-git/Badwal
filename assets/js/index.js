const mainHeader = document.querySelector(".main-menu-header");
const mainBanner = document.querySelector(".main-banner");
const navMobileLower = document.querySelector("nav-mobile-lower");
document.addEventListener("scroll",(e)=>{
    let valScroll1 = document.documentElement.scrollTop;
    if(valScroll1>10){
        mainHeader.style.backgroundColor="#ffffff";
        navMobileLower.style.top="0%";
        mainHeader.style.zIndex="999";
    }
    else{
        mainHeader.style.backgroundColor="#ffffff";
        mainHeader.style.top=0+"px";
        navMobileLower.style.top="0%";
    }
})

const hamImg = document.querySelector(".ham-img");
const bar1 = document.querySelectorAll(".bar:nth-child(1)")[0];
console.log(bar1);
const bar2 = document.querySelectorAll(".bar:nth-child(2)")[0];
const bar3 = document.querySelectorAll(".bar:nth-child(3)")[0];
const navUlitem = document.querySelector(".nav-mobile-lower");
hamImg.addEventListener("click",()=>{
  navUlitem.classList.toggle("translateCss");
});
let val =0;
hamImg.addEventListener("click",()=>{
    if(val==0){
    bar1.style.transform="rotate(45deg) translateY(10px)";
    bar2.style.display="none";
    bar3.style.transform="rotate(-45deg) translateY(-10px)";
    val++;
    }
    else{
        bar1.style.transform="rotate(0deg)";
        bar2.style.display="block";
        bar3.style.transform="rotate(0deg)";
        val--;
    }
});

