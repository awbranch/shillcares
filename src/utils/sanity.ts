import { createClient } from '@sanity/client';
import { Grantee } from 'types/grantee';
import { Grant } from 'types/grant';
import { BoardMember } from 'types/boardMember';
import { Endowment } from 'types/endowment';

export const client = createClient({
  projectId: '5gu47m8q',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

export async function getGrantees(): Promise<Grantee[]> {
  return client.fetch(
    `*[_type == "grantee"]{
       _id,
       name,
       url,
       "logo": logo.asset->url,
       description,
       order
    } | order(order asc)`,
  );
}

export async function getGrants(): Promise<Grant[]> {
  return client.fetch(
    `*[_type == "grant"]{
       _id,
       date,
       amount,
       "granteeId":grantee->_id,
       note
    } | order(date asc)`,
  );
}

export async function getBoardMembers(): Promise<BoardMember[]> {
  return client.fetch(
    `*[_type == "board"]{
       _id,
       name,
       title,
       "image": image.asset->url,
       biography,
       order
    } | order(order asc)`,
  );
}

export async function getEndowmentBalance(): Promise<Endowment> {
  return client.fetch(
    `*[_type == "endowment"]{
       balance,
       date,
       note
    } | order(date desc)[0]`,
  );
}
