import React from 'react';
import { useLocation } from 'react-router-dom';
import { ApiAuthMeli$ } from '../../services/mercado-livre-api';
import { AuthenticatedInformation } from '../../domain/models/authenticated-information';
import { take } from 'rxjs/operators';
import { AuthDataService } from 'src/services/auth-data.service';

const REFERENCE_CODE_QUERY_PARAM = 'code';

export const HomeComponent = () => {
  const queryParams = new URLSearchParams(useLocation().search);

  const [code] = React.useState<string>(
    queryParams.get(REFERENCE_CODE_QUERY_PARAM),
  );

  ApiAuthMeli$(code)
    .pipe(take(1))
    .subscribe((authenticatedInformation: AuthenticatedInformation) => {
      AuthDataService.authenticatedInformation = authenticatedInformation;
    });

  return <div>HomeComponent {code}</div>;
};
