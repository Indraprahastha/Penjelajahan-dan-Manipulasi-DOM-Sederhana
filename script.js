var body = document.body;
var bodyChild = body.children;
console.log()

var div1 = document.getElementById('eldest-parent');
var div1a = div1.children[0]
var div1b = div1.children[1]
var div1c = document.getElementById('a-child')
var div1d = div1c.previousElementSibling
var div1e = div1c.nextElementSibling
var div1f = div1.children[2]

console.log(div1f.innerHTML)

div1a.innerHTML = "Diakses Melalui Eldest Parent..."
div1d.innerHTML = "Diakses Melalui a Child..."
div1e.innerHTML = "Diakses Melalui a Child..."
div1f.innerHTML = "Diakses Melalui a Child..."
