import {Skeleton} from '@/components/ui/skeleton';

type HeadLabelProps = {
  label: string;
  isLoading?: boolean;
};

const SubLabel: React.FC<HeadLabelProps> = (props) => {
  const {label, isLoading} = props;

  if (isLoading) return <Skeleton className="h-4 w-[350px]" />;

  return <p className="text-xl text-muted-foreground">{label}</p>;
};

export default SubLabel;
