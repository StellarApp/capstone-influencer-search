const Creator = require('./Creator');
const Business = require('./Business');
const CreatorInsight = require('./CreatorInsight');
const Keyword = require('./Keyword');
const Collection = require('./Collection');
const Interest = require('./Interest');

// Relationships
Creator.hasMany(CreatorInsight);
CreatorInsight.belongsTo(Creator);

Business.hasMany(Collection);
Collection.belongsTo(Business);

Creator.hasMany(Collection);
Collection.belongsTo(Creator);

Creator.hasMany(Interest);
Interest.belongsTo(Keyword);

module.exports = {
  Business,
  Collection,
  Creator,
  CreatorInsight,
  Keyword,
  Interest
};
