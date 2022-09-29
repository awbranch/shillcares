import React from 'react';

interface Props {
  application: GrantApplication;
  logoPath: string;
  submitted: string;
}

const ApplicationSubmittedEmail = ({
  application,
  logoPath,
  submitted,
}: Props): JSX.Element => {
  return (
    <Page>
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <img src={logoPath} width={160} />
      </div>
      <Title>Grant Application: {application.projectName}</Title>
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
      </Table>
    </Page>
  );
};

interface ElementProps {
  children: React.ReactNode;
}

const Page = ({ children }: ElementProps): JSX.Element => {
  return (
    <div
      style={{
        margin: '10pt',
        padding: '30pt',
        borderRadius: '5px',
        maxWidth: '500pt',
        border: '1px solid #aaa',
      }}
    >
      {children}
    </div>
  );
};

const Table = ({ children }: ElementProps): JSX.Element => {
  return (
    <table
      style={{
        width: '100%',
      }}
    >
      <tbody>{children}</tbody>
    </table>
  );
};

const Row = ({ children }: ElementProps): JSX.Element => {
  return <tr>{children}</tr>;
};

const Cell = ({ children }: ElementProps): JSX.Element => {
  return <td style={{ verticalAlign: 'top' }}>{children}</td>;
};

const DoubleCell = ({ children }: ElementProps): JSX.Element => {
  return (
    <td colSpan={2} style={{ verticalAlign: 'top' }}>
      {children}
    </td>
  );
};

const Title = ({ children }: ElementProps): JSX.Element => {
  return (
    <div
      style={{
        fontFamily: 'Georgia, serif',
        fontSize: '15pt',
        marginTop: '20pt',
      }}
    >
      {children}
    </div>
  );
};

const Header = ({ children }: ElementProps): JSX.Element => {
  return (
    <div
      style={{
        fontFamily: 'Georgia, serif',
        fontSize: '6.5pt',
        fontWeight: 600,
        color: '#555',
        textDecoration: 'underline',
        textUnderlineOffset: '0.1rem',
        letterSpacing: '.08rem',
        textTransform: 'uppercase',
        margin: '20pt 0 2pt 0',
      }}
    >
      {children}
    </div>
  );
};

const Text = ({ children }: ElementProps): JSX.Element => {
  return (
    <div
      style={{
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 400,
        margin: 0,
        fontSize: '11pt',
      }}
    >
      {children}
    </div>
  );
};

export default ApplicationSubmittedEmail;
