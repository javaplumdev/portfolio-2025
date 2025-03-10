import React, {ComponentProps} from 'react';
import {Link} from 'react-router';
import {Button} from '@/components/ui/button';

type BaseButtonProps = {
  link?: string;
  children: Children;
  isLoading?: boolean;
  icon?: React.ReactNode;
} & ComponentProps<typeof Button>;

const BaseButton: React.FC<BaseButtonProps> = (props) => {
  const {children, link, icon, isLoading, ...rest} = props;

  const content = (
    <React.Fragment>
      {icon && icon} {children}
    </React.Fragment>
  );

  if (link) {
    return (
      <Button asChild disabled={isLoading} {...rest}>
        <Link to={link}>{content}</Link>
      </Button>
    );
  }

  return (
    <Button disabled={isLoading} {...rest}>
      {children}
    </Button>
  );
};

export default BaseButton;
