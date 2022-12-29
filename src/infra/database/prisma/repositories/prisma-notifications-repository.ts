import { NotificationsRepository } from '../../../../application/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';
import { Notification } from '../../../../application/entities/notification';

export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private readonly PrismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.PrismaService.notification.create({
      data: {
        id: notification.id,
        recipientId: notification.recipientId,
        content: notification.content.value,
        category: notification.category,
        readAt: notification.readAt,
      },
    });
  }
}