import React from 'react';
import { SpinnerComponet } from '../../shared/components/spinner/Spinner';
import { environment } from '../../environments/environment.prod';

export const AuthMeliComponent = () => {
  window.location.href = `http://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=${environment.clientIdAuthMeli}`;
  return (
    <div className="flex flex-1 justify-center h-full">
      <SpinnerComponet />
    </div>
  );
};
