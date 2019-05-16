let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
// smiley
context.beginPath();
context.arc(200,200,150,0,2*Math.PI); // Y, X, Size, endpoint, beginpoint
context.fillStyle = "#FFC922";
context.fill();
context.closePath();
context.stroke();

  // oog rechts
  context.beginPath();
  context.arc(270,140,40,0,1.45*Math.PI); // Y, X, Size, endpoint, beginpoint
  context.fillStyle = "#FFF";
  context.fill();
  context.closePath();
  context.stroke();
    // pupil rechts
    context.beginPath();
    context.arc(270,140,15,0,2*Math.PI); // Y, X, Size, endpoint, beginpoint
    context.fillStyle = "#000";
    context.fill();
    context.closePath();
    context.stroke();
      // wenkbrouw rechts
      context.moveTo(327,150); // X, Y - Starting point
      context.lineTo(257,90); // X, Y - Ending point
      context.lineWidth=2;
      context.stroke();


  // oog links
  context.beginPath();
  context.arc(130,140,40,5,3*Math.PI); // Y, X, Size, endpoint, beginpoint
  context.fillStyle = "#FFF";
  context.fill();
  context.closePath();
  context.stroke();
    // pupil links
    context.beginPath();
    context.arc(130,140,15,0,2*Math.PI); // Y, X, Size, endpoint, beginpoint
    context.fillStyle = "#000";
    context.fill();
    context.closePath();
    context.stroke();
      // wenkbrouw links
      context.moveTo(70,150); // X, Y - Starting point
      context.lineTo(150,90); // X, Y - Ending point
      context.lineWidth=2;
      context.stroke();

  // mond
  context.beginPath();
  context.arc(200,220,100,0,.90*Math.PI); // Y, X, Size, endpoint, beginpoint
  context.fillStyle = "#FFF";
  context.fill();
  context.closePath();
  context.stroke();
