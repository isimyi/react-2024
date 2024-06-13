export const RatingControl = ({ currentValue, onSelect, maxValue = 5 }) => {
  const ratingValues = Array.from({ length: maxValue }, (_, index) => index + 1);

  return (
    <div>

      {ratingValues.map((value) => (
        <button
          disabled={value === currentValue}
          onClick={() => onSelect(value)}>
          {value}
        </button>
      ))}
    </div>
  );
};
