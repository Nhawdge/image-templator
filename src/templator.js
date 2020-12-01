var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");

var image = "images/bloody_count.png";

var img = document.createElement("img");

img.onload = function (e) {
    console.log(e, img.width, img.height);
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    ctx.font= "26px cursive"

    var text = prompt("Word Count Today?");
    ctx.fillText(text, 475, 270);

    var text = prompt("Word Count Total?");
    ctx.fillText(text, 475, 330);

    
    var text = prompt("Total Goal?");
    ctx.fillText(text, 475, 390);

    
    var text = prompt("Date?");
    ctx.fillText(text, 475, 450);
}
img.src = image;