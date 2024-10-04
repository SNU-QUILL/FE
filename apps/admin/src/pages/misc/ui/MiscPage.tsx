import IntroductionButton from "@/features/misc/ui/IntroductionButton";

const MiscPage = () => {
  return (
    <div>
      <div className='flex flex-col items-start gap-4'>
        <div className='text-4xl font-bold text-primary'>Misc</div>
        <div className='flex items-center gap-2'>
          <IntroductionButton />
        </div>
      </div>
    </div>
  );
};

export default MiscPage;
