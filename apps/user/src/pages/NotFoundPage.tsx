import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-200px)] gap-8'>
      <h1 className='text-8xl font-bold text-primary'>404</h1>
      <div className='text-center'>
        <p className='text-2xl text-text mb-2'>Page Not Found</p>
        <p className='text-text'>
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Link
        to='/home'
        className='px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity'
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
