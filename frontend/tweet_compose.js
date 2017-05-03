const APIUtil = require('./api_util.js');

class TweetCompose {
  constructor(el) {
    this.$el = $(el);
    this.$el.on("submit", this.submit.bind(this));
    this.$charsLeft = this.$el.find(".chars-left");
    this.$content = this.$el.find("textarea");
    this.$mentionedUsers = this.$el.find("div.mentioned-users");
    this.$el.find("textarea").on("input", (event) => {
      this.$charsLeft.text(`${140 - this.$content.val().length}`);
    });
    this.$el.find("a.add-mentioned-user").on("click", this.addMentionedUser.bind(this));
    this.$mentionedUsers.on("click", "a.remove-mentioned-user", this.removeMentionedUser.bind(this));
  }

  addMentionedUser(event){
    let $scriptTag = this.$mentionedUsers.find("script");
    this.$mentionedUsers.append($scriptTag.html());

    return false;
  }

  removeMentionedUser(event) {
    $(event.currentTarget).parent().remove();
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
    this.$mentionedUsers.find("div").empty();
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
