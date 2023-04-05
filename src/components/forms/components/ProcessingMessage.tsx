import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BarLoader from 'react-spinners/BarLoader';

const ProcessingMessage = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="subtitle1" sx={{ pt: 4 }}>
        Submitting. Please Wait.
      </Typography>
      <BarLoader
        color={theme.palette.primary.dark}
        width={220}
        loading={true}
      />
    </Box>
  );
};

export default ProcessingMessage;
