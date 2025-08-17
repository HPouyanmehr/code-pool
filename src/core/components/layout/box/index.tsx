import type { ComponentProps } from 'react';

// Core Utilities
import { cx } from 'core/utilities/classnames/cx';

// Module Types
export interface BoxProps extends ComponentProps<'div'> {
  flex?: boolean;
}

export const Box = (props: BoxProps) => {
  // Props
  const { children, className, flex, ...otherProps } = props;

  // Utilities
  const classNames = cx(flex ? 'flex' : '', className);

  return (
    <div className={classNames} {...otherProps}>
      {children}
    </div>
  );
};
