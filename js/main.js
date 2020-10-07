window.addEventListener('load', function () {
  $('.spinner').css('display', 'none');
})


const elem = document.querySelector('.wrapper');
const windowWidth = window.innerWidth / 10;
const windowHeight = window.innerHeight / 10;

elem.addEventListener('mousemove', (e) => {
	const mouseX = e.clientX / windowWidth;
	const mouseY = e.clientY / windowHeight;

  	const bg = document.querySelector('.background-image');
  
  	bg.style.marginLeft = `${mouseX}px`;
  	bg.style.marginTop = `${mouseY}px`;
});

$.get('https://eu.mc-api.net/v3/server/status-http/cloudninemc.uk', (res) => {
	var data = res.split(",");
	$('.player-count').html(data[1]);
});

var clipboard = new ClipboardJS('.copy');