function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //verifica a entrada
    audio.currentTime= 0; //reinicia o play
    audio.play();
    key.classList.add('playing'); //adiciona uma classe style para a key

};

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing') //funcao que capta o evento para remover o style 
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
