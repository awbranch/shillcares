import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Form from './components/Form';
import ErrorMessage from './components/ErrorMessage';
import ProcessingMessage from './components/ProcessingMessage';
import SuccessMessage from './components/SuccessMessage';

type Status = 'start' | 'processing' | 'ok' | 'error';

interface Props {
  application?: GrantApplication;
}

const ApplyForm = ({ application }: Props): JSX.Element => {
  const [status, setStatus] = useState<Status>('start');
  const [statusMessage, setStatusMessage] = useState('');

  const onSubmit = async (values: GrantApplication) => {
    setStatus('processing');
    let res = await fetch('/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    try {
      if (res.ok) {
        setStatus('ok');
      } else {
        setStatus('error');
      }
      let json = await res.json();
      if (json && json.message) {
        setStatusMessage(json.message);
      }
    } catch (err) {
      setStatus('error');
      setStatusMessage(err.toString());
    }
  };

  return (
    <Box maxWidth={600} margin={'0 auto'}>
      <Box marginBottom={4}>
        <Typography variant={'h1'}>Grant Application</Typography>
        <Typography color="text.secondary" paragraph>
          The Molly and Ed Shill Cares Foundation funds organizations that
          provide food, shelter, reduce violence and provide opportunities for
          success in New York&apos;s Monroe and Ontario counties. If your
          organization aligns with this mission, please complete this form and
          provide details on your request.
        </Typography>
      </Box>
      <Box>
        {status === 'start' ? (
          <Form application={application} onSubmit={onSubmit} />
        ) : status === 'processing' ? (
          <ProcessingMessage />
        ) : status === 'error' ? (
          <ErrorMessage message={statusMessage} />
        ) : (
          <SuccessMessage />
        )}
      </Box>
    </Box>
  );
};

export default ApplyForm;
