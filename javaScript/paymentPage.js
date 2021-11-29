chk=document.getElementsByClassName("checkbox")
card = document.getElementById("card")
pmd=document.getElementsByClassName("pmd")
function fncard(){
    for (i = 0; i < chk.length; i++) {
        chk[i].checked = false;
    }
    for (i = 0; i < pmd.length; i++) {
        pmd[i].style.display="none"
    }
    document.getElementById("chcard").checked = true
    card.style.display="block"
}

nb = document.getElementById("nb")
function fnnb(){
    for (i = 0; i < chk.length; i++) {
        chk[i].checked = false;
    }
    for (i = 0; i < pmd.length; i++) {
        pmd[i].style.display="none"
    }
    document.getElementById("chnb").checked = true
    nb.style.display="block"
}
upi = document.getElementById("upi")
function fnupi(){
    for (i = 0; i < chk.length; i++) {
        chk[i].checked = false;
    }
    for (i = 0; i < pmd.length; i++) {
        pmd[i].style.display="none"
    }
    document.getElementById("chupi").checked = true
    upi.style.display="block"
}

pytm = document.getElementById("pytm")
function fnpytm(){
    for (i = 0; i < chk.length; i++) {
        chk[i].checked = false;
    }
    for (i = 0; i < pmd.length; i++) {
        pmd[i].style.display="none"
    }
    document.getElementById("chpytm").checked = true
    pytm.style.display="block"
}

pz = document.getElementById("pz")
function fnpz(){
    for (i = 0; i < chk.length; i++) {
        chk[i].checked = false;
    }
    for (i = 0; i < pmd.length; i++) {
        pmd[i].style.display="none"
    }
    document.getElementById("chpz").checked = true
    pz.style.display="block"
}