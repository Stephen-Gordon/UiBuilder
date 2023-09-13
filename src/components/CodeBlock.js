import { Grid } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";


const CodeBlocks = ({theme, font, palette}) => {




    




    const exampleCode = `
const theme = createTheme({
    typography: {
        fontFamily: ${theme.typography.fontFamily}
    },
    palette: {
      border: alpha(palette.text.primary, 0.1),
      primary: {
          light: ${palette.primary.light},
          main: ${palette.primary.main},
          dark: ${palette.primary.dark}
      },
      secondary: {
          light: ${palette.secondary.light},
          main: ${palette.secondary.main},
          dark: ${palette.secondary.dark},
      },
      error: {
        light: ${palette.error.light},
        main: ${palette.error.main},
        dark: ${palette.error.dark},
      },
      warning: {
        light: ${palette.warning.light},
        main: ${palette.warning.main},
        dark: ${palette.warning.dark},
      },
      info: {
        light: ${palette.info.light},
        main: ${palette.info.main},
        dark: ${palette.info.dark},
      },
      success: {
        light: ${palette.success.light},
        main: ${palette.success.main},
        dark: ${palette.success.dark},
      },
      background: {
          default: ${palette.background.default},
          paper: ${palette.background.paper}

      },
      text: {
          primary: ${palette.text.primary},
          secondary: ${palette.text.secondary}
      }
  },  
});
    `;

  return (
    <>
      <Grid sx={{ overflow: "auto", height: '667px', borderRadius: '24px' }}>
        <SyntaxHighlighter
          lineProps={{
          style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
        }}
          wrapLines={true} 
          codeTagProps={{
            style: {
              height: '663px',
              fontSize: theme.typography.body1.fontSize,
              width: "100%",
              padding: "24px",
              overflow: "scroll",
            },
          }}
          language="javascript"
          style={{ ...vscDarkPlus }}
        >
          {exampleCode}
        </SyntaxHighlighter>
      </Grid>
    </>
  );
};

export default CodeBlocks;
