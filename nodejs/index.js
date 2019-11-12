var fs = require('fs');
fs.readFile('language/KR.html','utf8', function(err, data){
    var template = `KR.html`
    response.end(template)
})

