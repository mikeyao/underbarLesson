(function() {
  'use strict';

  window._ = {};



  _.identity = function(val) {
    return val;
  };

  _.each = function(collection, iterator) {
    if (Array.isArray(collection)){
      for (var i = 0; i < collection.length; i++){
        iterator(collection[i], i, collection);
      }
    }
    else {
      for (var key in collection){
        iterator(collection[key], key, collection);
      }
    }
  };

  _.reduce = function(collection, iterator, accumulator) {
    var check = (arguments.length === 2);

    _.each(collection, function(value){
      if (check){
        accumulator = value;
        check = false;
      }
      else{
        accumulator = iterator(accumulator, value);
      }
    })
    return accumulator;
  };

  _.contains = function(collection, target) {
    return _.reduce(collection, function(accumulator, value){
      if (accumulator){
        return true;
      }
      return (value === target);
    }, false);
  };

  _.defaults = function(obj) {
    _.each(arguments, function(theObject){
      _.each(theObject, function(value, key){
        if (obj[key] === undefined){
          obj[key] = value;
        }
      })
    })
    return obj;
  };

  _.once = function(func) {
    var data;
    var ran = false;

    return function(){
      if (!ran) {
        data = func.apply(this, arguments)
        ran = true;
      }
      return data;
    }
  };

  _.reduceRight = function(collection, iterator, accumulator){
    var check = (arguments.length === 2)
    var size = collection.length;
    
    for (var i = size-1; i > -1; i--){
      if (check){
        accumulator = collection[size-1];
        check = false;
      }
      else{
        accumulator = iterator(accumulator, collection[i]);
      }
    }
    return accumulator;
  };



}());