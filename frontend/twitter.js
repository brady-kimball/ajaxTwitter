const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');
const TweetCompose = require('./tweet_compose.js');

$( function () {
  $("button.follow-toggle").each( (i, button) => new FollowToggle(button) );
  $("nav.users-search").each( (i, search) => new UsersSearch(search) );
  $("form.tweet-compose").each( (i, form) => new TweetCompose(form) );
});
