import type { NextPage } from 'next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import ContactForm from 'components/forms/ContactForm';
import Typography from '@mui/material/Typography';

const Contact: NextPage = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const Sidebar = () => (
    <Box
      flex={'1 1 30%'}
      maxWidth={'30%'}
      maxHeight={'100vh'}
      position={'sticky'}
      top={0}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        height={1}
        width={1}
        sx={{
          '& .lazy-load-image-loaded': {
            height: 1,
            width: 1,
          },
        }}
      >
        <Box
          component={LazyLoadImage}
          height={1}
          width={1}
          src={'contact-side-2.jpg'}
          alt="Hearts"
          effect="blur"
          sx={{
            objectFit: 'cover',
            '& .lazy-load-image-loaded': {
              height: 1,
            },
          }}
        />
      </Box>
    </Box>
  );

  return (
    <Main>
      <Box
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        marginTop={-15}
      >
        {isMd ? <Sidebar /> : null}
        <Box
          flex={{ xs: '1 1 100%', md: '1 1 70%' }}
          maxWidth={{ xs: '100%', md: '70%' }}
          paddingTop={14}
        >
          <Box height={1}>
            <Container>
              <Box sx={{ pl: 2 }}>
                <Typography variant={'h1'}>Contact Us</Typography>
                <Typography variant="subtitle1" sx={{ mt: 3, mb: 6 }} paragraph>
                  We are interested to hear your ideas about new ways we can
                  help high-risk people and animals within our community.
                </Typography>
                <ContactForm />
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </Main>
  );
};
export default Contact;
