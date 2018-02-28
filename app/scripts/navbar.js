function initMainMenu(){
	var navbarItems = document.getElementsByClassName('navbar-item');
	function addClickListener(navbarItem){
		navbarItem.addEventListener( 'click', function( e ) {
			var targetSesction = e.target.parentElement.dataset.sectionToGo;
			for(var i = 0; i < navbarItems.length; i++){
				if(!(navbarItems[i].classList.contains('active') && navbarItems[i].dataset.sectionToGo === targetSesction)){
					if(navbarItems[i].dataset.sectionToGo === targetSesction){
						navbarItems[i].classList.add('active');
					}else{
						navbarItems[i].classList.remove('active');
					}
				}
			}
		}, false);
	}

	for(var i = 0; i < navbarItems.length; i++){
		addClickListener(navbarItems[i]);
	}
}

