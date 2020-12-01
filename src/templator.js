var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");

var image = "images/bloody_count.png";

var img = document.createElement("img");

img.onload = function (e) {
    console.log(e, img.width, img.height);
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    ctx.font = "30px cursive"

    var textX = 475;

    var text = prompt("Word Count Today?").trim();
    ctx.fillText(text, textX, 275);

    var text = prompt("Word Count Total?").trim();
    ctx.fillText(text, textX, 335);

    var text = prompt("Total Goal?").trim();
    ctx.fillText(text, textX, 395);

    var text = prompt("Date?").trim();
    ctx.fillText(text, textX, 455);
}
img.src = image;