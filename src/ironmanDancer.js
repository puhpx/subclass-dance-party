var makeIronmanDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="ironmanDancer"></span>');
  this.$node = $('<span class="ironmanDancer"> <img src="pic/ironman.png" alt="Iron Man" width="150" height="150"></span>');
  this.setPosition(top, left);
};

makeIronmanDancer.prototype = Object.create(makeDancer.prototype);
makeIronmanDancer.prototype.constructor = makeIronmanDancer;

makeIronmanDancer.prototype.step = function() {
    makeDancer.prototype.step.call(this);
    this.$node.animate({
      height: 'toggle'
    }, 1000);
    // this.$node.toggle();
    // this.$node.animate({
    //   width: '+=30px',
    //   height: '+=30px',
    // }, 1000);
}