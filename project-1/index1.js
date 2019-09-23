var total =0;
function score2(){
    var s= userscore1;
    total+=s;
    document.getElementById('score2').innerHTML=total;
}
function play1(){
    userscore1=1;
    var computerscore1 =  Math.floor(Math.random() * 6) + 1;
    document.getElementById('userscore2').innerHTML=userscore1;
    document.getElementById('computerscore2').innerHTML=computerscore1;
    if(computerscore1==1){
        alert("out.....");
        total=0;
    }
    else{
        score2();
    }
}
function play2(){
    userscore1=2;
    var computerscore1 =  Math.floor(Math.random() * 6) + 1;
    document.getElementById('userscore2').innerHTML=userscore1;
    document.getElementById('computerscore2').innerHTML=computerscore1;
    if(computerscore1==2){
        alert("out.....");
        total=0;
    }
    else{
        score2();
    }
}
function play3(){
    userscore1=3;
    var computerscore1 =  Math.floor(Math.random() * 6) + 1;
    document.getElementById('userscore2').innerHTML=userscore1;
    document.getElementById('computerscore2').innerHTML=computerscore1;
    if(computerscore1==3){
        alert("out.....");
        total=0;
    }
    else{
        score2();
    }
}
function play4(){
    userscore1=4;
    var computerscore1 =  Math.floor(Math.random() * 6) + 1;
    document.getElementById('userscore2').innerHTML=userscore1;
    document.getElementById('computerscore2').innerHTML=computerscore1;
    if(computerscore1==4){
        alert("out.....");
        total=0;
    }
    else{
        score2();
    }
}
function play5(){
    userscore1=5;
    var computerscore1 =  Math.floor(Math.random() * 6) + 1;
    document.getElementById('userscore2').innerHTML=userscore1;
    document.getElementById('computerscore2').innerHTML=computerscore1;
    if(computerscore1==5){
        alert("out.....");
        total=0;
    }
    else{
        score2();
    }
}
function play6(){
    userscore1=6;
    var computerscore1 =  Math.floor(Math.random() * 6) + 1;
    document.getElementById('userscore2').innerHTML=userscore1;
    document.getElementById('computerscore2').innerHTML=computerscore1;
    if(computerscore1==6){
        alert("out.....");
        total=0;
    }
    else{
        score2();
    }
}