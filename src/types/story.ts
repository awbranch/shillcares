import type { PortableTextBlock } from '@portabletext/types';

export type Story = {
  _id: string;
  title: string;
  location: string;
  date: string;
  image: string;
  text: PortableTextBlock[];
  slug: string;
};
