$( document ).ready(function() {

	// Including CSS because stackoverflow said to do it this way
	var style = document.createElement('link');
	style.rel = 'stylesheet';
	style.type = 'text/css';
	style.href = chrome.extension.getURL('style.css');
	(document.head||document.documentElement).appendChild(style);

	// Set the textarea to be 100% height
	resizeDiv();

	function resizeDiv() {
		vph = $(window).height() - 210;
		$("#notes").css({"height": vph + "px"});
	}

	// If it's in local storage, then show it
	$("#notes").val(localStorage.getItem("note"));

	//Update local storage note on keyup
	$("#notes").keyup(function() {

	    var savednote = $(this).val();

	    localStorage.setItem('note', savednote);
	 
	 });

})

// Set the textarea to be 100% height even if you resize the browser

window.onresize = function(event) {
	resizeDiv();	
}
