const APIUtil = {
  followUser: id => {
    return $.ajax({
      method: 'POST',
      url: `/users/${id}/follow`,
      dataType: 'JSON'
    });
  },

  unfollowUser: id => {
    return $.ajax({
      method: 'DELETE',
      url: `/users/${id}/follow`,
      dataType: 'JSON'
    });
  }, 


  searchUsers: (queryVal, success) => {
    return $.ajax({
      method: 'GET', 
      url: `/users/search?query=${queryval}`, 
      dataType: 'JSON', 
      success: function(data) {
        return data; 
      }
    }); 
  }
};


module.exports = APIUtil;

