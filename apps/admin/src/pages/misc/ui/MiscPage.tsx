import IntroductionButton from "@/features/misc/ui/IntroductionButton";

const MiscPage = () => {
  return (
    <div>
      <div className='flex flex-col items-start gap-4'>
        <h1 className='text-2xl font-bold'>Misc Page</h1>
        <div className='flex items-center gap-2'>
          <IntroductionButton />
        </div>
      </div>
    </div>
  );
};

export default MiscPage;
