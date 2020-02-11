/** @jsx jsx */
import { jsx } from 'theme-ui'

import Prism from 'prismjs';
import Highlight from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwlLight';

import './theme.css'

const prismTheme = {
  ...theme,
  plain: {
    color: theme.plain.color
  }
};

const getLanguage = className => {
  const match = /language-(\w*)/.exec(className || 'language-javascript')
  return match && match.length > 1 ? match[1] : 'javascript'
};

const code = ({ className, children }) => (
  <Highlight
    language={getLanguage(className)}
    code={children.trim()}
    Prism={Prism}
    theme={prismTheme}
  >
    {({ style, tokens, getLineProps, getTokenProps }) => (
      <code style={style} sx={{ variant: 'styles.code' }}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </code>
    )}
  </Highlight>
);

const splitText = children =>
  typeof children === 'string'
    ? children.split(/\s+/).map((t, i) => <span key={i}>{t}</span>)
    : children

const h1 = ({ children }) => (
  <h1
    sx={{
      variant: 'text.heading',
      fontFamily: '"TitlingGothicFB Normal", sans-serif',
      lineHeight: '1.2em',
      fontSize: '4em',
      mt: 0,
      mb: 4,
      '> *': {
        display: 'inline-block',
        backgroundImage: theme => {
          const color = theme.colors.secondary
          return `linear-gradient(transparent 55%, ${color} 55%, ${color} 95%, transparent 95%)`
        },
        backgroundSize: '100% 1.2em',
        backgroundPosition: '0.5em 0',
        backgroundRepeat: 'no-repeat space',
        wordBreak: 'keep-all',
        pr: '1em',
        mr: '-0.5em'
      }
    }}
  >
    {splitText(children)}
  </h1>
)

const h2 = ({ children }) => (
  <h2
    sx={{
      variant: 'text.heading',
      maxWidth: '60%',
      fontFamily: '"TitlingGothicFB Normal", sans-serif',
      lineHeight: '1.2em',
      fontSize: '3em',
      mt: 0,
      mb: 2,
      '> *': {
        display: 'inline-block',
        backgroundImage: theme => {
          const color = theme.colors.primary
          return `linear-gradient(transparent 55%, ${color} 55%, ${color} 95%, transparent 95%)`
        },
        backgroundSize: '100% 1.2em',
        backgroundPosition: '0.5em 0',
        backgroundRepeat: 'no-repeat space',
        wordBreak: 'keep-all',
        pr: '1em',
        mr: '-0.5em'
      }
    }}
  >
    {splitText(children)}
  </h2>
)

export default {
  size: {
    width: 842,
    height: 595
  },
  colors: {
    text: '#000000',
    background: '#ffffff',
    primary: '#ccb6ff',
    secondary: '#f0647d',
    tertiary: '#f09a64',
    muted: '#acacac'
  },
  fonts: {
    heading: '"Neue Haas Unica W1G", sans-serif',
    body: '"Neue Haas Unica W1G", sans-serif',
    monospace: '"iA Writer Quattro S", monospace'
  },
  fontWeights: {
    heading: 400,
    body: 400,
    bold: 600
  },

  components: {
    code,
    h1,
    h2,
  },

  styles: {
    Background: {
      zIndex: -1,
      bg: 'primary'
    },

    Slide: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      fontSize: 16,
      px: 2,
      py: 5,
      '& .cs-layout': {
        mx: -2,
        my: -5
      },
      '& .cs-container': {
        position: 'static !important'
      }
    },
    h3: {
      fontSize: '26px'
    },
    p: {
      fontSize: '18px'
    },
    em: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      boxShadow: 'inset 0 -3.5px 0 -1px #d22a80'
    },
    ul: {
      fontSize: '22px',
      listStyle: 'none',
      my: 3,
      '> li:before': {
        display: 'inline-block',
        content: '""',
        width: '0.5em',
        height: '0.5em',
        borderRadius: '50%',
        border: '2px solid #d22a80',
        marginRight: '1em'
      }
    },
    code: {
      fontSize: '18px',
      fontFamily: '"iA Writer Quattro S", monospace',
      lineHeight: '1.3',
    },

    CodeSurfer: {
      pre: {
        fontSize: '18px',
        color: '#000',
        backgroundColor: '#fff'
      },
      code: {
        fontFamily: '"iA Writer Quattro S", monospace',
        lineHeight: '1.3',
        fontSize: '18px',
        color: '#000',
        backgroundColor: '#fff'
      },
      subtitle: {
        backgroundColor: 'rgba(10,10,10,0.9)',
        color: '#d6deeb'
      },
      title: {
        boxSizing: 'border-box',
        backgroundColor: 'rgba(5, 5, 5, 0.7)',
        width: 'auto',
        left: 3,
        right: 3,
        top: 3,
        borderRadius: 5,
        color: '#fff'
      },
      unfocused: {
        opacity: 0.4
      },

      tokens: {
        'changed': {
          color: 'rgb(162, 191, 252)',
          fontStyle: 'italic'
        },
        'deleted': {
          color: 'rgba(239, 83, 80, 0.56)',
          fontStyle: 'italic'
        },
        'inserted attr-name': {
          color: 'rgb(72, 118, 214)',
          fontStyle: 'italic'
        },
        'comment': {
          color: 'rgb(152, 159, 177)',
          fontStyle: 'italic'
        },
        'string, builtin, char, constant, url': {
          color: 'rgb(72, 118, 214)'
        },
        'variable': {
          color: 'rgb(201, 103, 101)'
        },
        'number': {
          color: 'rgb(170, 9, 130)'
        },
        'punctuation': {
          color: 'rgb(153, 76, 195)'
        },
        'function selector doctype': {
          color: 'rgb(153, 76, 195)',
          fontStyle: 'italic'
        },
        'class-name': {
          color: 'rgb(17, 17, 17)'
        },
        'tag': {
          color: 'rgb(153, 76, 195)'
        },
        'operator property keyword namespace': {
          color: 'rgb(12, 150, 155)'
        },
        'boolean': {
          color: 'rgb(188, 84, 84)'
        }
      }
    }
  }
}
