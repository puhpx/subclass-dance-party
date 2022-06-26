$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(400, (i * 100));
      // window.dancers[i].lineUp();
    }
  });

  $('.breakLineButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(Math.random() * 1000, Math.random() * 1000);
    }
  });

  // $('.interactButton').on('click', function() {
  //   if(window.dancers.length >=2) {
  //     var dancersArr = window.dancers.splice();
  //     var pair1;
  //     var pair2;
  //     for (i = 0; i < dancersArr.length; i++) {
  //       var currentDancer = dancersArr[i];

  //       var shortestDistance = +Infinity;
  //       for(j = 0; j < dancersArr.length; j++) {
  //         if (j !== i) {
  //           var distance = Math.sqrt((Math.abs(dancerArr[i].top - dancerArr[j].top)) ** 2 + (Math.abs(dancerArr[i].left - dancerArr[j].left))**2);
  //           if(distance < shortestDistance) {
  //             shortestDistance = distance;
  //             pair1 = currentDancer;
  //             pair2 = darcerArr[j];
  //           }
  //         }
  //       }
  //     }
  //   }
  //   pair1.setPosition(pair2.top, pair2.left);
  // });
});


