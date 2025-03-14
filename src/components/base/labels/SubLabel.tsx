import {cn} from '@/lib/utils';
import {Skeleton} from '@/components/ui/skeleton';

type HeadLabelProps = {
  children: Children;
  isLoading?: boolean;
  className?: string;
};

const SubLabel: React.FC<HeadLabelProps> = (props) => {
  const {children, isLoading, className} = props;

  if (isLoading) return <Skeleton className="h-4 w-[350px]" />;

  return <p className={cn('text-muted-foreground text-md', className)}>{children}</p>;
};

export default SubLabel;
