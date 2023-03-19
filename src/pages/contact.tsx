import type { NextPage } from 'next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';
import ContactForm from 'components/forms/ContactForm';
import path from 'path';
import { promises as fs } from 'fs';
import Box from '@mui/material/Box';

interface Props {
  contactInfo?: ContactInfo;
}

const Contact: NextPage = ({ contactInfo }: Props) => {
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
          src={'contact-side.jpg'}
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
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem.
                </Typography>
                <ContactForm contactInfo={contactInfo} />
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </Main>
  );
};

export async function getServerSideProps() {
  let contactInfo = null;
  if (process.env.FLAG_POPULATE_CONTACT_FORM === 'true') {
    const file = path.join(process.cwd(), 'data', 'testContact.json');
    contactInfo = JSON.parse(await fs.readFile(file, 'utf8'));
  }

  return {
    props: { contactInfo },
  };
}

export default Contact;
