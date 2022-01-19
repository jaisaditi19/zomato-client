import axios from "axios";

// redux
import { GET_REVIEW, POST_REVIEW } from "./review.type";

export const getReviews = (resId) => async (dispatch) => {
  try {
    const reviewList = await axios({
      method: "GET",
      url: `https://zomato-server1.herokuapp.com/review/${resId}`,
    });

    return dispatch({ type: GET_REVIEW, payload: reviewList.data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const postReview = (reviewData) => async (dispatch) => {
  try {
    await axios({
      method: "POST",
      url: `https://zomato-server1.herokuapp.com/review/new`,
      data: { reviewData },
    });

    return dispatch({ type: POST_REVIEW, payload: reviewData });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};
