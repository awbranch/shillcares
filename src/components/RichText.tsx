import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';

interface Props {
  document: PortableTextBlock[];
}

const RichText = ({ document }: Props): JSX.Element => {
  const components = {
    block: {
      normal: ({ children }) => (
        <Typography variant="body1" paragraph>
          {children}
        </Typography>
      ),
      marks: {
        link: ({ children, value }) => (
          <NextLink href={value.href} passHref>
            <Link>{children}</Link>
          </NextLink>
        ),
      },
    },
  };

  return <PortableText value={document} components={components as any} />;
};

export default RichText;
