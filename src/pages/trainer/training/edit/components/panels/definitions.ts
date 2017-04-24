import { UploadFilePanelComponent } from './upload';
import { DeliveryPanelComponent } from './delivery';
import { EvaluationPanelComponent } from './evaluation';
import { PanelItem } from '../../../../../../common/components';

export const panelIds = {
  upload : 'UPLOAD',
  evaluation: 'EVALUATION',
  delivery: 'DELIVERY',
};

export const panelList: PanelItem[] = [
                                  {
                                    panelId: panelIds.upload,
                                    component: UploadFilePanelComponent,
                                  },
                                  {
                                    panelId: panelIds.evaluation,
                                    component: EvaluationPanelComponent,
                                  },
                                  {
                                    panelId: panelIds.delivery,
                                    component: DeliveryPanelComponent,
                                  },
                                ];
