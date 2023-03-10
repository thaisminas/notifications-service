import { SendNotification } from "./send-notification";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";

describe('Send Notification', () =>  {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const sendNotification = new SendNotification(notificationsRepository)

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: '476f7786-0041-45b0-8c51-b70043a491de'
    })

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  })
})