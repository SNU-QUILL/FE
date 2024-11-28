import { Link } from "react-router-dom";

const MobileFooter = () => {
  return (
    <div className='flex flex-col gap-6 bg-primary text-white p-4'>
      <div className='grid grid-cols-2'>
        <div className='flex flex-col gap-2'>
          <p className='text-lg font-medium'>About SNU QUILL</p>
          <hr />
          <div className='flex flex-col gap-2'>
            <Link to='/introduction'>Who We Are</Link>
            <Link to='/mission'>Our Mission</Link>
            <Link to='/members'>Meet the Staff</Link>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-lg font-medium'>Contact Us</p>
          <hr />
          <div className='flex flex-col gap-2'>
            <Link to='/'>Feedback & Complains</Link>
            <Link to='/'>Advertise with Us</Link>
            <Link to='/'>Letter to the Editor</Link>
          </div>
        </div>
      </div>
      <p className='font-light whitespace-pre-wrap'>
        {
          "1 Gwanak-ro, Gwanak-gu, Seoul\nCopyright 2023 The SNU QUILL.\nAll rights reserved.\nmail to snuquill@gmail.com"
        }
      </p>
    </div>
  );
};
export default MobileFooter;
