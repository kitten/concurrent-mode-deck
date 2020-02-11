/** @jsx jsx */
import { jsx } from 'theme-ui'

export const Column = ({ sx, children }) => (
  <div
    sx={{
      minWidth: '60%',
      minHeight: '60%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      ...sx
    }}
  >
    {children}
  </div>
);

export const Row = ({ noAlign, sx, children }) => (
  <div
    sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 3,
      '> * ~ *': {
        ml: 5
      },
      '> *': noAlign ? {
        width: '50%'
      } : null,
      '> *:last-child': !noAlign ? {
        textAlign: 'right',
        maxWidth: '50%'
      } : null,
      ...sx
    }}
  >
    {children}
  </div>
);
