import { Review } from "../review/component.jsx";
import { ReviewForm } from "../reviewForm/component.jsx";

export const Reviews = ({reviews}) => {

  return (
    <section>
      <h3>Reviews</h3>

      {reviews?.length === 0 ? (
        <div>There are no reviews yet</div>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li>
              <Review
                review={review}
              />
            </li>
          ))}
        </ul>
      )}

      <ReviewForm/>
    </section>
  )
}
