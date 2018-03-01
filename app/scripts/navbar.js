function initMainMenu(){
	var navbarItems = document.getElementsByClassName('navbar-item');
	function addClickListener(navbarItem){
		navbarItem.addEventListener( 'click', function( e ) {
			var targetSection = e.target.parentElement.dataset.sectionToGo;
			console.log(targetSection);
			//@TODO: ROZSZERZYĆ O POBIERANIE NAZWY SCROLLA (DODAĆ GO DO TARGET.PARENTELEMENT.DATASET)
			console.log(widgetsConfig.scroll.name);
			console.log(eval(widgetsConfig.scroll.name));
			if(eval(widgetsConfig.scroll.name) !== undefined){
				e.preventDefault();
				mScrollTo(eval(widgetsConfig.scroll.name), targetSection);
			}
			for(var i = 0; i < navbarItems.length; i++){
				if(!(navbarItems[i].classList.contains('active') && navbarItems[i].dataset.sectionToGo === targetSection)){
					if(navbarItems[i].dataset.sectionToGo === targetSection){
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

