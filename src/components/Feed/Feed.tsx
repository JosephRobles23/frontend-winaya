import { useEffect, useState } from 'react';
import axios from 'axios';
import CreatePost from './CreatePost';
import Post from './Post';
import { FeedItem } from './interfaces/Feed-interface.interface';

export default function Feed() {
  const [posts, setPosts] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  const token = "";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://niqqau3ndt.us-east-2.awsapprunner.com/api/post', {
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
