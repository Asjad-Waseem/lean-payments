// Actions for business profile steps

export const basicInformationState = () => {

    return{

        type: "BASIC_INFORMATION_STATE",

    }

};

export const businessAddressState = () => {

    return{

        type: "BUSINESS_ADDRESS_STATE",

    }

};

export const bankInformationState = () => {

    return{

        type: "BANK_INFORMATION_STATE",

    }

};

export const incorporationDetailsState = () => {

    return{

        type: "INCORPORATION_DETAILS_STATE",

    }

};

export const expectedUseState = () => {

    return{

        type: "EXPECTED_USE_STATE",

    }

};

export const submitBasicInformation = (basicInformation) => dispatch => {

    alert(JSON.stringify(basicInformation));

    dispatch ({

        type: "SUBMIT_BASIC_INFORMATION",
        payload: basicInformation
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

export const submitIncorporationDetails = (incorporationDetails) => dispatch => {

    alert(JSON.stringify(incorporationDetails));

    dispatch ({

        type: "SUBMIT_INCORPORATION_DETAILS",
        payload: incorporationDetails
  
     })

}

export const submitExpectedUseDetails = (expectedUseDetails) => dispatch => {

    alert(JSON.stringify(expectedUseDetails));

    dispatch ({

        type: "SUBMIT_EXPECTED_USE_DETAILS",
        payload: expectedUseDetails
  
     })

}
  


