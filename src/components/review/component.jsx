export const Review = ({review}) => {

  return (
    <div>
      <div>{review.user}</div>
      <p>{review.text}</p>
      <div>{review.rating}</div>
    </div>
  );
};
