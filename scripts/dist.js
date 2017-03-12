var copy = require('copy-files');

copy({
	files: {
		'index.html': __dirname + '/../html/index.html',
		'tictactoe.js': __dirname + '/../lib/tictactoe.js',
		'styles.css': __dirname + '/../css/styles.css'
	},
	dest: 'http-server/public',
	overwrite: true
}, function (err) {
	console.log(err);
});