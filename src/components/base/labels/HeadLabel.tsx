import {Skeleton} from '@/components/ui/skeleton';

type HeadLabelProps = {
  label: string;
  isLoading?: boolean;
};

const HeadLabel: React.FC<HeadLabelProps> = (props) => {
  const {label, isLoading} = props;

  if (isLoading) return <Skeleton className="h-4 w-[250px]" />;

  return <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{label}</h1>;
};

export default HeadLabel;
