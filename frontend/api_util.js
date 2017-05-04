const APIUtil = {
  createTweet: (formData, success) => {
    return $.ajax({
      url: "/tweets",
      type: "POST",
      data: formData,
      dataType: "JSON",
      success: success
    });
  },

  fetchTweets: (data) => {
    return $.ajax({
      url: "/feed",
      type: "GET",
      dataType: "JSON",
      data
    });
  },

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
    return $.ajax({
      url: `/users/search`,
      data: {
        query: queryVal
      },
      type: `GET`,
      dataType: "JSON",
      success: success
    });
  },


};

module.exports = APIUtil;
