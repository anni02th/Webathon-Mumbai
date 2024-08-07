import React, { useState } from 'react';
import './Page5.css'; // Ensure to create this CSS file for modal styling

const articles = [
  {
    image: 'Rectangle 22.png',
    date: '12 Aug 2023',
    title: 'Many University Graduates Immediately Work',
    summary: 'Discover how recent graduates from our engineering programs are finding immediate employment and making an impact in their fields.',
    details: 'Our rigorous academic programs and industry connections have paved the way for our graduates to enter the workforce with confidence. The support and training provided by our faculty have been instrumental in securing immediate employment for many of our students.'
  },
  {
    image: 'Rectangle 22-1.png',
    date: '12 Dec 2023',
    title: 'Tips to Avoid Laziness in College',
    summary: 'Learn effective strategies to stay motivated and avoid procrastination during your college years.',
    details: 'Balancing academic responsibilities with extracurricular activities can be challenging. In this article, we share practical tips and advice on how to manage your time effectively, stay organized, and keep your motivation high throughout your college journey.'
  },
  {
    image: 'Rectangle 22-2.png',
    date: '12 Nov 2023',
    title: '10 Recommendations for Great College Places',
    summary: 'Explore our top recommendations for places around campus that will enhance your college experience.',
    details: 'From study spots to relaxation areas, we’ve compiled a list of the best places on and near campus where you can unwind, collaborate with peers, or simply enjoy your time between classes. Discover hidden gems and popular hangouts that will enrich your college life.'
  }
];

const Page6 = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleOpenModal = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className='w-[90%] lg:w-[80%] m-auto  flex flex-col items-center justify-center'>
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center lg:justify-between items-center mb-10 text-center lg:text-left'>
        <h3 className='text-3xl lg:text-4xl font-bold text-Dblue'>
          Check out our Latest Articles and Knowledge
        </h3>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
<<<<<<< HEAD
          <div className="bg-white rounded-3xl hover:shadow-xl transition duration-300 hover:scale-95">
            <img
              src="Rectangle 22.png"
              alt="Graduation"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <div className='p-6'>
              <button className="bg-Dblue text-white py-1 px-6 rounded-full mb-4 hover:bg-Dbblue transition duration-200 w-full md:w-auto">
                Insight
              </button>
              <h2 className='text-black font-medium'>12 Aug 2023</h2>
              <h3 className="text-Dblue text-lg lg:text-xl font-bold">Many university graduates immediately work</h3>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
=======
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl hover:shadow-xl transition duration-300 hover:scale-95 cursor-pointer"
              onClick={() => handleOpenModal(article)}
            >
              <img
                src={article.image}
                alt="Article"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <div className='p-6'>
                <button className="bg-Dblue text-white py-1 px-6 rounded-full mb-4 hover:bg-Dbblue transition duration-200 w-full md:w-auto">
                  {index === 0 ? 'Insight' : index === 1 ? 'Tips' : 'Recommend'}
                </button>
                <h2 className='text-black font-medium'>{article.date}</h2>
                <h3 className="text-Dblue text-lg lg:text-xl font-bold">{article.title}</h3>
                <p className="text-gray-700 mt-2">
                  {article.summary}
                </p>
              </div>
>>>>>>> 93df462bd321050a744bdd6629e3291a5ebfe37b
            </div>
          ))}
        </div>
      </div>

      {selectedArticle && (
        <div className='modal-overlay z-1000' onClick={handleCloseModal}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <h2 className='text-2xl font-bold'>{selectedArticle.title}</h2>
            <p className='text-lg mt-4'>{selectedArticle.details}</p>
            <button className='mt-4 bg-Dblue text-white py-2 px-4 rounded-full' onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page6;
