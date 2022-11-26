import starActive from '../../../../assets/images/star-active.png'
export const RatingCard = ({
  avatar,
  title,
  rating,
  description,
  isIcon = false,
}) => {
  return (
    <div
      className={`rating-card ${
        isIcon ? 'mx-2 p-6 border-2 rounded-lg shadow-lg h-[256px]' : ''
      }`}
    >
      <div className="relative flex flex-row py-6">
        <img
          src={avatar}
          alt="avatar"
          className="rounded-full w-12 h-12 object-cover"
        />
        <div className="flex flex-col justify-between ml-4">
          <span className="text-lg font-medium">{title}</span>
          <div className="flex items-center text-lg text-gray-400 font-medium">
            <img
              src={starActive}
              alt="star"
              className="mr-2 h-5 object-cover"
            />
            <p>
              {rating}
              <sub className="bottom-0">/5</sub>
            </p>
          </div>
        </div>
        {isIcon ? (
          <img
            className="w-[15%] max-w-[42px] absolute top-[25%] right-[2%]"
            src="https://cdn.popsww.com/popsapp/assets/images/icons/icon-double-apostrophe.png"
            alt="icon-double-apostrophe"
          />
        ) : null}
      </div>
      <p
        className={
          isIcon
            ? 'line-clamp-3'
            : 'line-clamp-3 sm:line-clamp-2 md:line-clamp-4'
        }
      >
        {description}
      </p>
    </div>
  )
}
