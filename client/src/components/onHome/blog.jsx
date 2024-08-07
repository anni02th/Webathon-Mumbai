import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header';
import Footer from '../footer';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/forum/posts');
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div >
      <Header />
      <main className='flex-grow h-auto p-4'>
        <h1 className='text-2xl font-bold'>Blog</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <ul>
              {posts.sort((a, b) => b.likes - a.likes).map((post) => (
                <li key={post._id} className='mb-4'>
                  <div className="bg-white rounded-3xl hover:shadow-xl transition duration-300 hover:scale-95 cursor-pointer">
                    <div className='p-6'>
                      <img
                        src={post.image}
                        alt="Post Image"
                        className="w-full h-48 object-cover mb-4"
                      />
                      <h2 className='text-black font-medium'>{post.date}</h2>
                      <h3 className="text-Dblue text-lg lg:text-xl font-bold">{post.heading}</h3>
                      <p className="text-gray-700 mt-2">
                        {post.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
      <Footer className="self-end"/>
    </div>
  );
};

export default Blog;