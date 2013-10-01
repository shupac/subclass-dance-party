var ColorDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.sequence = 3;
  this.step();
  // we plan to over write the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;
ColorDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  this.sequence++;
  var colorArray = ['green', 'blue', 'yellow'];
  this.$node.removeClass(colorArray[(this.sequence - 1) % 3]);
  this.$node.addClass(colorArray[this.sequence % 3]);
};
