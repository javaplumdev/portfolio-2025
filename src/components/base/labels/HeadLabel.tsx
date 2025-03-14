import {Skeleton} from '@/components/ui/skeleton';
import {cn} from '@/lib/utils';

type HeadLabelProps = {
  children: Children;
  isLoading?: boolean;
  className?: string;
};

const HeadLabel: React.FC<HeadLabelProps> = (props) => {
  const {children, isLoading, className, ...rest} = props;

  if (isLoading) return <Skeleton className="h-4 w-[250px]" />;

  return (
    <span className={cn('head__label text-base-color font-extrabold text-6xl lg:text-8xl', className)} {...rest}>
      {children}
    </span>
  );
};

export default HeadLabel;
