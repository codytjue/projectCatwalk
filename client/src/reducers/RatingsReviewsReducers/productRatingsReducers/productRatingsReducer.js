import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReview/actionTypes';

const productRatingsReducer = (state = {}, action) => {
  switch (action.type) {
  case actions.CHANGE_PRODUCT_RATINGS:
    return action.payload.productRatings;
  default:
    return state;
  }
};