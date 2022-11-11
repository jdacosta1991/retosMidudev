var url = 'https://codember.dev/users.txt';
var storedText;

fetch(url)
  .then(function(response) {
    response.text().then(function(text) {
        procesarTexto(text) 
    });
  });
function procesarTexto(texto) {
    var stringToArray = texto.split("\n")
    console.log(stringToArray)
}