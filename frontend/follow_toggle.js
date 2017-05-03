const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el, options) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id") || options.userId;
    this.followState = (this.$el.data("initial-follow-state") ||
                        options.followState);
    this.render();
    this.$el.on("click", this.handleClick.bind(this));
  }

  render() {
    switch (this.followState) {
      case "followed":
        this.$el.prop("disabled", false);
        this.$el.html("Unfollow!");
        break;
      case "unfollowed":
        this.$el.prop("disabled", false);
        this.$el.html("Follow!");
        break;
      case "following":
        this.$el.prop("disabled", true);
        this.$el.html("Processing...");
        break;
      case "unfollowing":
        this.$el.prop("disabled", true);
        this.$el.html("Processing...");
    }
  }

  handleClick(event) {
    const me = this;
    let newState = this.followState;
    event.preventDefault();
    switch (this.followState) {
      case "unfollowed":
        this.followState = "following";
        this.render();
        APIUtil.followUser(this.userId).then( () => {
          me.followState = "followed";
          me.render();
        });
        break;
      case "followed":
        this.followState = "unfollowing";
        this.render();
        APIUtil.unfollowUser(this.userId).then( () => {
          me.followState = "unfollowed";
          me.render();
        });
        break;
    }
  }
}


module.exports = FollowToggle;
