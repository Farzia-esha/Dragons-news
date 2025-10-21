import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {id,
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
  } = news;

  const formattedDate = new Date(news.author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "short", day: "numeric" });

  return (
    <div className="card bg-base-100 shadow-md border border-base-200 my-6">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-gray-800">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <button className ="flex gap-2 text-gray-500 hover:text-gray-700 cursor-pointer">
            <FaRegBookmark  />
            <FaShareAlt  />
        </button>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900 px-4 leading-snug">
        {title}
      </h2>

      {/* Thumbnail */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="card-body px-4 pb-3">
        <p className="text-gray-600 text-sm">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold cursor-pointer hover:underline">
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-3 border-t pt-3">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-400">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < rating.number ? "text-orange-400" : "text-gray-300"}
              />
            ))}
            <span className="ml-1 text-gray-700 font-medium">
              {rating.number.toFixed(1)}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span className="text-gray-700">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
