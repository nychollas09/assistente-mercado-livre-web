import React from 'react';

interface ContainerComponentProps {
  aditionalClass?: string;
}

export const ContainerComponent: React.FC<ContainerComponentProps> = ({
  children,
  aditionalClass,
}) => {
  return (
    <div className={`${aditionalClass} container px-3 mx-auto`}>{children}</div>
  );
};
