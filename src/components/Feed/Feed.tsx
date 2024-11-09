import { useEffect, useState } from 'react';
import axios from 'axios';
import CreatePost from './CreatePost';
import Post from './Post';
import { FeedItem } from './interfaces/Feed-interface.interface';

export default function Feed() {
  const [posts, setPosts] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyYjRmZjk3LTQzY2QtNGZiMC04YjFmLWQ2NTZmNDFlNjcyMSIsImlhdCI6MTczMTEyODcyOCwiZXhwIjoxNzMxMTU3NTI4fQ.bvUIXq0drxCXMX3ytqTVrLTCpnnKep2fHp_VJjld4vQ";  // Sustituye por tu Bearer Token

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/post', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto py-4 px-4">
      <CreatePost />
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}
