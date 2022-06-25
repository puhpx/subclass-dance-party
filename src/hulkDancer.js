var makeHulkDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeHulkDancer.prototype = Object.create(makeDancer.prototype);
makeHulkDancer.prototype.constructor = makeHulkDancer;

makeHulkDancer.prototype.step = function() {
    makeDancer.prototype.step.call(this);
    this.$node.toggle();
}