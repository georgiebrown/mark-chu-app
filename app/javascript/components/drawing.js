function drawing() {
$(function() {

  const canvas = document.querySelector("canvas");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const context = canvas.getContext("2d");



  context.strokeStyle = "black";
  context.lineWidth = 1;
  context.lineCap = "round";

  let shouldPaint = false;
  // mouse down
  document.addEventListener("mousedown", (event) => {
    shouldPaint = true;
    context.moveTo(event.pageX, event.pageY);
    context.beginPath();
  })
  // mouse up
  document.addEventListener("mouseup", (event) => {
    shouldPaint = false;
  })
  // mouse move
  document.addEventListener("mousemove", (event) => {
    if (shouldPaint){
    context.lineTo(event.pageX, event.pageY);
    context.stroke();
    }
  });

  document.addEventListener("touchstart", (event) => {
    shouldPaint = true;
    context.moveTo(event.pageX, event.pageY);
    context.beginPath();
  })
  // mobile touch up
  document.addEventListener("touchend", (event) => {
    shouldPaint = false;
  })
  // mobile touch move
  document.addEventListener("touchmove", (event) => {
    if (shouldPaint){
    context.lineTo(event.pageX, event.pageY);
    context.stroke();
    }
  });

  // changing colour
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
      console.log(this)
      event.preventDefault();
      context.strokeStyle = this.style.backgroundColor;
    })
})

  //clear button
  document.getElementById('clear').addEventListener('click', function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }, false);

  const saveButton = document.querySelector(".save");
  saveButton.addEventListener('click', () => {
    console.log("clicked")
    // document.getElementById("canvasimg").style.border = "2px solid";
    var dataURL = canvas.toDataURL();
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
    document.getElementById("canvasimg").style.backgroundImage = "url('https://res.cloudinary.com/daqhmzr2j/image/upload/v1594272599/unnamed_at9qni.jpg')";
    imageUrl.push(dataURL);
  });

});

}
export { drawing };
