import Meta from '@/components/Meta';
import { CenteredFlexBox, FullSizeCenteredFlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import logo from '../../../public/logo.jpeg';
import { Image } from './styled';
import { Alert, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const primary = '#001b36';
//const secondary = '#8bbedd';

function AgentSignUp() {
  const isPortrait = useOrientation();

  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [values, setValues] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChangeForm = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (values.password != values.passwordConfirm) {
      setAlertMessage('Las contraseñas no coinciden');
    }
  };

  return (
    <>
      <Meta title="Agente | Registro" />
      <FullSizeCenteredFlexBox
        flexDirection={isPortrait ? 'column' : 'row'}
        sx={{ backgroundColor: primary }}
      >
        <CenteredFlexBox
          component="form"
          onSubmit={handleSubmit}
          sx={{
            padding: '5%',
            width: '95%',
            maxWidth: '500px',
            flexDirection: 'column',
            backgroundColor: 'white',
            borderRadius: '12px',
          }}
        >
          <CenteredFlexBox sx={{ flexDirection: 'column' }}>
            <Image alt="app-logo" src={logo} />
            <Typography variant="h6" component="h4" mb={2} color={primary}>
              Registro Agentes
            </Typography>
          </CenteredFlexBox>
          <TextField
            required
            label="Usuario"
            sx={{ marginBottom: '20px', width: '100%', maxWidth: '400px' }}
            onChange={handleChangeForm('username')}
            inputProps={{
              pattern: '[a-zA-Z0-9]{2,}',
            }}
          />
          <TextField
            required
            label="Contraseña"
            type="password"
            onChange={handleChangeForm('password')}
            sx={{ marginBottom: '20px', width: '100%', maxWidth: '400px' }}
          />
          <TextField
            required
            label="Confirmar Contraseña"
            type="password"
            onChange={handleChangeForm('passwordConfirm')}
            sx={{ marginBottom: '20px', width: '100%', maxWidth: '400px' }}
          />
          <Button
            sx={{ backgroundColor: primary, color: 'white', width: '100%', maxWidth: '400px' }}
            variant="text"
            size="large"
            type="submit"
          >
            Enviar
          </Button>
          {alertMessage && (
            <Alert sx={{ marginTop: 2 }} severity="error">
              {alertMessage}
            </Alert>
          )}
        </CenteredFlexBox>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default AgentSignUp;
