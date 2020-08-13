// Practica 1.1 //checkbox

function fun1() {
var men;
men = document.getElementById("one");
    if (men.checked) {
    alert('choosen');
}   else {
        alert('not');
    }
}


// Practica 1.2 //radiobutton

function fun1() {
    let radi=document.getElementsByName("r1");
    for (let i = 0; i < radi.length; i++) {
        if (radi[i].checked) {
            alert('choosen' + i + 'element');
        } 
    }
}

// Practica 2.1 //Select

function fun1() {
    var select = document.getElementById('mySelect').selectedIndex;
    var options = document.getElementById('mySelect').options;
    alert('the choosen' + options[select].text);
}


// Practica 2.2 // Input type range

function fun1() {
    var rng = document.getElementById("r1");
    var p = document.getElementById('one');
    p.innerHTML= rng.value;
}

function fun2() {
    var rng = document.getElementById("r2");
    var i1 = document.getElementById('i1');
    i1.value= rng.value;
}

function fun3() {
    var rng = document.getElementById("r3");
    var div = document.getElementById('test');
    div.style.height = rng.value +'px';
}



// Practise #3


function fun1() {
    var rtl = document.getElementById('rtl');
    var rtr = document.getElementById('rtr');
    var rbr = document.getElementById('rbr');
    var rbl = document.getElementById('rbl');
    var ttl = document.getElementById('ttl');
    var ttr = document.getElementById('ttr');
    var tbr = document.getElementById('tbr');
    var tbl = document.getElementById('tbl');

    var block = document.getElementById('block');

    ttl.value=rtl;
    ttr.value=rtr;
    tbr.value=rbr;
    tbl.value=rbl;

    block.style.borderRadius=rtl + 'px' + rtr + 'px' + rbr + 'px' + rbl +'px';
} 



// Practise #4 dropdown

document.getElementById('nav').onmouseover=function(event) {
    let target = event.target;
    if (target.className == "menu-item") {
        let s = target.getElementsByClassName('submenu');
        closeMenu()
        s[0].style.display='block';     
    }
}
document.onmouseover=function(event) {
    let target = event.target;
    console.log(event.target);
    if(target.className!= 'menu-item' && target.className!="submenu"){
        closeMenu();
    }
}

function closeMenu() {
    let menu = document.getElementById('nav');
    let subm = document.getElementsByClassName('submenu');
    for (let i = 0; i <subm.length; i++){
        subm[i].style.display = "none"
    }
}

//practise # 5 tabs with content

var tab;
var tabContent;

window.onload=function(){
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick= function (event) {
    var target = event.target;
    if (target.className == 'tab') {
        for (var i=0; i<tab.length; i++){
            if(target ==tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}


function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show')
    }
}

// #Practise 6 pop up window that closes  
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block"
}

span.onclick = function() {
    modal.style.display = "none"
}

window.onclick = function (event){
 if (event.target == modal){
     modal.style.displays ="none"
 } 
}

// #practise 7 moving animations 

function myMove() {
    let elem = document.getElementById("myAnimation");
    let p = 0;
    let id = setInterval(frame, 10);
    function frame (){
        if (p == 200) {
            clearInterval(id)
    
        } else {
            p++;
            elem.style.top= p + "px";
            elem.style.left= p + "px";
        }
    }
}

// #practise 8 animations moving


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i ;
    let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1 ) {
        slideIndex=slides.length
    } 
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
 for (i=0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
        
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className+= "active"
}
