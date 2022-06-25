var makeIronmanDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeIronmanDancer.prototype = Object.create(makeDancer.prototype);
makeIronmanDancer.prototype.constructor = makeIronmanDancer;

makeIronmanDancer.prototype.step = function() {
    makeDancer.prototype.step.call(this);
    this.$node.toggle();
}