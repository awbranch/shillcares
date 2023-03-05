import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';

import Container from 'components/Container';
import Topbar from './Topbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

interface Props {
  children: React.ReactNode;
  colorInvert?: boolean;
}

const Main = ({ children, colorInvert = false }: Props): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <Box
      sx={{
        height: '100vh',
        margin: '0',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AppBar
        position={'fixed'}
        sx={{
          backgroundColor: trigger
            ? theme.palette.background.paper
            : 'transparent',
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={{ xs: 1, sm: 1.5 }}>
          <Topbar
            onSidebarOpen={handleSidebarOpen}
            colorInvert={trigger ? false : colorInvert}
          />
        </Container>
      </AppBar>
      <Sidebar onClose={handleSidebarClose} open={open} variant="temporary" />
      <main>
        <Box height={{ xs: 58, sm: 66 }} />
        {children}
      </main>
      <Footer />
    </Box>
  );
};

export default Main;
