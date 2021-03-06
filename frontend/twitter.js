const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');
const TweetCompose = require('./tweet_compose.js');
const InfiniteTweets = require('./infinite_tweets.js')

$( function () {
  $("button.follow-toggle").each( (i, button) => new FollowToggle(button) );
  $("nav.users-search").each( (i, search) => new UsersSearch(search) );
  $("form.tweet-compose").each( (i, form) => new TweetCompose(form) );
  $("div.infinite-tweets").each( (i, div) => new InfiniteTweets(div) );
});
