import { Review } from "../review/component.jsx";

export const Reviews = ({reviews}) => {

  return (
    <section>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li>
            <Review
              review={review}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
