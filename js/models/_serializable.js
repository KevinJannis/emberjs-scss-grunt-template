var Instantiate = require('./_createfromjson');

var Serializable = Instantiate.extend({
  serialize: function () {
    var result = {};
    var $ = jQuery;

    for (var key in $.extend(true, {}, this)) {
      // Skip these
      if (key === 'isInstance' ||
          key === 'isDestroyed' ||
          key === 'isDestroying' ||
          key === 'concatenatedProperties' ||
          typeof this[key] === 'function') {

          continue;
      }

      var item = this[key];

      if (item && item.addObjects) {
        // Array
        var items = [];
        for (var i = 0; i < item.length; i++) {
          var it = item[i];
          if (it && it.serialize) {
            items.addObject(it.serialize());
          } else {
            items.addObject(it);
          }
        }
        result[key] = items;
      } else if (item && item.serialize) {
        // Object
        result[key] = item.serialize();
      } else if (item && item.format) {
        // Momentjs
        result[key] = item.format();
      } else {
        // Something else
        result[key] = item;
      }
    }

    return result;
  },

  isValid: function() {
    return true;
  },

  isEqual: function(a) {
    if (!a || !a.get) { return false; }
    return this.get('id') == a.get('id');
  },

  toString: function() {
    return this.get('id');
  }
});

module.exports = Serializable;
