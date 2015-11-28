Function.prototype.myBind1 = function(context) {
  var fn = this;
  return function () {
    fn.apply(context);
  };
};

// cat class
//
//
// meow function
//
// //cat.meow
//
// meow.myBind(cat)
