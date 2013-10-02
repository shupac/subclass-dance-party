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
  this.scheduleID = setInterval(function() {
    scheduleMove();
  }, 10);
  this.moving = true;
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
    this.direction = Math.atan(this.vertical/this.horizontal);
  }
  if(this.left + this.horizontal + 20 > width || this.left + this.horizontal < 0) {
    this.horizontal *= -1;
    this.direction = Math.atan(this.vertical/this.horizontal);
  }
  // debugger;
  if(!pegs.free(this.top + this.vertical + 10, this.left + this.horizontal + 10, 10)) {
    console.log('hit peg');
    this.direction += Math.PI;
    this.horizontal = this.distance * Math.cos(this.direction);
    this.vertical = this.distance * Math.sin(this.direction);
  }
    this.top += this.vertical;
    this.left += this.horizontal;
  this.setPosition(this.top, this.left);
};

BouncyDancer.prototype.stopMoving = function() {
  clearInterval(this.scheduleID);
  this.moving = false;
};

BouncyDancer.prototype.startMoving = function() {
  var dancer = this;
  this.scheduleID = setInterval(function() {dancer.move();}, 10);
  this.moving = true;
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