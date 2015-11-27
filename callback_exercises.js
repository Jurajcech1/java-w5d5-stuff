function Clock() {
  var date = new Date();
  this.hours = date.getHours();
  this.minutes = date.getMinutes();
  this.seconds = date.getSeconds();
  this.printTime();
  var that = this;
  setInterval(function() {
    that._tick();
  }, 1000);
}

Clock.prototype.printTime = function () {

  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
  // Format the time in HH:MM:SS
  // Use console.log to print it.
};

Clock.prototype._tick = function () {
  this.seconds++;
  if (this.seconds > 59) {
    this.minutes++;
    this.seconds -= 60;
  }

  if (this.minutes > 59) {
    this.hours++;
    this.minutes -= 60;
  }

  if (this.hours > 12) {
    this.hours -= 12;
  }
  this.printTime();

  // 1. Increment the time by one second.
  // 2. Call printTime.
};

// var clock = new Clock();

// var readline = require('readline');
// var reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Enter a number: ", function (numString) {
      var num = parseInt(numString);
      sum += num;
      console.log("Current sum is: " + sum);
      numsLeft--;
      addNumbers(sum, numsLeft, completionCallback);
    });
  }
  else {
    completionCallback(sum);
  }

}

// addNumbers(0, 3, function (sum) {
//   console.log("Total Sum: " + sum);
//   reader.close();
// });


var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question("Is " + el1 + " greater than " + el2 + "? ", function(answer) {
    if (answer === "yes") {
      callback(true);
    }
    else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
      if (isGreaterThan === true) {
        var tempNum = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tempNum;
        madeAnySwaps = true;
      }

      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if `madeAnySwaps` is true, else call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback(arr);
    }
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
