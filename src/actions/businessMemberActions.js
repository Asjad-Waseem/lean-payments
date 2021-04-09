// Actions for business add/updating business members

export const addMember = (memberEmail) => dispatch => {

    alert(JSON.stringify(memberEmail));

    dispatch ({

        type: "ADD_MEMBER",
        payload: memberEmail
        // payload: res.apply.data
  
     })


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

export const submitMemberPersonalDetails = (memberPersonalDetails) => dispatch => {

    alert(JSON.stringify(memberPersonalDetails));

    dispatch ({

        type: "SUBMIT_MEMBER_PERSONAL_DETAILS",
        payload: memberPersonalDetails
        // payload: res.apply.data
  
     })


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

export const submitMemberPersonalAddressDetails = (memberPersonalAddressDetails) => dispatch => {

    alert(JSON.stringify(memberPersonalAddressDetails));

    dispatch ({

        type: "SUBMIT_MEMBER_PERSONAL_ADDRESS_DETAILS",
        payload: memberPersonalAddressDetails
  
     })

}

export const submitMemberIdentificationDetails = (memberIdentificationDetails) => dispatch => {

    alert(JSON.stringify(memberIdentificationDetails));

    dispatch ({

        type: "SUBMIT_MEMBER_IDENTIFICATION_DETAILS",
        payload: memberIdentificationDetails
  
     })

}
  




