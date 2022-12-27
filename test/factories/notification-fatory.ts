import { Content } from "@application/entities/content";
import { Notification, NotificationProps } from "@application/entities/notification";

type Overide = Partial<NotificationProps>;

export function makeNotification(override: Overide = {}){
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitacao de amizade!'),
    recipientId: 'recipient-2',
    ...override,
  });
}