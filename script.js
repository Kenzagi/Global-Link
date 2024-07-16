let lastScrollTop = 0;

navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if(scrollTop > lastScrollTop){
		navbar.classList.add('white');
	}
	else if(scrollTop === 0){
		navbar.classList.remove('white');
	}
	lastScrollTop = scrollTop;
})