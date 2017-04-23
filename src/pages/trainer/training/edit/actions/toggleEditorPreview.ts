import {trainerActionEnums} from '../../../../../common/actionEnums/trainer';

export const toggleEditorPreviewAction = (content: string) => ({
  type: trainerActionEnums.TOGGLE_EDITOR_PREVIEW,
});
