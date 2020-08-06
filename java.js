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


