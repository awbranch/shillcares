import React from 'react';
import {
  Page,
  Logo,
  Title,
  Table,
  Row,
  Cell,
  DoubleCell,
  Header,
  Text,
} from './elements';
import { ContactInfo } from 'types/contactInfo';

interface Props {
  contactInfo: ContactInfo;
  logoPath: string;
  submitted: string;
}

const MessageSubmittedEmail = ({
  contactInfo,
  logoPath,
  submitted,
}: Props): JSX.Element => {
  return (
    <Page>
      <Logo path={logoPath} />
      <Title>Shill Cares Message</Title>
      <Text>Submitted: {submitted.toLocaleString()}</Text>

      <Table>
        <Row>
          <Cell>
            <Text>{contactInfo.name}</Text>
            <Text>{contactInfo.email}</Text>
          </Cell>
        </Row>
        <Row>
          <DoubleCell>
            <Header>Message</Header>
            <Text>{contactInfo.message}</Text>
          </DoubleCell>
        </Row>
      </Table>
    </Page>
  );
};

export default MessageSubmittedEmail;
