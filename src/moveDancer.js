var MoveDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();
  // we plan to over write the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

MoveDancer.prototype = Object.create(Dancer.prototype);
MoveDancer.prototype.constructor = MoveDancer;
MoveDancer.prototype.step = function(){
  var genNumber = function(initPos, max) {
    var newPos = (Math.random()-0.5)*20 + initPos;
    if(newPos + 20 > max || newPos < 0) {
      newPos = genNumber(initPos, max);
    }
    return newPos;
  };
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  this.left = genNumber(this.left, $('body').width());
  this.top = genNumber(this.top, $('body').height());
  this.setPosition(this.top, this.left);
};