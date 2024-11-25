import { Button } from "@repo/ui";
import { useNavigate } from "react-router-dom";

const GlobalFooter = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <footer className='w-full bg-primary flex flex-col items-center text-white font-light text-lg'>
      <div className='grid grid-cols-3 w-full py-10'>
        <div className='flex justify-center gap-20'>
          <p className='font-medium'>About SNU QUILL</p>
          <div className='font-light'>
            <p>Who We Are</p>
            <p>Our Mission</p>
            <p>Meet the Staff</p>
          </div>
        </div>

        <div className='flex justify-center gap-20'>
          <p className='font-medium'>Contact Us</p>
          <div className='font-light'>
            <p>Feedback & Complains</p>
            <p>Advertise with Us</p>
            <p>Letter to the Editor</p>
          </div>
        </div>
        <p className='font-light whitespace-pre-wrap'>
          {
            "Gwanak-ro, Gwanak-gu, Seoul\nCopyright 2023 The SNU QUILL.\nAll rights reserved.\nmail to snuquill@gmail.com"
          }
        </p>
      </div>
      <Button
        variant='outline'
        className='bg-primary mb-10 text-xl font-medium tracking-[2.8px] px-12 py-7'
        onClick={goToHome}
      >
        The SNU QUILL
      </Button>
    </footer>
  );
};

export default GlobalFooter;
