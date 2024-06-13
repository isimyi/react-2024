import { RatingControl } from "../ratingControl/component.jsx";
import { useReducer } from "react";
import { ButtonComponent } from "../buttonComponent/component.jsx";

const INITIAL_FORM_STATE = {
  userName: "",
  reviewText: "",
  rating: 5,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "setUserName":
      return {...state, userName: payload}
    case "setReviewText":
      return {...state, reviewText: payload}
    case "setRating":
      return {...state, rating: payload}
    case "setInitialValues":
      return { ...INITIAL_FORM_STATE }
    default:
      return state;
  }
}

export const ReviewForm = () => {
  const [formState, dispatch] = useReducer(reducer, INITIAL_FORM_STATE);

  return (
    <div>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="user-name"
          value={formState.userName}
          onChange={(event) => {
            dispatch({ type: "setUserName", payload: event.target?.value })
          }}/>
      </label>

      <label>
        <span>Text</span>
        <textarea
          name="review-text"
          value={formState.reviewText}
          onChange={(event) => {
            dispatch({ type: "setReviewText", payload: event.target?.value })
          }}>
        </textarea>
      </label>

      <div>
        <span>Rating</span>
        <RatingControl
          currentValue={formState.rating}
          maxValue={5}
          onSelect={(rating) => {
            dispatch({ type: "setRating", payload: rating })
          }}
        />
      </div>

      <ButtonComponent
        onClick={() => dispatch({ type: "setInitialValues" })}>
        Send review
      </ButtonComponent>
    </div>
  );
};
