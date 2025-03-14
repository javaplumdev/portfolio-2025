import React, {ComponentProps} from 'react';
import {Link} from 'react-router';
import {Button} from '@/components/ui/button';

type BaseButtonProps = {
  link?: string;
  children: Children;
  isLoading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
} ;

const BaseButton: React.FC<BaseButtonProps & ComponentProps<typeof Button>> = (props) => {
  const {children, link, startIcon, isLoading, endIcon, ...rest} = props;

  const content = (
    <React.Fragment>
      {startIcon && startIcon} {children} {endIcon && endIcon}
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
      {content}
    </Button>
  );
};

export default BaseButton;
