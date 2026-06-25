import VideoCard from "./components/VideoCard";

export default function App() {
  const videos = [
    {
      id: 1,
      title: "Learn React in 30 Minutes",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      channelLogo:
        "https://img.magnific.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid&w=740&q=80",
      channelName: "Code Academy",
      views: "1.2M views",
      date: "2 weeks ago",
    },
    {
      id: 2,
      title: "Tailwind CSS Crash Course",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      channelLogo:
        "https://img.magnific.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid&w=740&q=80",
      channelName: "Web Dev",
      views: "999M views",
      date: "1 month ago",
    },
    {
      id: 3,
      title: "JavaScript Roadmap",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      channelLogo:
        "https://img.magnific.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid&w=740&q=80",
      channelName: "Programming Hub",
      views: "670K views",
      date: "5 days ago",
    },
    {
      id: 4,
      title: "Build a Portfolio Website",
      thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      channelLogo:
        "https://img.magnific.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid&w=740&q=80",
      channelName: "Frontend Master",
      views: "2M views",
      date: "3 months ago",
    },
    {
      id: 5,
      title: "Node JS Complete Guide",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      channelLogo:
        "https://img.magnific.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid&w=740&q=80",
      channelName: "Backend World",
      views: "900K views",
      date: "1 week ago",
    },
    {
      id: 6,
      title: "DSA for Beginners",
      thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      channelLogo:
        "https://img.magnific.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid&w=740&q=80",
      channelName: "Algo Master",
      views: "450K views",
      date: "40 years ago",
    },
  ];

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              thumbnail={video.thumbnail}
              title={video.title}
              channelLogo={video.channelLogo}
              channelName={video.channelName}
              views={video.views}
              date={video.date}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
