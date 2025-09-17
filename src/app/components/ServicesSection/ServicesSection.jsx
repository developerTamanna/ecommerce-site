import { FiArrowRight } from 'react-icons/fi';

const ServicesSection = () => {
  const data = [
    {
      _id: '635a0c0b64a6d231228942ae',
      title: 'Engine Oil Change',
      img: 'https://i.ibb.co/T2cpBd5/888.jpg',
      price: '20.00',
    },
    {
      _id: '635a0c0b64a6d231228942af',
      title: 'Battery Charge',
      img: 'https://i.ibb.co/ydCbDN3/5555.jpg',
      price: '20.00',
    },
    {
      _id: '635b591a1dafe382a9da8c96',
      title: 'Full car Repair',
      img: 'https://i.ibb.co/R6Z2nFM/55.jpg',
      price: '200.00',
    },
    {
      _id: '635b5afc1dafe382a9da8c98',
      title: 'Engine Repair',
      img: 'https://i.ibb.co/5MvmD2g/88.jpg',
      price: '150.00',
    },
    {
      _id: '635b5b691dafe382a9da8c99',
      title: 'Automatic Services',
      img: 'https://i.ibb.co/wh7t3N3/555.jpg',
      price: '30.00',
    },
    {
      _id: '635b5ba51dafe382a9da8c9a',
      title: 'Electrical System',
      img: 'https://i.ibb.co/KzCG8qr/8888.jpg',
      price: '20.00',
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      {/* Titles */}
      <div className="text-center mb-12">
        <h2 className="text-red-500 font-semibold mb-2">Service</h2>
        <h3 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
          Our Service Area
        </h3>
        <p className="text-gray-500 max-w-2xl mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {data.map((item) => (
          <div
            key={item._id}
            className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex justify-between items-center">
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className=" text-red-500 font-semibold">
                  {' '}
                  price : ${item.price}
                </p>
              </div>
              <FiArrowRight className="text-red-500 text-xl" />
            </div>
          </div>
        ))}
      </div>

      {/* More Services Button */}
      <div className="text-center">
        <button className="bg-white text-red-500 px-6 py-3 rounded-full border-2 border-red-500 font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
          More Services
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
