interface ISectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: ISectionHeaderProps) => {
  return (
    <div className='flex justify-between items-end'>
      <div className='text-primary text-[25px] font-medium'>{title}</div>
      <hr className='border-primary flex-1 border-b-2' />
    </div>
  );
};

export default SectionHeader;
