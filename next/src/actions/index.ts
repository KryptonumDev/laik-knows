'use server';

import { mailerlite } from '@/utils/mailerlite';
import { REGEX } from '@/global/constants';

type CreateSubscriberParams = {
  email: string;
  legal: boolean;
};

export async function createSubscriber({ email, legal }: CreateSubscriberParams) {
  const isValid = email && REGEX.email.test(email) && legal;

  if (!isValid) return { success: false };

  const params = { email, groups: ['129747752861042405'] };

  try {
    await mailerlite.subscribers.createOrUpdate(params);
    return { success: true };
  } catch {
    return { success: false };
  }
}
