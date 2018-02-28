var formIds = [];
formIds[0] = 'contact-form';

function initForms(){
	function toJSONString( form ) {
		var obj = {};
		var elements = form.querySelectorAll( 'input, select, textarea' );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;

			if( name ) {
				obj[ name ] = value;
			}
		}

		return JSON.stringify( obj );
	}

	function initForm(formId){
		var form = document.getElementById( formId );
		var output = document.getElementById( formId+'-output' );
		form.addEventListener( 'submit', function( e ) {
			e.preventDefault();
			var json = toJSONString( this );
			output.innerHTML = json;
		}, false);
	}

	document.addEventListener( 'DOMContentLoaded', function() {
		for(var i = 0; i < formIds.length; i++){
			initForm(formIds[i]);
		}
	});
}
