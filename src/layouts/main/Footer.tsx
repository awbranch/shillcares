import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import Link from '@mui/material/Link';

const startYear = 2022;
const currentYear = new Date().getFullYear();

const Footer = (): JSX.Element => {
  return (
    <Box
      sx={{
        mt: 'auto',
      }}
      component={'footer'}
    >
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          pt: 3,
          textAlign: 'center',
        }}
      >
        <NextLink href={'/'} passHref prefetch={false}>
          <Box component={'a'}>
            <Box
              component={'img'}
              src={'/logo-lite.svg'}
              width={{ xs: 200, textAlign: 'center' }}
            />
          </Box>
        </NextLink>

        <Box
          sx={{
            color: 'alternate.main',
            mt: 2,
            pb: 4,
            textTransform: 'uppercase',
          }}
        >
          <Typography
            variant="caption"
            sx={{ fontSize: '0.7rem', display: 'block' }}
            paragraph={false}
          >
            Website by:{' '}
            <NextLink href={'https://branchstudio.io'} passHref>
              <Link
                color="inherit"
                underline="hover"
                target="_blank"
                sx={{
                  fontFamily: 'inherit',
                  fontWeight: 'inherit',
                  fontSize: 'inherit',
                }}
              >
                Branch Software Studio
              </Link>
            </NextLink>
          </Typography>
          <Typography
            variant="caption"
            sx={{ fontSize: '0.53rem', display: 'block' }}
            paragraph={false}
          >
            © {startYear}-{currentYear} Molly & Ed Shill Cares Foundation
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
