export const switchActiveBusiness = (businessName, _id) => dispatch => {

    alert(JSON.stringify(businessName));
    alert(JSON.stringify(_id));

    dispatch ({

        type: "SWITCH_ACTIVE_BUSINESS",
        payload: businessName, _id
  
     })

// This should be your actual call, above is just a dummy since I didn't have the API

// export const switchActiveBusiness = (businessName, _id) => dispatch => {

    //  axios
    //  .post(``, newArticleBlogPostData)
    //  .then(res => 
    
    //  dispatch({
    
    //     type: SUBMIT_ARTICLE_BLOG_POST,
    //     payload: res.data
    
    //  })
    //  )
    
    //  .catch (err => 
    
    //  dispatch({
    
    //     type: GET_ERRORS,
    //     payload: err.response.data
    
    //  })
    //  );

}


