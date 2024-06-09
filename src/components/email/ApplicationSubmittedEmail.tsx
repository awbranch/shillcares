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
import { GrantApplication } from 'types/application';

interface Props {
  application: GrantApplication;
  submitted: string;
}

const ApplicationSubmittedEmail = ({
  application,
  submitted,
}: Props): JSX.Element => {
  return (
    <Page>
      <Logo />
      <Title>{application.projectName}</Title>
      <Text>Submitted: {submitted.toLocaleString()}</Text>

      <Table>
        <Row>
          <Cell>
            <Header>Organization</Header>
            <Text>{application.organization}</Text>
            <Text>{application.address1}</Text>
            {application.address2 && <div>{application.address2}</div>}
            <Text>
              {application.city}, {application.state} {application.zip}
            </Text>
            {application.website && (
              <>
                <Text>
                  {<a href={application.website}>{application.website}</a>}
                </Text>
              </>
            )}
          </Cell>
          <Cell>
            <Header>Founded</Header>
            <Text>{application.founded}</Text>

            <Header>Annual Operating Budget</Header>
            <Text>{application.budget}</Text>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <Header>Executive Director</Header>
            <Text>{application.directorName}</Text>
            <Text>{application.directorEmail}</Text>
            <Text>{application.directorPhone}</Text>
          </Cell>
          <Cell>
            {(application.contactName ||
              application.contactTitle ||
              application.contactEmail ||
              application.contactPhone) && (
              <>
                <Header>Other Contact</Header>
                {application.contactName && (
                  <Text>{application.contactName}</Text>
                )}
                {application.contactTitle && (
                  <Text>{application.contactTitle}</Text>
                )}
                {application.contactEmail && (
                  <Text>{application.contactEmail}</Text>
                )}
                {application.contactPhone && (
                  <Text>{application.contactPhone}</Text>
                )}
              </>
            )}
          </Cell>
        </Row>
        <Row>
          <DoubleCell>
            <Header>Project</Header>
            <Text>{application.projectGoals}</Text>
          </DoubleCell>
        </Row>
        <Row>
          <Cell>
            <Header>Requested Amount</Header>
            <Text>{application.projectRequestedAmount}</Text>
          </Cell>
          <Cell>
            <Header>Total Project Cost</Header>
            <Text>{application.projectTotalCost}</Text>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <Header>Time Period</Header>
            <Text>{application.projectDates}</Text>
          </Cell>
          <Cell>
            <Header>Areas Served</Header>
            <Text>{application.projectArea}</Text>
          </Cell>
        </Row>
        <Row>
          <DoubleCell>
            <Header>Source</Header>
            <Text>{application.source}</Text>
          </DoubleCell>
        </Row>
      </Table>
    </Page>
  );
};

export default ApplicationSubmittedEmail;
