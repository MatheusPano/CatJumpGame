const cat = document.querySelector('.cat');
const pipe = document.querySelector('.pipe');
const cont = document.querySelector('.num');

const contagem = () => {
    cont.innerHTML = `3`
    setTimeout(() => {
        cont.innerHTML = `2`
        setTimeout(() => {
            cont.innerHTML = `1`
            setTimeout(() => {
                cont.innerHTML = `VAI!`
            },1000);
        },1000);
    },1000);
   
}

const jump = () => {
    cat.src = './assets/pulando.png';
    cat.classList.add('jump');
    setTimeout(() => {
    cat.classList.remove('jump')
    cat.src = './assets/twilight.gif';},500);  

}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const catPosition = window.getComputedStyle(cat).bottom.replace('px','');
if (pipePosition <= 120 && pipePosition > 0 &&catPosition < 80){
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    cat.style.animation = 'none';
    cat.style.bottom = `${catPosition}px`;

    clearInterval(loop);
    
    setTimeout(() => {return window.location.href = './final.html';},1000)
    
    
    
}

}, 10);

document.addEventListener('keydown', jump);