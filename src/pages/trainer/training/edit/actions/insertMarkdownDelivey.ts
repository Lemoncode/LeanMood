import {trainerActionEnums} from '../../../../../common/actionEnums/trainer';
import {IMarkdownEntry} from '../../../../../model/trainer/markdownEntry';

export const insertMarkdownDelivey = (markdownEntry: IMarkdownEntry) => ({
  type: trainerActionEnums.INSERT_MARKDOWN_DELIVERY,
  payload: markdownEntry,
});
