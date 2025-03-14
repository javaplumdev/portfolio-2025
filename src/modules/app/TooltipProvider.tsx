import {TooltipProvider as TooltipProviderComp} from '@/components/ui/tooltip';

const TooltipProvider: React.FC<{children: Children}> = (props) => {
  const {children} = props;

  return <TooltipProviderComp>{children}</TooltipProviderComp>;
};

export default TooltipProvider;
