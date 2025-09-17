import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

const teamData = [
  {
    img: '/assets/images/team/1.jpg',
    name: 'Car Engine Plug',
    role: 'Engine Expert',
  },
  {
    img: '/assets/images/team/2.jpg',
    name: 'Car Engine Plug',
    role: 'Engine Expert',
  },
  {
    img: '/assets/images/team/3.jpg',
    name: 'Car Engine Plug',
    role: 'Engine Expert',
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-red-500 font-semibold mb-2">Team</h2>
        <h3 className="text-xl text-gray-600 mb-4">Meet Our Team</h3>
        <p className="text-gray-500 max-w-2xl mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamData.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden text-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="font-semibold text-lg">{member.name}</h4>
              <p className="text-gray-500 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <FaFacebookF className="text-red-500 hover:text-red-700 cursor-pointer" />
                <FaTwitter className="text-red-500 hover:text-red-700 cursor-pointer" />
                <FaLinkedinIn className="text-red-500 hover:text-red-700 cursor-pointer" />
                <FaInstagram className="text-red-500 hover:text-red-700 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
