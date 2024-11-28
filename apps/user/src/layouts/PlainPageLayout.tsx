interface IPlainPageLayoutProps {
  title: string;
  description: string;
}

const PlainPageLayout = ({ title, description }: IPlainPageLayoutProps) => {
  return (
    <div className='flex flex-col p-[150px_0px_250px_0px] justify-center items-center'>
      <p className='text-primary text-xl font-semibold tracking-[1px]'>{title}</p>
      <hr className='w-[30px] border-b-2 my-[30px] border-primary' />
      <p className='text-gray-600 leading-[125%] tracking-[0.03rem] text-center w-full xl:w-[1000px] xl:text-2xl'>
        {description}
      </p>
    </div>
  );
};
export default PlainPageLayout;
