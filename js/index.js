var btn = document.getElementById('btn')
var audio = document.getElementById('audio')
var flash = document.getElementById('flash')

btn.addEventListener('click', function(){
    flash.style.display = 'block'
    audio.play()
   setTimeout(function(){
    flash.style.display='none';
   },300)
})
