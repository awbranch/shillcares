import React from 'react';

interface Props {
  application: GrantApplication;
}

const ApplicationSubmittedEmail = ({ application }: Props): JSX.Element => {
  return (
    <>
      <Title>Shill Cares Grant Application</Title>
      <Header>Organization</Header>
      <Text>{application.organization}</Text>
      <Text>{application.address1}</Text>
      {application.address2 && <div>{application.address2}</div>}
      <Text>
        {application.city}, {application.state} {application.zip}
      </Text>
      {application.website && (
        <>
          <Text>{<a href={application.website}>{application.website}</a>}</Text>
        </>
      )}

      <Header>Founded</Header>
      <Text>{application.founded}</Text>

      <Header>Annual Operating Budget</Header>
      <Text>{application.budget}</Text>

      <Header>Executive Director</Header>
      <Text>{application.directorName}</Text>
      <Text>{application.directorEmail}</Text>
      <Text>{application.directorPhone}</Text>

      {(application.contactName ||
        application.contactTitle ||
        application.contactEmail ||
        application.contactPhone) && (
        <>
          <Header>Other Contact</Header>
          {application.contactName && <Text>{application.contactName}</Text>}
          {application.contactTitle && <Text>{application.contactTitle}</Text>}
          {application.contactEmail && <Text>{application.contactEmail}</Text>}
          {application.contactPhone && <Text>{application.contactPhone}</Text>}
        </>
      )}

      <Header>Project</Header>
      <Text>{application.projectName}</Text>
      <Text>{application.projectGoals}</Text>

      <Header>Requested Amount</Header>
      <Text>{application.projectRequestedAmount}</Text>

      <Header>Total Project Cost</Header>
      <Text>{application.projectTotalCost}</Text>

      <Header>Time Period</Header>
      <Text>{application.projectDates}</Text>

      <Header>Areas Served</Header>
      <Text>{application.projectArea}</Text>
    </>
  );
};

interface HeaderProps {
  children: React.ReactNode;
}

const Title = ({ children }: HeaderProps): JSX.Element => {
  return (
    <div
      style={{
        fontFamily: 'Georgia, serif',
        fontSize: '16pt',
      }}
    >
      {children}
    </div>
  );
};

const Header = ({ children }: HeaderProps): JSX.Element => {
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

const Text = ({ children }: HeaderProps): JSX.Element => {
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
