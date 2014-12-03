// main.js
ZeroClipboard.config( { swfPath: "swf/ZeroClipboard.swf" } );

var client = new ZeroClipboard( $("#copy-button") );

client.on( 'load', function(client) {
	client.on( 'datarequested', function(client) {
		var text = $('#textrender').text();
		client.setText(text);
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