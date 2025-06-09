import clsx from 'clsx';

interface Props {
  name: string;
  className?: string;
}
export const ImagePlaceholder = ({ name, className }: Props) => {
  return (
    <div
      className={clsx(
        `w-[30px] h-[30px] rounded-full bg-primary flex items-center justify-center`,
        className
      )}
    >
      <p className="text-sm font-medium text-white text-center uppercase">
        {name.substring(0, 2)}
      </p>
    </div>
  );
};
