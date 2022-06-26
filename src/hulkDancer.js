var makeHulkDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="hulkDancer"><img src="pic/hulk.png" alt="Hulk" width="50px" height="50px"></span>');
  this.$node = $('<span class="hulkDancer"></span>');
  this.setPosition(top, left);
  $('.hulkDancer').hover(function() {
    this.animate({
      height: '200px',
      width: '200px'
    }, 1000);
  }, function() {
    this.animate({
      height: '80px',
      width: '80px'
    }, 500);
  });
  // $('.hulkDancer').hover(function(event) {
  //   $(event.target).attr('height', '200px');
  // }, function(event) {
  //   $(event.target).attr('height', '50px');
  // });
};

makeHulkDancer.prototype = Object.create(makeDancer.prototype);
makeHulkDancer.prototype.constructor = makeHulkDancer;

makeHulkDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({
    height: '+=5px',
    width: '+=5px'
  }, 500);
  this.$node.animate({
    height: '-=5px',
    width: '-=5px'
  }, 500);
};

