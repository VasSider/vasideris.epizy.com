function resizedelay() {
var x = window.matchMedia("(max-width: 840px)");
var delay;
if (x.matches) {
        delay=0;
} else {
        delay=300;
}
return delay;
}

function DynamicPage(id) {
	document.getElementById("about-me").classList.remove("active");
	document.getElementById("resume").classList.remove("active");
	document.getElementById("contact").classList.remove("active");
	document.getElementById(id).classList.add("active");
    
}

$(document).ready(function(){ 
  

  $("#txt-about-me").show();
  $("#txt-resume").hide();
  $("#txt-contact").hide();
  DynamicPage("about-me");

  $("#about-me").click(function(){
    DynamicPage("about-me");
    $("#txt-about-me").show(resizedelay());
	$("#txt-resume").hide();
	$("#txt-contact").hide();
  });
   $("#resume").click(function(){
	DynamicPage("resume");
	$("#txt-about-me").hide();
	$("#txt-resume").show(resizedelay());
	$("#txt-contact").hide();
  });
  $("#contact").click(function(){
    DynamicPage("contact");
    $("#txt-about-me").hide();
	$("#txt-resume").hide();
	$("#txt-contact").show(resizedelay());
  });
  
    if ( window.history.replaceState ) {
            window.history.replaceState( null, null, window.location.href );
        }

});

function alertfunc() {
    setTimeout(function() {
        $("#msg-cont").slideDown()
        setTimeout(function() {
            $("#msg-cont").slideUp()
        }, 2000);
    }, 1000);
}