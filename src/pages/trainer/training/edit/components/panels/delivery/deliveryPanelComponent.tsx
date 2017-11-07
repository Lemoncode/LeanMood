import * as React from 'react';
import { DeliveryFormComponent } from './deliveryForm';
import {IMarkdownEntry} from '../../../../../../../model/trainer/markdownEntry';
import {markdownEntryConstants} from '../../markdownEntryConstants';

interface Props {
  togglePanel(): void;
  insertMarkdownEntry: (markdownEntry: IMarkdownEntry) => void;
}

export const DeliveryPanelComponent: React.StatelessComponent<Props> = (props) => {
  return (
    <div>
      <h4>Add delivery</h4>
      <DeliveryFormComponent
        togglePanel={props.togglePanel}
        insertMarkdownEntry={props.insertMarkdownEntry}
      />
    </div>
  );
};

DeliveryPanelComponent.displayName = 'DeliveryPanelComponent';
