document.getElementById('hamb').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active'); 

   
    const bars = document.querySelectorAll('.bar');
    bars[0].classList.toggle('top'); 
    bars[1].classList.toggle('middle'); 
    bars[2].classList.toggle('bottom'); 
});