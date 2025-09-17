import { FiClock, FiMapPin, FiPhone } from 'react-icons/fi';

const InfoSection = () => {
  const infoData = [
    {
      icon: <FiClock className="text-red-500 text-2xl" />,
      title: 'We are open',
      text: 'Monday - Friday 7:00 am - 9:00 pm',
    },
    {
      icon: <FiPhone className="text-red-500 text-2xl" />,
      title: 'Have a question?',
      text: '+2546 251 2658',
    },
    {
      icon: <FiMapPin className="text-red-500 text-2xl" />,
      title: 'Need a repair?',
      text: 'Our address Liza Street, New York',
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="bg-black grid grid-cols-1 md:grid-cols-3 gap-8 p-6 rounded-lg  h-80">
        {infoData.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="flex-shrink-0">{item.icon}</div>
            <div className="text-white">
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-gray-300">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
