import React from 'react';
import { Page, Logo, Title, Text, Para } from './elements';

interface Props {
  application: GrantApplication;
  logoPath: string;
  submitted: string;
}

const ApplicationConfirmationEmail = ({
  application,
  logoPath,
  submitted,
}: Props): JSX.Element => {
  return (
    <Page>
      <Logo path={logoPath} />
      <Title>Grant Application Received</Title>
      <Text>{submitted}</Text>
      <Text>{application.organization}</Text>
      <Text>{application.projectName}</Text>

      <Para>
        Thank you for submitting a grant application to the Molly and Ed Shill
        Cares Foundation. Your application will be reviewed and evaluated for
        alignment with the foundation&apos;s mission and funding levels for the
        current year. If you grant is selected as a candidate, the foundation
        will contact you at the email address provided for next steps.
      </Para>

      <Para>
        The MOLLY & ED SHILL CARES FOUNDATION (the “Foundation”) is a nonprofit
        organization organized exclusively for charitable, religious,
        scientific, literary, or educational purposes, to foster national or
        international amateur sports competition, or for the prevention of
        cruelty to children or animals, in each case, as described in Section
        501(c)(3) of the Internal Revenue Code of 1986, as amended, or the
        corresponding provision of any subsequent federal tax laws (the “Code”),
        including, for such purposes, the making of distributions to
        organizations that qualify as exempt organizations under Section
        501(c)(3) of the Code.
      </Para>
    </Page>
  );
};

export default ApplicationConfirmationEmail;
