import Box from '@mui/material/Box';
import ProcessingMessage from './ProcessingMessage';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';
import { Status } from './useFormController';

interface FormWrapperProps {
  status: Status;
  onClose: () => void;
  successMessage: string;
  children: JSX.Element;
}

const FormWrapper = ({
  onClose,
  status,
  successMessage,
  children,
}: FormWrapperProps): JSX.Element => {
  return (
    <Box>
      <Box sx={{ display: status === 'start' ? 'block' : 'none' }}>
        {children}
      </Box>
      {status === 'processing' ? (
        <ProcessingMessage />
      ) : status === 'error' ? (
        <ErrorMessage onRetry={onClose} />
      ) : status === 'ok' ? (
        <SuccessMessage message={successMessage} onClose={onClose} />
      ) : (
        <></>
      )}
    </Box>
  );
};

export default FormWrapper;
