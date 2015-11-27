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
