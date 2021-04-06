// Actions for personal profile steps

export const personalDetailsState = () => {

    return{

        type: "PERSONAL_DETAILS_STATE",

    }

};

export const personalAddressState = () => {

    return{

        type: "PERSONAL_ADDRESS_STATE",

    }

};

export const identificationState = () => {

    return{

        type: "IDENTIFICATION_STATE",

    }

};

export const submitPersonalDetails = (personalDetails) => dispatch => {

    alert(JSON.stringify(personalDetails));

    dispatch ({

        type: "SUBMIT_PERSONAL_DETAILS",
        payload: personalDetails
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

export const submitPersonalAddressDetails = (personalAddressDetails) => dispatch => {

    alert(JSON.stringify(personalAddressDetails));

    dispatch ({

        type: "SUBMIT_PERSONAL_ADDRESS_DETAILS",
        payload: personalAddressDetails
  
     })

}

export const submitIdentificationDetails = (identificationDetails) => dispatch => {

    alert(JSON.stringify(identificationDetails));

    dispatch ({

        type: "SUBMIT_IDENTIFICATION_DETAILS",
        payload: identificationDetails
  
     })

}
  


