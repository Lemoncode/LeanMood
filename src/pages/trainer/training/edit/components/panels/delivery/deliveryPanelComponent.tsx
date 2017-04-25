import * as React from 'react';
import { DeliveryFormComponent } from './deliveryForm';

interface Props {
  togglePanel(): void;
}

export const DeliveryPanelComponent: React.StatelessComponent<Props> = (props) => {
  return (
    <div>
      <h4>Add delivery</h4>
      <DeliveryFormComponent togglePanel={props.togglePanel} />
    </div>
  );
};

DeliveryPanelComponent.displayName = 'DeliveryPanelComponent';
