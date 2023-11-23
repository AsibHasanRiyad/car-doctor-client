import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero mt-24 mb-32">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
            <h1 className=' text-xl font-semibold text-[#FF3811]'>About Us</h1>
          <h1 className="text-4xl font-bold">We are qualified & of <br /> experience in this field</h1>
          <p className="py-6 text-base text-[#737373]">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
          </p>
          <p className="py-2 text-base text-[#737373]">
          the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
          </p>
          <button className="text-xs px-1 py-1 md:px-3 md:py-2 md:text-base rounded bg-[#FF3811] text-white ">
              Get More Info
            </button>
        </div>
        <div className=" card flex-shrink-0 w-full md:w-3/4 lg:w-1/2">
          <div className=' relative'>
          <img src={person} className='w-3/4 h-full' alt="" />
          <img src={parts} className=' absolute top-1/2 left-1/2 lg:left-1/2 w-1/2 h-[80%] border-8 border-white rounded-xl' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
