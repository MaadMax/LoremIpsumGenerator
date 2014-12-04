//set path
ZeroClipboard.setMoviePath('swf/ZeroClipboard.swf');
//create client
var clip = new ZeroClipboard.Client();
//event
clip.addEventListener('mousedown',function() {
	clip.setText(document.getElementById('textrender').value);
});
clip.addEventListener('complete',function(client,text) {
	$("#copy").html('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Copié avec succès!');
});
//glue it to the button
clip.glue('copy');


/*

// main.js
ZeroClipboard.config( { swfPath: "swf/ZeroClipboard.swf" } );

var client = new ZeroClipboard( $("#copy-button") );

client.on( 'load', function(client) {
	client.on( 'datarequested', function(client) {
		var text = $('#textrender').text();
		client.setText(text);
		$("#copy-button").html('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Copié avec succès!');
	});

// callback triggered on successful copying
client.on( 'complete', function(client, args) {
	console.log("Text copied to clipboard: \n" + args.text );
});
});

// In case of error - such as Flash not being available
client.on( 'wrongflash noflash', function() {
	ZeroClipboard.destroy();
} )



*/