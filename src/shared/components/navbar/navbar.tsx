/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './styles.css';
import { ContainerComponent } from '../container/container';
import { Link } from 'react-router-dom';
import { EnumMainRoute } from 'src/domain/enums/enum-main-route';
import { AuthDataService } from 'src/services/auth-data.service';

export const NavbarComponent = () => {
  return (
    <div className="navbar w-full z-30 top-0 text-black">
      <ContainerComponent aditionalClass="flex flex-col mt-0 py-2">
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1">
              <Link
                className="self-center"
                to={{
                  pathname: EnumMainRoute.HOME,
                  search: `${
                    AuthDataService.authenticatedInformation
                      ? `?code=${AuthDataService.authenticatedInformation.code}`
                      : ''
                  }`,
                }}
              >
                <img className="logo-meli"></img>
              </Link>
            </div>

            <div className="col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-2">
              <input
                className="bg-white input-search-meli"
                type="email"
                placeholder="Buscar produtos, marcas e muitos mais..."
              />
            </div>

            <div className="col-span-1 invisible sm:invisible md:invisible lg:invisible xl:visible">
              <img
                className="frete-meli"
                src="https://http2.mlstatic.com/resources/deals/exhibitors_resources/mlb-menu-desktop-notification-picture-514db431-a640-4355-a7fb-becde26fbc9b.png"
                title="Frete grátis pelo Mercado Pontos"
                alt="Frete grátis pelo Mercado Pontos"
              />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1">1</div>

            <div className="flex justify-center col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-2">
              2
            </div>

            <div className="flex justify-end col-span-1 invisible sm:invisible md:invisible lg:invisible xl:visible">
              3
            </div>
          </div>
        </div>
      </ContainerComponent>
    </div>
  );
};
