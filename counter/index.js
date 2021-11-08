function reset(id) {
    var inputbox = document.getElementById('display');
    inputbox.innerText = 0;
}

function add(id) {
    var a = document.getElementById('display').innerText;
    var b = document.getElementById('display');
    var c = Math.floor(a);                      
    c = c+1;
    b.innerText = c;

}

function sub(id) {
    var a = document.getElementById('display').innerText;
    var b = document.getElementById('display');
    var c = Math.floor(a);
    c = c-1;
    b.innerText = c;
}