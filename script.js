function dice(){
    var one=document.querySelector("#member-1");
    one.innerText=Math.floor((Math.random()*6)+1);

    var two=document.querySelector("#member-2");
    two.innerText=Math.floor((Math.random()*6)+1);

    var three=document.querySelector("#member-3");
    three.innerText=Math.floor((Math.random()*6)+1);

if(one.innerText>two.innerText && one.innerText>three.innerText){
    var result=document.querySelector("#winner");
    result.innerText="1st Player is Winner";
    document.querySelector("#member-1").style.background="green";
    if(two.innerText===three.innerText){
        document.querySelector("#member-2").style.background="blue";
        document.querySelector("#member-3").style.background="blue";
    }
    else if(two.innerText>three.innerText){
        document.querySelector("#member-2").style.background="yellow";
        document.querySelector("#member-3").style.background="red";
    }
    else{
        document.querySelector("#member-2").style.background="red";
        document.querySelector("#member-3").style.background="yellow";
    }
}
else if(two.innerText>one.innerText && two.innerText>three.innerText){
    var result=document.querySelector("#winner");
    result.innerText="2nd Player is Winner";
    document.querySelector("#member-2").style.background="green";
    if(one.innerText===three.innerText){
        document.querySelector("#member-1").style.background="blue";
        document.querySelector("#member-3").style.background="blue";
    }
    else if(one.innerText>three.innerText){
        document.querySelector("#member-1").style.background="yellow";
        document.querySelector("#member-3").style.background="red";
    }
    else{
        document.querySelector("#member-1").style.background="red";
        document.querySelector("#member-3").style.background="yellow";
    }
}
if(three.innerText>two.innerText && three.innerText>one.innerText){
    var result=document.querySelector("#winner");
    result.innerText="3rd Player is Winner";
    document.querySelector("#member-3").style.background="green";
    if(one.innerText===two.innerText){
        document.querySelector("#member-1").style.background="blue";
        document.querySelector("#member-2").style.background="blue";
    }
    else if(two.innerText>one.innerText){
        document.querySelector("#member-2").style.background="yellow";
        document.querySelector("#member-1").style.background="red";
    }
    else{
        document.querySelector("#member-2").style.background="red";
        document.querySelector("#member-1").style.background="yellow";
    }
}
}