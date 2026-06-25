export default function VideoCard({
  thumbnail,
  title,
  channelLogo,
  channelName,
  views,
  date,
}) {
  return (
    <div className="cursor-pointer">
      <img src={thumbnail} alt={title} className="w-full rounded-xl" />

      <div className="flex mt-3 gap-3">
        <img
          src={channelLogo}
          alt={channelName}
          className="w-10 h-10 rounded-full"
        />

        <div>
          <h2 className="font-semibold">{title}</h2>

          <p className="text-sm text-gray-600">{channelName}</p>

          <p className="text-sm text-gray-600">
            {views} • {date}
          </p>
        </div>
      </div>
    </div>
  );
}
