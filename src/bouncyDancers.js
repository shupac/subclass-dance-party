var BouncyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('yellow');
  this.$node.addClass('movers');
  this.direction = Math.random()*2*Math.PI;
  // this.direction = 0.3*Math.PI;
  this.distance = 5;
  this.horizontal = this.distance * Math.cos(this.direction);
  this.vertical = this.distance * Math.sin(this.direction);
  var scheduleMove = this.move.bind(this);
  this.scheduleID = setInterval(function() {scheduleMove();}, 10);
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.randDir = function() {
  this.direction = Math.random()*2*Math.PI;
  this.horizontal = this.distance * Math.cos(this.direction);
  this.vertical = this.distance * Math.sin(this.direction);
};

BouncyDancer.prototype.move = function() {
  if(this.top + this.vertical + 20 > height || this.top + this.vertical < 32) {
    this.vertical *= -1;
  }
  if(this.left + this.horizontal + 20 > width || this.left + this.horizontal < 0) {
    this.horizontal *= -1;
  }
  // console.log(this.top, this.vertical);
  // // bounce bottom - going right, direction *= -1;
  // // bounce bottom - going left, direction = 
  // // bounce top - going right, direction *= -1;
  // // bounce top - going left, 2PI - direction
  // // bounce right - going up, direction = PI - direction;
  // // bounce right - going down, direction = 
  // // debugger;
  // if(!isNaN(this.vertical)) 
    this.top += this.vertical;
  // if(!isNaN(this.horizontal)) 
    this.left += this.horizontal;
  this.setPosition(this.top, this.left);
};

BouncyDancer.prototype.stopMoving = function() {
  clearInterval(this.scheduleID);
};

BouncyDancer.prototype.setPosition = function(top, left){
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.animate(styleSettings, 10);
};