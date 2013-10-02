var Peg = function() {
  this.pegArr = [];
};

Peg.prototype.free = function(objX, objY, objR) {
  for(var i = 0; i < this.pegArr.length; i++) {
    // debugger;
    var pegX = this.pegArr[i][0];
    var pegY = this.pegArr[i][1];
    var pegR = this.pegArr[i][2];

    if(this.distance(pegX, pegY, objX, objY) < pegR + objR) {
      return false;
    }
  }
  return true;
};

Peg.prototype.add = function(x1, y1, x2, y2) {
  var radius = this.distance(x1, y1, x2, y2);
  this.pegArr.push([x1, y1, radius]);

  var pegNode = $('<span class="peg"></span>');
  var styleSettings = {
    'top': x1-radius,
    'left': y1-radius,
    'border-width':radius,
    'border-radius':radius,
    'position':'absolute'
  }
  pegNode.css(styleSettings);
  return pegNode;
};

Peg.prototype.distance = function(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));
};