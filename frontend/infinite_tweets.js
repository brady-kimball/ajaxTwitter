const APIUtil = require('./api_util.js')

class InfiniteTweets {
  constructor(el) {
    this.$el = $(el);
    this.$feed = this.$el.find("ul#feed");
    this.$fetchMore = this.$el.find(".fetch-more");
    this.maxCreatedAt = null;
    this.$fetchMore.on("click", this.fetchTweets.bind(this));
    this.$el.on("insert-tweet", this.insertTweet.bind(this));
  }

  fetchTweets(event) {
    const data = {};

    if (this.maxCreatedAt) { data.max_created_at = this.maxCreatedAt; }

    APIUtil.fetchTweets(data).then( (data) => {
      this.insertTweets.bind(this)(data);

      if (data.length < 20) {
        this.$fetchMore.replaceWith("<strong>No more tweets :(</strong>");
      } else {
        this.maxCreatedAt = data[data.length - 1].created_at;
      }
    });

    return false;
  }

  insertTweet(event, tweet) {
    let $li = $("<li></li>");
    $li.text(JSON.stringify(tweet));
    this.$feed.prepend($li);
    this.maxCreatedAt = tweet.created_at;
  }

  insertTweets(tweets) {
    tweets.forEach( (tweet) => {
      let $li = $("<li></li>");
      $li.text(JSON.stringify(tweet));
      // debugger;
      this.$feed.append($li);
    });
  }
};

module.exports = InfiniteTweets;
