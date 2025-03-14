import {Suspense, lazy, ComponentType} from 'react';
import {Skeleton} from '@/components/ui/skeleton';

// fa icon as default
const getIconComponent = (iconName: string): ComponentType<{size?: number; color?: string}> => {
  return lazy(() =>
    import('react-icons/tb').then((module) => {
      const IconComponent = module[iconName as keyof typeof module] as ComponentType<{size?: number; color?: string}>;
      return {default: IconComponent};
    })
  );
};

type BaseIconProps = {
  iconName: string;
  size?: number;
  color?: string;
};

const BaseIcon = ({iconName, size = 32, color = 'grey'}: BaseIconProps) => {
  const IconComponent = getIconComponent(iconName);

  return (
    <Suspense fallback={<Skeleton className="h-[24px] w-[24px]" />}>
      <IconComponent size={size} color={color} />
    </Suspense>
  );
};

export default BaseIcon;
