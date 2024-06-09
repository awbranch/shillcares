import React from 'react';
import { Page, Logo, Title, Text, Para } from './elements';
import globals from 'utils/globals';
import { GrantApplication } from 'types/application';

interface Props {
  application: GrantApplication;
  submitted: string;
}

const ApplicationConfirmationEmail = ({
  application,
  submitted,
}: Props): JSX.Element => {
  return (
    <Page>
      <Logo />
      <Title>Grant Application Received</Title>
      <Text>{submitted}</Text>
      <Text>{application.organization}</Text>
      <Text>{application.projectName}</Text>
      <Para>{globals.APPLICATION_RECEIVED}</Para>
      <Para>{globals.FOUNDATION_DISCLAIMER}</Para>
    </Page>
  );
};

export default ApplicationConfirmationEmail;
