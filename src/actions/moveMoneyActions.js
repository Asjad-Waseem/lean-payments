// Actions for moving money

export const submitMovingMoneyDetails = (movingMoneyDetails) => dispatch => {

    alert(JSON.stringify(movingMoneyDetails));

    dispatch ({

        type: "SUBMIT_MOVING_MONEY_DETAILS",
        payload: movingMoneyDetails
  
     })

}

