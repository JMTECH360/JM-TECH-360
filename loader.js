window.onscroll = function(){
    if(window.pageYOffset >=900){
        document.getElementById("btTop").style.display = "block";
    }else{
        document.getElementById("btTop").style.display = "none";
    }
}

document.getElementById("btTop").onclick = function(){
    window.scrollTo(0, 0);
};