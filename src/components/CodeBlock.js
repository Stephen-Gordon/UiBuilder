import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CodeBlock } from "react-code-blocks";

const CodeBlocks = ({theme, font, palette}) => {




    




    const exampleCode = `
        const theme = createTheme({
            typography: {
                fontFamily: ${font}
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
      <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
        {exampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default CodeBlocks;
