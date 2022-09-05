import React from 'react';
import Drawer from '@mui/material/Drawer';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface Props {
  onClose: () => void;
  open: boolean;
  variant: 'permanent' | 'persistent' | 'temporary' | undefined;
}

const Sidebar = ({ open, variant, onClose }: Props): JSX.Element => {
  const router = useRouter();

  const about = () => {
    onClose();
    router.push(`/about`);
  };

  const contact = () => {
    onClose();
    router.push(`/contact`);
  };

  const help = () => {
    onClose();
    router.push(`/help`);
  };

  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: { xs: '100%', sm: 400 },
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          padding: 1,
        }}
      >
        <Box
          display={'flex'}
          justifyContent={'flex-end'}
          onClick={() => onClose()}
        >
          <IconButton>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <Stack spacing={2}>
          <Button onClick={about}>About</Button>
          <Button onClick={contact}>Contact</Button>
          <Button onClick={help}>Help</Button>
          <Divider />
        </Stack>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
