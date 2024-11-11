import phoneimgA from '../images/667e85887779e31a7bb1ad72_mockup-home.webp';
import phoneimgB from '../images/667e858db6f503ce91e50e64_mockup-squad.webp';

export default function Hero() {
  return (
    <div className='flex flex-col items-center p-whitespacex'>
      <h1 className='text-center text-5xl font-serif mb-7'>
        One global plan. <br /> No hassle.
      </h1>
      <p className='text-center text-accent mb-7 text-lg'>
        Enjoy unlimited global service for $69/mo. No roaming fees, or headaches.
      </p>
      <div className="relative min-h-fit p-whitespace w-full">
        <div className='w-full h-full bg-indigo-300 rounded-full blur-3xl absolute scale-75'></div>
        <img src={phoneimgA} alt="Phone mockup" className="w-[50%] -rotate-12 inline-block" />
        <img src={phoneimgB} alt="Phone mockup" className="w-[50%] rotate-12 inline-block" />
        </div>


      <div>
        
      </div>
    </div>
  );
}

