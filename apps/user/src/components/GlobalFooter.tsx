import { Button } from "@repo/ui";
import { Link } from "react-router-dom";

const GlobalFooter = () => {
  return (
    <footer className='w-full bg-primary flex flex-col items-center text-white font-light text-lg'>
      <div className='grid grid-cols-3 w-full py-10'>
        <div className='m-auto flex justify-center gap-20'>
          <p className='font-medium'>About SNU QUILL</p>
          <div className='font-light'>
            <Link to='/introduction' className='hover:animate-hover-opacity'>
              <p>Who We Are</p>
            </Link>
            <Link to='/mission' className='hover:animate-hover-opacity'>
              <p>Our Mission</p>
            </Link>
            <Link to='/members' className='hover:animate-hover-opacity'>
              <p>Meet the Staff</p>
            </Link>
          </div>
        </div>

        <div className='m-auto flex justify-center gap-20'>
          <p className='font-medium'>Contact Us</p>
          <div className='font-light'>
            <p>Feedback & Complains</p>
            <p>Advertise with Us</p>
            <p>Letter to the Editor</p>
          </div>
        </div>
        <p className='m-auto font-light whitespace-pre-wrap'>
          {
            "Gwanak-ro, Gwanak-gu, Seoul\nCopyright 2023 The SNU QUILL.\nAll rights reserved.\nmail to snuquill@gmail.com"
          }
        </p>
      </div>
      <Link to='/'>
        <Button
          variant='outline'
          className='bg-primary mb-10 text-xl font-medium tracking-[2.8px] px-12 py-7'
        >
          The SNU QUILL
        </Button>
      </Link>
    </footer>
  );
};

export default GlobalFooter;
