function clock(){
    var time = new Date();
    document.getElementById('clock').innerHTML=count(time.getHours())+":"+
    count(time.getMinutes())+":"+
    count(time.getSeconds());
    setInterval(clock,1000);
}
function count(x){
    if(x<10){
        x="0"+x;
    }
    return x;
}
clock();