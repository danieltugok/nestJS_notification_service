import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova soliciatacao'),
      recipientId: 'example-recipient-id',
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
