import * as React from 'react';
import './Navbar.css';
import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function Navbar(props) {
  const [pathname, setPathname] = React.useState('/dashboard');

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  // DOM manipulation to change text
  React.useEffect(() => {
    const element = document.querySelector('.MuiTypography-h6');
    if (element) {
      element.textContent = 'Innovatrix Academy';
    element.color = 'black'
    }
  }, []);

  return (
    <AppProvider router={router} theme={demoTheme}>
      <DashboardLayout>
        {/* Collapse menu ko hide karna */}
        <div style={{ display: 'none' }}>
          <div aria-label="Collapse menu">
            <button>
              <svg>
                {/* Collapse menu icon */}
              </svg>
            </button>
          </div>
        </div>
      </DashboardLayout>
    </AppProvider>
  );
}

export default Navbar;