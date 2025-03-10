import {ComponentProps} from 'react';
import {Skeleton} from '../ui/skeleton';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';

type BaseAvatarProps = {
  isLoading?: boolean;
  src: string;
  alt: string;
  fallback: string;
} & ComponentProps<typeof Avatar>;

const BaseAvatar: React.FC<BaseAvatarProps> = (props) => {
  const {isLoading, src, alt, fallback} = props;

  if (isLoading) return <Skeleton className="h-12 w-12 rounded-full" />;

  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};

export default BaseAvatar;
