import { createTRPCRouter, protectedProcedure } from '@malleus/server/api/trpc';
import { z } from 'zod';

export const trainingRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.training.findMany();
  }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        knave: z.boolean(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.training.create({
        data: {
          name: input.name,
          description: input.description,
          knave: input.knave,
        },
      });
    }),
});
