(function() {
  'use strict';

  window._ = {};



  _.identity = function(val) {
    return val;
  };


  //Call iterator(value, key, collection) for each element of collection
  _.each = function(collection, iterator) {
    if (Array.isArray(collection)){
      for (var i = 0; i < collection.length; i++){
        iterator(collection[i], i, collection);
      }
    } else if (typeof(collection) === 'object'){
      for (var key in collection){
        iterator(collection[key], key, collection);
      }
    }
  };


  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  _.reduce = function(collection, iterator, accumulator) {
    var check = (arguments.length === 2);
    _.each(collection, function(val){
      // _.each(collection, iterator); 
      // iteractor(val, index, collection);
      if (check){
        accumulator = val;
        check = false;
      } else {
        accumulator = iterator(accumulator, val);
      }
    });
    return accumulator;
  };


  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    return _.reduce(collection, function(found, val){
      return found || val === target;
    }, false);
  };


  // Extend a given object with properties of passed in objects.
  // Don't overwrite a key that already exists. 
  _.defaults = function(obj) {
    _.each(arguments, function(objExt){
      _.each(objExt, function(val, key){
        if (!obj.hasOwnProperty(key)){
          obj[key] = val;
        }
      });
    });
    return obj;
  };


  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    var alreadyCalled = false;
    var result;
    return function(){
      if (!alreadyCalled){
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
      return result;
    };
  };


  // Like reduce, but runs from right to left. 
  // Because Zoolander
  _.reduceRight = function(collection, iterator, accumulator){
    var check = (arguments === 2);
    for (var i = collection.length - 1; i >= 0; i--){
      if (check){
        accumulator = collection[i];
        check = false;
      } else {
        accumulator = iterator(accumulator, collection[i]);
      }
    }
  };



}());