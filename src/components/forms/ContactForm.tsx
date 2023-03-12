import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import ContactFormComponent from './components/ContactFormComponent';
import ErrorMessage from './components/ErrorMessage';
import ProcessingMessage from './components/ProcessingMessage';
import SuccessMessage from './components/SuccessMessage';

type Status = 'start' | 'processing' | 'ok' | 'error';

interface Props {
  contactInfo?: ContactInfo;
}

const ContactForm = ({ contactInfo }: Props): JSX.Element => {
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
    let res = await fetch('/api/contact', {
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
      <Box sx={{ display: status === 'start' ? 'block' : 'none' }}>
        <ContactFormComponent contactInfo={contactInfo} onSubmit={onSubmit} />
      </Box>
      {status === 'processing' ? (
        <ProcessingMessage message="Your message is being submitted." />
      ) : status === 'error' ? (
        <ErrorMessage
          message="We apologize, but there was an error sending your message."
          error={statusMessage}
          onRetry={onRetry}
          onCancel={onCancel}
        />
      ) : status === 'ok' ? (
        <SuccessMessage
          title={'Message Sent'}
          message={
            'Thank you for contacting the Molly and Ed Shill Cares Foundation. Your message will be reviewed and we will respond as quickly as possible.'
          }
          onClose={onRetry}
        />
      ) : (
        <></>
      )}
    </Box>
  );
};

export default ContactForm;
