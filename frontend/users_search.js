const APIUtil = require('./api_util.js');
const FollowToggle = require('./follow_toggle.js')

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find("input[name=username]");
    this.$users = this.$el.find(".users");
    this.$el.on('input', this.handleInput.bind(this));
  }

  handleInput(event) {
    APIUtil.searchUsers(this.$input.val(), this.renderResults.bind(this));
    // APIUtil.searchUsers(this.$input.val()).then( users => this.renderResults(users));
  }

  renderResults(users) {
    this.$users.empty();
    users.forEach( (user) => {
      let $a = $("<a></a>");
      $a.text(user.username);
      $a.attr("href", `${user.id}`);
      let $li = $("<li></li>");
      let $button = $("<button></button");
      new FollowToggle($button, {
        userId: user.id,
        followState: (
          user.followed ? "followed" : "unfollowed"
        )
      });
      $li.append($a);
      $li.append($button);
      this.$users.append($li);
    });
  }
}

module.exports = UsersSearch;
