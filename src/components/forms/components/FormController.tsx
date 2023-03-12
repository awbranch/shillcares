import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import ProcessingMessage from './ProcessingMessage';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';
import globals from '../../../utils/globals';

type Status = 'start' | 'processing' | 'ok' | 'error';

interface Props {
  endpoint: string;
  prop2: boolean;
  children: React.ReactNode;
}

const FormController = ({ endpoint, prop2, children }: Props): JSX.Element => {
  const router = useRouter();
  const [status, setStatus] = useState<Status>('start');
  const [statusMessage, setStatusMessage] = useState('');

  const onRetry = async () => {
    setStatus('start');
  };

  const onCancel = async () => {
    await router.push('/');
  };

  const onSubmit = async (values: object) => {
    setStatus('processing');
    let res = await fetch(endpoint, {
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
    <Box maxWidth={800} margin={'0 auto'}>
      <Box>
        <Box sx={{ display: status === 'start' ? 'block' : 'none' }}>
          {children}
        </Box>
        {status === 'processing' ? (
          <ProcessingMessage message="Sending" />
        ) : status === 'error' ? (
          <ErrorMessage
            message="Error"
            error={statusMessage}
            onRetry={onRetry}
            onCancel={onCancel}
          />
        ) : status === 'ok' ? (
          <SuccessMessage
            title={'Title'}
            message={'Message'}
            message2={'Message2'}
            onClose={onCancel}
          />
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default FormController;
