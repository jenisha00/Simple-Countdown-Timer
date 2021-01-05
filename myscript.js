const dd= document.getElementById('days');
const hh= document.getElementById('hours');
const mm= document.getElementById('minutes');
const ss= document.getElementById('seconds');

const s = 1000,
    m = s * 60,
    h = m * 60,
    d = h * 24;

//end date
var countdownDate= new Date("Jan 1, 2022 00:00:00").getTime();

//update the count down every 1 second
var x = setInterval(function(){
    var today= new Date().getTime();
    var distance= countdownDate - today;
    var day = Math.floor(distance / d);
    var hour = Math.floor((distance % d) / h);
    var minute = Math.floor((distance % h) / m);
    var second = Math.floor((distance % m) / s);
    dd.innerHTML = day;
    hh.innerHTML = hour;
    mm.innerHTML = minute;
    ss.innerHTML = second;

    // when the count down finishes, a message is displayed
    if(distance < 0){
        clearInterval(x);
        dd.innerHTML = 00;
        hh.innerHTML = 00;
        mm.innerHTML = 00;
        ss.innerHTML = 00;
        document.getElementById('message').innerHTML = "Happy New Year 2022";
    }
},1000);