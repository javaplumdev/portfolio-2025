import {ComponentProps} from 'react';
import {Skeleton} from '@/components/ui/skeleton';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {cn} from '@/lib/utils';

type BaseAvatarProps = {
  isLoading?: boolean;
  src: string;
  alt: string;
  fallback: string;
  className?: string;
};

const BaseAvatar: React.FC<BaseAvatarProps & ComponentProps<typeof Avatar>> = (props) => {
  const {isLoading, src, alt, className, fallback} = props;

  if (isLoading) return <Skeleton className="h-12 w-12 rounded-full" />;

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};

export default BaseAvatar;
