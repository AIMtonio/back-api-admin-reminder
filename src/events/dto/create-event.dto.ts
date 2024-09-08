import { evento } from '@prisma/client';

export type CreateEventDto = Omit<evento, 'id' | 'createAt'>;
