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
          <div className='font-medium'>About SNU QUILL</div>
          <div>
            <div>Who We Are</div>
            <div>Our Mission</div>
            <div>Meet the Staff</div>
          </div>
        </div>

        <div className='flex justify-center gap-20'>
          <div className='font-medium'>Contact Us</div>
          <div>
            <div>Feedback & Complains</div>
            <div>Advertise with Us</div>
            <div>Letter to the Editor</div>
          </div>
        </div>
        <div className='whitespace-pre-wrap'>
          {
            "Gwanak-ro, Gwanak-gu, Seoul\nCopyright 2023 The SNU QUILL.\nAll rights reserved.\nmail to snuquill@gmail.com"
          }
        </div>
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
