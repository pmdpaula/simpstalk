/* eslint-disable react/jsx-props-no-spreading */
import { Link as MuiLink } from '@mui/material';
// import get from 'lodash/get';
import NextLink from 'next/link';
import { ReactNode } from 'react';

interface LinkProps {
  href: any;
  // eslint-disable-next-line prettier/prettier
  color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
  children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Link = ({ href, children, ...props }: LinkProps) => (
  <NextLink href={href} passHref>
    <MuiLink
      {...props}
      sx={{
        color: 'inherit',
        textDecoration: 'none',
        opacity: 1,
        hover: {
          opacity: '0.5',
        },
        focus: {
          opacity: '0.5',
        },
      }}
    >
      {children}
    </MuiLink>
  </NextLink>
);

export default Link;
