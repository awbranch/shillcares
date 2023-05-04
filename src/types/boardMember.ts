import { PortableTextBlock } from '@portabletext/types';

export type BoardMember = {
  _id: string;
  name: string;
  order: number;
  title: string;
  image: string;
  biography: PortableTextBlock[];
};
