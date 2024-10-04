import IntroductionButton from "@/features/misc/ui/IntroductionButton";
import MissionButton from "@/features/misc/ui/MissionButton";

const MiscPage = () => {
  return (
    <div>
      <div className='flex flex-col items-start gap-4'>
        <div className='text-4xl font-bold text-primary'>Misc</div>
        <div className='flex flex-col items-start gap-4'>
          <IntroductionButton />
          <MissionButton />
        </div>
      </div>
    </div>
  );
};

export default MiscPage;
