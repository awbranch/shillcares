import NextLink from 'next/link';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import NavItem from './NavItem';

interface Props {
  onSidebarOpen: () => void;
  colorInvert?: boolean;
}

const Topbar = ({ onSidebarOpen, colorInvert = false }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <NextLink href="/" passHref>
        <Box
          display={'flex'}
          component="a"
          title="Shill Cares Foundation"
          width={{ xs: 100, md: 120 }}
        >
          <Box component={'img'} src={'/logo-horiz.svg'} height={80} />
        </Box>
      </NextLink>

      <Stack
        direction="row"
        spacing={4}
        sx={{ display: { xs: 'none', md: 'flex' } }}
      >
        <NavItem title="Our Work" link="/work" colorInvert={colorInvert} />
        <NavItem title="About Us" link="/about" colorInvert={colorInvert} />
        <NavItem title="Contact Us" link="/contact" colorInvert={colorInvert} />
      </Stack>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
