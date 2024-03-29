'use server';

import { db } from '@/app/_lib/prisma';
import { revalidatePath } from 'next/cache';

interface SaveBookingParams {
  barbershopId: string;
  serviceId: string;
  userId: string;
  date: Date;
}

export async function saveBooking(params: SaveBookingParams) {
  await db.booking.create({
    data: {
      date: params.date,
      serviceId: params.serviceId,
      userId: params.userId,
      barbershopId: params.barbershopId,
    },
  });

  revalidatePath('/');
  revalidatePath('/bookings');
}
