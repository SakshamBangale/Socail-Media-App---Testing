'use client'
import { useState } from "react"
import './style.css'

export default function ProfilePage() {
  // State to track which post is open
  const [openPost, setOpenPost] = useState(null)

  // Sample posts data
  const posts = [
    { id: 1, img: 'https://picsum.photos/id/1011/500/500', caption: 'Enjoying the view!' },
    { id: 2, img: 'https://picsum.photos/id/1025/500/500', caption: 'Cute doggo!' },
    { id: 3, img: 'https://picsum.photos/id/1035/500/500', caption: 'Sunset vibes 🌅' },
    { id: 4, img: 'https://picsum.photos/id/1043/500/500', caption: 'Coffee time ☕' },
    { id: 5, img: 'https://picsum.photos/id/1059/500/500', caption: 'Mountains calling' },
    { id: 6, img: 'https://picsum.photos/id/1062/500/500', caption: 'City lights ✨' },
    { id: 7, img: 'https://picsum.photos/id/1074/500/500', caption: 'Beach day 🏖️' },
    { id: 8, img: 'https://picsum.photos/id/1084/500/500', caption: 'Hiking adventures' },
    { id: 9, img: 'https://picsum.photos/id/1080/500/500', caption: 'Street photography' }
  ]

  return (
    <div className="mainpage">

      {/* Cover Banner */}
      <div className="cover"></div>

      {/* Profile Card */}
      <div className="profileCard">
        <img
          src="https://i.pravatar.cc/150?img=65"
          className="avatar"
          alt="profile"
        />
        <div className="userInfo">
          <h2>Saksham</h2>
          <p className="username">@saksham_dev</p>
          <div className="stats">
            <div><strong>1.2K</strong><p>Followers</p></div>
            <div><strong>540</strong><p>Following</p></div>
            <div><strong>86</strong><p>Posts</p></div>
          </div>
          <button className="followBtn">Follow</button>
        </div>
      </div>

      {/* Bio */}
      <div className="bio">
        🚀 Frontend Developer | UI Lover
        <br />
        💡 Building modern web experiences
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 mt-4">
        {posts.map(post => (
          <div
            key={post.id}
            className="post w-full h-32 sm:h-40 cursor-pointer rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            onClick={() => setOpenPost(post)}
            style={{ backgroundImage: `url(${post.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>
        ))}
      </div>

      {/* Modal */}
      {openPost && (
        <div
          className="modalBackdrop fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setOpenPost(null)}
        >
          <div
            className="modalContent bg-white rounded-2xl shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
              onClick={() => setOpenPost(null)}
            >
              &times;
            </button>

            {/* Post Image */}
            <img
              src={openPost.img}
              className="modalImage w-full h-64 sm:h-80 object-cover rounded-t-2xl"
              alt={openPost.caption}
            />

            {/* Post Info */}
            <div className="modalInfo p-4">
              {openPost.caption && (
                <p className="text-gray-900 text-sm leading-relaxed mb-3 whitespace-pre-wrap">{openPost.caption}</p>
              )}

              {/* Actions */}
              <div className="flex justify-around items-center text-gray-600 font-medium text-sm mt-3 border-t border-gray-200 pt-2">
                <button className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-gray-100 hover:text-red-500 transition-all duration-200 active:scale-95">
                  ❤️ Like
                </button>

                <button className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-gray-100 hover:text-blue-500 transition-all duration-200 active:scale-95">
                  💬 Comment
                </button>

                <button className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-gray-100 hover:text-green-500 transition-all duration-200 active:scale-95">
                  🔄 Share
                </button>

                <button className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-gray-100 hover:text-yellow-500 transition-all duration-200 active:scale-95">
                  💾 Save
                </button>
              </div>

            </div>
          </div>
        </div>
      )}


    </div>
  )
}
