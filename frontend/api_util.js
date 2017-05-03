const APIUtil = {
  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      type: `POST`,
      dataType: "JSON"
    });
  },

  unfollowUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      type: `DELETE`,
      dataType: "JSON"
    });
  },

  searchUsers: (queryVal, success) => {
    let a = $.ajax({
      url: `/users/search`,
      data: {
        query: queryVal
      },
      type: `GET`,
      dataType: "JSON",
      success: success
    });
    return a
  }
};

module.exports = APIUtil;
