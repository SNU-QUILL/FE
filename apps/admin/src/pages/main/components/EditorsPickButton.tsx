import EditButton from "@/components/EditButton";

interface IEditorsPickButtonProps {
  onClick: () => void;
  title: string;
  category: string;
}

const EditorsPickButton = ({ onClick, title, category }: IEditorsPickButtonProps) => {
  return (
    <EditButton variant='secondary' className='h-36 w-60' onClick={onClick}>
      <div className='text-ellipsis overflow-hidden whitespace-nowrap'>
        <div className='text-[15px] font-[450] text-start text-primary'>{category}</div>
        <div className='mt-[15px] text-xl font-[450] whitespace-normal line-clamp-3 text-start'>
          {title}
        </div>
      </div>
    </EditButton>
  );
};

export default EditorsPickButton;
