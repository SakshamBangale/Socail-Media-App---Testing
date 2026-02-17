'use client'
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import './globals.css';

export default function HomePage() {

  const posts = [
    {
      id: 1,
      user: 'Alex Johnson',
      username: '@alexj',
      avatar: 'https://i.pravatar.cc/150?img=65',
      content: 'Just deployed my new portfolio! 🚀 #webdev #portfolio',
      media: { type: 'image', src: 'https://picsum.photos/id/1011/600/400' },
      timestamp: '2:30 PM · Feb 17, 2026',
    },
    {
      id: 2,
      user: 'Sophie Lee',
      username: '@sophie_lee',
      avatar: 'https://i.pravatar.cc/150?img=66',
      content: 'Loved this sunset 🌅',
      media: { type: 'image', src: 'https://picsum.photos/id/1025/600/400' },
      timestamp: '1:15 PM · Feb 17, 2026',
    },
    {
      id: 3,
      user: 'Richard Michaels',
      username: '@richard_m',
      avatar: 'https://i.pravatar.cc/150?img=67',
      content: 'Check out this CSS animation I made!',
      media: { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', poster: 'https://picsum.photos/id/1035/600/400' },
      timestamp: '12:00 PM · Feb 17, 2026',
    },
  ];

  return (
     <div className="home-container">
    



      <div className="feed">
        {posts.map(post => (
          <div key={post.id} className="post" onClick={() => setOpenPost(post)}>
            <div className="post-header">
              <div className="user-info">
                <img src={post.avatar} className="avatar" />
                <div>
                  <strong>{post.user}</strong>
                  <p>{post.username}</p>
                </div>
              </div>
              <div className="post-menu">⋯</div>
            </div>

            {post.content && <p className="post-content">{post.content}</p>}

            {post.media && post.media.type === 'image' && (
              <img src={post.media.src} className="post-media" />
            )}
            {post.media && post.media.type === 'video' && (
              <video controls poster={post.media.poster} className="post-media">
                <source src={post.media.src} type="video/mp4" />
              </video>
            )}

            <div className="post-actions">
              <button>❤️ Like</button>
              <button>💬 Comment</button>
              <button>🔄 Share</button>
              <button>💾 Save</button>
            </div>

            <p className="timestamp">{post.timestamp}</p>
          </div>
        ))}
      </div>

      {openPost && (
        <div className="modal-backdrop" onClick={() => setOpenPost(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpenPost(null)}>✕</button>
            {openPost.media && openPost.media.type === 'image' && <img src={openPost.media.src} />}
            {openPost.media && openPost.media.type === 'video' && (
              <video controls poster={openPost.media.poster}>
                <source src={openPost.media.src} type="video/mp4" />
              </video>
            )}
            <p>{openPost.content}</p>
            <div className="post-actions">
              <button>❤️ Like</button>
              <button>💬 Comment</button>
              <button>🔄 Share</button>
              <button>💾 Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
