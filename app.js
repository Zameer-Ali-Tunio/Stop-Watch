function times(){
var current= new Date();
var a=document.getElementById('div')
a.innerHTML=current
document.write(current)
}




var min=0;
var sec=0;
var msec=0;
var interval;
var mins=document.getElementById("min")
var secs=document.getElementById("sec")
var msecs=document.getElementById("msec")
var button=document.getElementById("button")
function timer(){
    msec++
    msecs.innerHTML=msec
    if(msec>= 100){
        sec++
        secs.innerHTML=sec
        msec=0;             
    } 
    else if(sec >= 60){
        min++
        sec=0
        mins.innerHTML=min
    }
}
function start(){
    interval=setInterval(timer,10)
    if(interval>1){
        button.disabled=true
    }
    
}
function stop(){
    clearInterval(interval)
    if(clearInterval(interval)){
        button.disabled=false
    }
}
function reset(){
    min=0
    sec=0
    msec=0
    mins.innerHTML=min
    secs.innerHTML=sec
    msecs.innerHTML=msec
    stop()
    if(msec<1){
        button.disabled=false
    }
}