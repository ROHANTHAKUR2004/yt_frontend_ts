export default function VideoDashboard() {
  const videos = [
    {
      id: 1,
      title: "Building a Modern Web App with Next.js",
      thumbnail: "data:image/jpeg;base64,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",
      channel: "TechTutorials",
      channelAvatar: "/placeholder.svg?height=32&width=32",
      views: "1.2M",
      uploadedAt: "2 weeks ago"
    },
    {
      id: 2,
      title: "10 CSS Tricks You Didn't Know",
      thumbnail: "data:image/jpeg;base64,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",
      channel: "CSSMaster",
      channelAvatar: "/placeholder.svg?height=32&width=32",
      views: "800K",
      uploadedAt: "3 days ago"
    },
    {
      id: 3,
      title: "JavaScript ES2023 New Features Explained",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "JSEnthusiast",
      channelAvatar: "/placeholder.svg?height=32&width=32",
      views: "500K",
      uploadedAt: "1 week ago"
    },
    {
      id: 4,
      title: "Responsive Design Best Practices",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "WebDesignPro",
      channelAvatar: "/placeholder.svg?height=32&width=32",
      views: "350K",
      uploadedAt: "5 days ago"
    },
    {
      id: 5,
      title: "Introduction to React Hooks",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "ReactMaster",
      channelAvatar: "/placeholder.svg?height=32&width=32",
      views: "1.5M",
      uploadedAt: "3 weeks ago"
    },
    {
      id: 6,
      title: "Building a REST API with Node.js",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "BackendDev",
      channelAvatar: "/placeholder.svg?height=32&width=32",
      views: "700K",
      uploadedAt: "1 month ago"
    }
  ]

  return (
    <div className="container mt-8 mx-auto px-4 py-8">
      <h1 className="text-2xl text-red-700 font-bold mb-6">Recommended Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
        {videos.map((video) => (
          <div key={video.id} className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
            <img
              src={video.thumbnail}
              alt={`Thumbnail for ${video.title}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2">{video.title}</h2>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                  <img
                    src={video.channelAvatar}
                    alt={`${video.channel} avatar`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-white">{video.channel}</p>
                  <p className="text-xs text-white">{video.views} views • {video.uploadedAt}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}