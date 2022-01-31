import { Breakpoint, Theme, useTheme } from '@mui/material';
// import { Breakpoint } from '@mui/material/styles/createBreakpoints';
import useMediaQuery from '@mui/material/useMediaQuery';

type BreakpointOrNull = Breakpoint | null;

/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
export function useWidth(): Breakpoint {
  const theme: Theme = useTheme();
  const keys: Breakpoint[] = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}

export function useIsMidOrHigerSizeScreen(): boolean {
  const theme: Theme = useTheme();
  return useMediaQuery(theme.breakpoints.up('md'));
}
