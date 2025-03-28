import { Styles } from '../utils/Style';
import { tech } from '../constant';
import Tilt from 'react-parallax-tilt';

const Skill = () => {
  return (
    <section id='skill' className='lg:mt-20 px-6 py-8'>
      <div className='text-center'>
        <h2 className={`${Styles.sectionHeadText} text-green-700`}>My Tech Stack</h2>
        <p className='text-gray-600 mt-2'>Tools & Technologies I work with</p>
        <hr className='w-[120px] mx-auto mt-3 border-green-600' />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mt-8'>
        {tech.map((item) => (
          <Tilt 
            key={item.name} 
            className="rounded-xl transition-transform duration-300 hover:scale-105"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
          >
            <div className='flex flex-col items-center justify-center p-5 h-[140px] w-[140px] bg-white/20 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg hover:shadow-green-400 transition-all'>
              <img src={item.icons} alt={item.name} className='w-[55px] h-[55px]' />
              <p className='text-green-700 text-sm font-semibold mt-2'>{item.name}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skill;
