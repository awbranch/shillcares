import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Form from './components/Form';
import ErrorMessage from './components/ErrorMessage';
import ProcessingMessage from './components/ProcessingMessage';
import SuccessMessage from './components/SuccessMessage';

type Status = 'start' | 'processing' | 'ok' | 'error';

interface Props {
  application?: GrantApplication;
}

const ApplyForm = ({ application }: Props): JSX.Element => {
  const router = useRouter();
  const [status, setStatus] = useState<Status>('start');
  const [statusMessage, setStatusMessage] = useState('');

  const onRetry = async () => {
    setStatus('start');
  };

  const onCancel = async () => {
    await router.push('/');
  };

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
      <Box>
        <Box sx={{ display: status === 'start' ? 'block' : 'none' }}>
          <Form application={application} onSubmit={onSubmit} />
        </Box>
        {status === 'processing' ? (
          <ProcessingMessage />
        ) : status === 'error' ? (
          <ErrorMessage
            message={statusMessage}
            onRetry={onRetry}
            onCancel={onCancel}
          />
        ) : status === 'ok' ? (
          <SuccessMessage />
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default ApplyForm;
