import Layout from '../component/layout/layout.jsx';
import LoadingSpinner from '../skeleton/LoadingSpinner.jsx';
import { useHackathonsStore } from '../store/Hackathons.store.jsx';
import { useEffect } from 'react';

const Home = () => {
  const { hackathons, setHackathons, Loading } = useHackathonsStore();

  useEffect(() => {
    setHackathons();
  }, []);

  return (
    <Layout>
      {!Loading ? (
        <LoadingSpinner message="Loading hackathons..." />
      ) : (
        <div className="bg-gray-50 text-gray-800">
          {/* Hero Section */}
          <section className="bg-blue-900 text-white py-20 px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover & Track the Best Events</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Your one-stop platform to find hackathons, contests, jobs, and meetups tailored for you.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-blue-900 font-semibold rounded hover:bg-gray-200 transition">
              Explore Events
            </button>
          </section>

          {/* Events Grid */}
          <section className="py-16 px-6 max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">Upcoming Events</h2>
            <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
              {hackathons.map((event) => (
                <div key={event._id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
                  <div className="h-40 bg-gray-200 rounded mb-4 flex items-center justify-center text-sm text-gray-500">
                    {event.tags[0] || 'Hackathon'}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {new Date(event.startDate).toLocaleDateString()} • {event.mode}
                  </p>
                  <p className="text-sm text-gray-700 line-clamp-3">{event.description}</p>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-blue-700 hover:underline text-sm"
                  >
                    Learn more →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Tagline */}
          <section className="bg-white py-12 px-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Why use EventHub?</h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              We centralize the best opportunities for developers, designers, and creators—so you never miss out.
            </p>
          </section>
        </div>
      )}
    </Layout>
  );
};

export default Home;
