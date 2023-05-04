import type { PortableTextBlock } from '@portabletext/types';

export type Grantee = {
  _id: string;
  name: string;
  url: string;
  logo: string;
  description: PortableTextBlock[];
  order: number;
};
