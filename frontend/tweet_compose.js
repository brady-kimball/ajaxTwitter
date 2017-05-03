const APIUtil = require('./api_util.js');

class TweetCompose {
  constructor(el) {
    this.$el = $(el);
    this.$el.on("submit", this.submit.bind(this));
    this.$charsLeft = this.$el.find(".chars-left");
    this.$content = this.$el.find("textarea");
    this.$el.find("textarea").on("input", (event) => {
      this.$charsLeft.text(`${140 - this.$content.val().length}`);
    });
  }

  submit(event) {
    event.preventDefault();
    let formData = $(event.currentTarget).serialize();
    this.$el.find(":input").prop("disabled", true);
    APIUtil.createTweet(formData, this.handleSuccess.bind(this));
  }

  clearInput() {
    this.$el.find("textarea").val("");
    this.$el.find(":input").prop("disabled", false);
  }

  handleSuccess(tweet) {
    this.clearInput();
    let $ul = $(this.$el.data("tweets-ul"));
    let $li = $("<li></li>");
    let tweetString = JSON.stringify(tweet);
    $li.text(tweetString);
    $ul.append($li);
  }
}

module.exports = TweetCompose;
