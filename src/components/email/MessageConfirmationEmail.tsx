import React from 'react';
import { Page, Logo, Title, Text, Para } from './elements';
import globals from 'utils/globals';

interface Props {
  contactInfo: ContactInfo;
  logoPath: string;
  submitted: string;
}

const MessageConfirmationEmail = ({
  contactInfo,
  logoPath,
  submitted,
}: Props): JSX.Element => {
  return (
    <Page>
      <Logo path={logoPath} />
      <Title>Message Received</Title>
      <Text>{submitted}</Text>
      <Text>{contactInfo.name}</Text>
      <Text>{contactInfo.email}</Text>
      <Para>{globals.MESSAGE_RECEIVED}</Para>
      <Para>{globals.FOUNDATION_DISCLAIMER}</Para>
    </Page>
  );
};

export default MessageConfirmationEmail;
