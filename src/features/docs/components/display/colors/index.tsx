// Core Components
import { Box } from 'core/components/layout/box';

// Core Utilities
import { cx } from 'core/utilities/classnames/cx';

export const DocsColors = () => {
  return (
    <Box flex className='gap-4'>
      {colors.map((color, index) => (
        <Box
          flex
          className={cx(
            'w-28 h-28 capitalize transition-colors duration-200 ease-in-out',
            'items-center justify-center',
            color.className
          )}
          key={color.label + index}
        >
          {color.label}
        </Box>
      ))}
    </Box>
  );
};

const colors = [
  {
    label: 'primary',
    className:
      'bg-primary hover:bg-primary-hover text-primary-foreground hover:text-primary-foreground-hover',
  },
  {
    label: 'secondary',
    className:
      'bg-secondary hover:bg-secondary-hover text-secondary-foreground hover:text-secondary-foreground-hover',
  },
  {
    label: 'accent',
    className:
      'bg-accent hover:bg-accent-hover text-accent-foreground hover:text-accent-foreground-hover',
  },
  {
    label: 'success',
    className:
      'bg-success hover:bg-success-hover text-success-foreground hover:text-success-foreground-hover',
  },
  {
    label: 'warning',
    className:
      'bg-warning hover:bg-warning-hover text-warning-foreground hover:text-warning-foreground-hover',
  },
  {
    label: 'error',
    className:
      'bg-error hover:bg-error-hover text-error-foreground hover:text-error-foreground-hover',
  },
  {
    label: 'info',
    className:
      'bg-info hover:bg-info-hover text-info-foreground hover:text-info-foreground-hover',
  },
  {
    label: 'neutral',
    className:
      'bg-neutral hover:bg-neutral-hover text-neutral-foreground hover:text-neutral-foreground-hover',
  },
  {
    label: 'background',
    className: 'bg-background text-foreground',
  },
  {
    label: 'surface',
    className: 'bg-surface text-foreground',
  },
  {
    label: 'divider',
    className: 'bg-divider text-foreground',
  },
  {
    label: 'muted',
    className: 'bg-muted text-foreground',
  },
  {
    label: 'disabled',
    className: 'bg-disabled text-foreground',
  },
  {
    label: 'focus',
    className: 'bg-focus text-foreground',
  },
];
