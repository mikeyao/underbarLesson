(function() {
  'use strict';

  window._ = {};



  _.identity = function(val) {
    return val;
  };


  //Call iterator(value, key, collection) for each element of collection
  _.each = function(collection, iterator) {
  };


  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  _.reduce = function(collection, iterator, accumulator) {
  };


  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
  };


  // Extend a given object with properties of passed in objects.
  // Don't overwrite a key that already exists. 
  _.defaults = function(obj) {
  };


  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
  };


  // Like reduce, but runs from right to left. 
  // Because Zoolander
  _.reduceRight = function(collection, iterator, accumulator){
  };



}());