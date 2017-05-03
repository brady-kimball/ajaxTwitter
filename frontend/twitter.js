const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

$( function () {
  $("button.follow-toggle").each( (i, button) => new FollowToggle(button) );
  $("nav.users-search").each( (i, search) => new UsersSearch(search) );
});
