const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => { 
   mario.classList.add('jump');

   setTimeout(() => {
    mario.classList.remove('jump');
   }, 500)
} 

const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);
   
if(pipePosition <= 110 && pipePosition > 0  && marioPosition < 80){
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;  
    
    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;     

    mario.src = './img/gameover2.webp';
    mario.style.width = '100px'
    mario.style.marginLeft = '40px' 

    clearInterval(loop); 
}


}, 10)

document.addEventListener('keydown', jump);