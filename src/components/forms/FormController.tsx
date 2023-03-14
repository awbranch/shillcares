import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import ProcessingMessage from './components/ProcessingMessage';
import ErrorMessage from './components/ErrorMessage';
import SuccessMessage from './components/SuccessMessage';

type Status = 'start' | 'processing' | 'ok' | 'error';

export interface FormTypeProps {
  defaultData?: any;
  onSubmit: (values: object) => Promise<void>;
}

interface Props {
  endPoint: string;
  formType: (FormTypeProps) => JSX.Element;
  defaultData?: any;
}

const FormController = ({
  endPoint,
  formType,
  defaultData,
}: Props): JSX.Element => {
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
    let res = await fetch(endPoint, {
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
    <Box>
      <Box sx={{ display: status === 'start' ? 'block' : 'none' }}>
        {formType({ defaultData, onSubmit })}
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
  );
};

export default FormController;
