var Model = Ember.Object.extend({
});

Model.reopenClass({
  fromJSON: function(json) {
    return Model.create(json);
  },

  allFromJSON: function(all) {
    var data = [];

    for (var i = 0; i < all.length; i++) {
      var json = all[i];
      data.addObject(Model.fromJSON(json));
    }

    return data;
  }
});

module.exports = Model;
