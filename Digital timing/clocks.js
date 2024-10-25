const clock =document.getElementById('clock');
const dateElement=document.getElementById('date');
setInterval(function(){
    let now =new Date();
    clock.innerHTML=now.toLocaleTimeString();


    let options = { year: 'numeric', month: 'long', day: 'numeric' }; // Format options for date
    dateElement.innerHTML = now.toLocaleDateString(undefined, options);
},2000);