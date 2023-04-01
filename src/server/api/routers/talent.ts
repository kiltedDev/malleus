import { createTRPCRouter, protectedProcedure } from '@malleus/server/api/trpc';
import { z } from 'zod';

export const talentRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.talent.findMany();
  }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.talent.create({
        data: {
          name: input.name,
          description: input.description,
        },
      });
    }),
});
