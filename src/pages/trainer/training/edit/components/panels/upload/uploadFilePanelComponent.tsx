import * as React from 'react';
import { UploadFileFormComponent } from './uploadFileForm';

interface Props {
  togglePanel(): void;
}

export const UploadFilePanelComponent: React.StatelessComponent<Props> = (props) => {
  return (
    <div>
      <h4>Upload file</h4>
      <UploadFileFormComponent togglePanel={props.togglePanel} />
    </div>
  );
};
