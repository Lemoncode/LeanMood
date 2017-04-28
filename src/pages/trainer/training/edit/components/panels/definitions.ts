import { UploadFilePanelContainer } from './upload';
import { DeliveryPanelContainer } from './delivery';
import { EvaluationPanelContainer } from './evaluation';
import { PanelItem } from '../../../../../../common/components';

export const panelIds = {
  upload: 'UPLOAD',
  evaluation: 'EVALUATION',
  delivery: 'DELIVERY',
};

export const panelList: PanelItem[] = [
  {
    panelId: panelIds.upload,
    component: UploadFilePanelContainer,
  },
  {
    panelId: panelIds.evaluation,
    component: EvaluationPanelContainer,
  },
  {
    panelId: panelIds.delivery,
    component: DeliveryPanelContainer,
  },
];
