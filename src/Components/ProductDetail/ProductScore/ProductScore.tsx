import { StarIcon } from "@heroicons/react/24/outline";

interface IScore {
  score: number;
}

export const ProductScore = ({ score }: IScore) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="mt-3">
      <h3 className="sr-only">Reviews</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                score > rating ? "text-indigo-500" : "text-gray-300",
                "h-5 w-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="ml-2 text-gray-400 text-sm">{score} out of 5 stars</p>
      </div>
    </div>
  );
};
