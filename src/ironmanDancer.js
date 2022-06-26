var makeIronmanDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.$node = $('<span class="ironmanDancer"> <img src="pic/ironman.png" alt="Iron Man" width="100" height="100"></span>');
  this.setPosition(top, left);
  $('.ironmanDancer').hover(function(event) {
    $(event.target).attr('src', 'pic/ironman_nohelmet.PNG');
  }, function(event) {
    $(event.target).attr('src', 'pic/ironman.PNG');
  });
};

makeIronmanDancer.prototype = Object.create(makeDancer.prototype);
makeIronmanDancer.prototype.constructor = makeIronmanDancer;

makeIronmanDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({
    top: '-=30',
  }, 1000);
  this.$node.animate({
    top: '+=30',
  }, 2000);
};

