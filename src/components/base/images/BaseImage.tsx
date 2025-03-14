import {cn} from '@/lib/utils';

type BaseImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

const BaseImage: React.FC<BaseImageProps> = (props) => {
  const {src, alt = '', className} = props;

  return <img src={src} alt={alt} draggable="false" className={cn(className)} />;
};

export default BaseImage;
