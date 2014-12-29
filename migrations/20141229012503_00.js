'use strict';

exports.up = function(knex, Promise) {
   return knex.schema.createTable('hnposts', function (table) {
    table.primary().integer('id');
    table.timestamp('retrievedAt');
  }).createTable('ghprojects', function (table) {
    table.integer('hn-id').references('hn-id').inTable('hnposts');
    table.string('hn-url');
    table.string('gh-url');
    table.string('gh-name');
    table.string('gh-description');
    table.string('gh-language');
  }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hnposts')
    .dropTable('ghprojects');
};
