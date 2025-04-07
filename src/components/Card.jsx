const Card = ({ title, price, image, onClick, favorited }) => {
  return (
    <div
      className="rounded-md overflow-hidden
     shadow flex flex-col h-full min-h-[350px]"
    >
      <img
        src={image}
        alt={title}
        className="h-48 object-contain mx-auto mb-4"
      />
      <div className="px-4 pb-4 flex flex-col flex-grow">
        <span className="text-lg mb-2">{title}</span>

        <div className="flex justify-between items-center mt-auto">
          <p className="text-Accent text-xl">${price}</p>
          <button onClick={onClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill={favorited ? "red" : "currentColor"}
              className={`cursor-pointer ${
                favorited ? "fill-red-500" : "fill-Dark-Gray"
              }`}
            >
              <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
