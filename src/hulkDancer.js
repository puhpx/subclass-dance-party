var makeHulkDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="hulkDancer"><img src="pic/hulk.png" alt="Hulk" width="50" height="50"></span>');
  this.$node = $('<span class="hulkDancer"></span>');
  this.setPosition(top, left);
  $(".hulkDancer").hover(function(event){
    $(event.target).attr('height', );
  }, function(event){
    $(event.target).attr('height', 50px);
  });
};

makeHulkDancer.prototype = Object.create(makeDancer.prototype);
makeHulkDancer.prototype.constructor = makeHulkDancer;

makeHulkDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({
    height: '+=30px',
    width: '+=30px'
  }, 1000)
  this.$node.animate({
    height: '-=30px',
    width: '-=30px'
  }, 1000)
}

