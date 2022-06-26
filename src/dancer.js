var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// makeDancer.prototype.lineUp = function() {
//   var styleSettings = {
//     top: 250,
//   };
//   this.$node.css(styleSettings);
// };