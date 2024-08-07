import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header';
import Footer from './footer';

const AlumniForum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    content: '',
    image: null,
    date: new Date().toISOString(),
    heading: '',
    body: '',
  });
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

  const handleNewPostChange = (event) => {
    const { name, value } = event.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleImageChange = (event) => {
    setNewPost((prevPost) => ({ ...prevPost, image: event.target.files[0] }));
  };

  const handleAddPost = async () => {
    try {
      const formData = new FormData();
      formData.append('content', newPost.content);
      formData.append('image', newPost.image);
      formData.append('date', newPost.date);
      formData.append('heading', newPost.heading);
      formData.append('body', newPost.body);

      const response = await axios.post('/api/forum/post', formData);
      setPosts([...posts, response.data]);
      setNewPost({
        content: '',
        image: null,
        date: new Date().toISOString(),
        heading: '',
        body: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLikePost = async (postId) => {
    try {
      await axios.post(`/api/forum/post/${postId}/like`);
      const updatedPosts = posts.map((post) => {
        if (post._id === postId) {
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      });
      setPosts(updatedPosts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div >
      <Header />
      <main className='flex-grow h-auto p-4'>
        <h1 className='text-2xl font-bold'>Alumni Forum</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <form>
              <input
                type="text"
                name="heading"
                value={newPost.heading}
                onChange={handleNewPostChange}
                placeholder="Heading"
                className='w-full p-2 mb-4'
              />
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                className='w-full p-2 mb-4'
              />
              <input
                type="datetime-local"
                name="date"
                value={newPost.date}
                onChange={handleNewPostChange}
                className='w-full p-2 mb-4'
              />
              <textarea
                name="body"
                value={newPost.body}
                onChange={handleNewPostChange}
                placeholder="Body"
                className='w-full p-2 mb-4'
              />
              <button
                onClick={handleAddPost}
                className='px-3 bg-Dbblue rounded text-white'
              >
                Add Post
              </button>
            </form>
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
                      <button className="bg-Dblue text-white py-1 px-6 rounded-full mb-4 hover:bg-Dbblue transition duration-200 w-full md:w-auto">
                        Post
                      </button>
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

export default AlumniForum;