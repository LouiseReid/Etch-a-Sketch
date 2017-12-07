var app = function(){
  var canvas = document.getElementById('main-canvas')
  var context = canvas.getContext('2d');

  var coords = [250, 250]

  var x = coords[0]
  var y = coords[1]


  context.beginPath();
  context.moveTo(x, y);

  var draw = function(x, y){
    context.lineTo(x, y);
    context.stroke();
  }

  var up = document.getElementById('up');
  up.addEventListener('click', function(){
    if(y != 0){
      y -= 10;
      draw(x, y)
    }
  })


  var right = document.getElementById('right');
  right.addEventListener('click', function(){
    if(x != 500){
      x += 10;
      draw(x, y)
    }
  })

  var down = document.getElementById('down');
  down.addEventListener('click', function(){
    if(y != 500){
      y += 10;
      draw(x, y)
    }
  })

  var left = document.getElementById('left');
  left.addEventListener('click', function(){
    if(x != 0){
      x -= 10;
      draw(x, y)
    }
  })

  document.onkeydown = checkKey;

  function checkKey(e) {

      e = e || window.event;

      if (e.keyCode == '38') {
        if(y != 0){
          y -= 10;
          draw(x, y)
        }

      }
      else if (e.keyCode == '40') {
        if(y != 500){
          y += 10;
          draw(x, y)
        }
      }
      else if (e.keyCode == '37') {
        if(x != 0){
          x -= 10;
          draw(x, y)
        }
      }
      else if (e.keyCode == '39') {
        if(x != 500){
          x += 10;
          draw(x, y)
        }
      }

  }



}



window.addEventListener('load', app)
