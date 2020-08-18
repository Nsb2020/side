var toggleBtn = document.querySelector('.sidebar-toggle');
var closeBtn = document.querySelector('.close-btn');
var sideBar = document.querySelector('.sidebar');

toggleBtn.addEventListener("click", function(){
//console.log(sideBar.classList.contains('showcase'));//
	sideBar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener("click", function(){
	sideBar.classList.remove('show-sidebar');
})