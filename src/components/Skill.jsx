import { Styles } from '../utils/Style';
import { tech} from '../constant';
const Skill = () => {
  return (
    <div id='skill' className='lg:mt-20'>
      <div className='flex flex-col lg:flex-row items-center lg:pl-5 justify-center pt-3' >
                <span className={Styles.sectionHeadText}>
                    Tool's And Tech
                </span>       
        </div>
        <div className='flex flex-col items-center'>
                <hr className='lg:w-[35%] w-full mx-5' />
            </div>
        <div className='flex flex-wrap justify-center items-center'>
                {tech.map((tech) => (
                    <div
                        key={tech.name}
                        className='m-4 mt-5 h-[100px] w-[100px] rounded-3xl shadow-2xl border-[1px] border-black
                    hover:shadow-green-300 flex flex-col justify-center items-center'
                    >
                        <img src={tech.icons} alt={tech.name} className='p-2 w-[60px] h-[60px] ' />
                        <div className="flex text-green-600 justify-center mt-2">
                            {tech.name}
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Skill
