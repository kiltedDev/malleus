import { createTRPCRouter, protectedProcedure } from '@malleus/server/api/trpc';
import { z } from 'zod';

export const characterRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.character.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),

  create: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.character.create({
        data: {
          name: input.name,
          userId: ctx.session.user.id,
        },
      });
    }),
});
