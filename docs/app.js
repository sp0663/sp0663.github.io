const btn=document.getElementById("btn");
const adv=document.getElementById("adv");
const res=document.getElementById("reset");
const twt=document.getElementById("tweet")
const tim=document.getElementById("time");

btn.addEventListener("click",function(){
    btn.style.display="none";
    getadvice();
    res.style.display="block";
    twt.style.display="block";
});

res.addEventListener("click",function(){
    btn.style.display="block";
    adv.innerHTML="";
    tim.innerHTML="";
    res.style.display="none";
    twt.style.display="none";
});

twt.addEventListener("click",function(){
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(adv.innerHTML)}`,'_blank');
})

function getadvice(){
    fetch('https://api.adviceslip.com/advice').then(response =>response.json()).then(advice =>
        {
            const advobj=advice.slip;
            adv.innerHTML=`"${advobj.advice}"`;
            const date=new Date();
            tim.innerHTML=date.toLocaleString();
        }).catch(error =>
        {
            console.log(error);
        });
}
