import { createTRPCRouter, protectedProcedure } from '@malleus/server/api/trpc';
import { z } from 'zod';

export const archetypeRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.archetype.findMany();
  }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        income: z.number(),
        features: z.string(),
        trainingIncrease: z.number(),
        upkeepIncrease: z.number(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.archetype.create({
        data: {
          name: input.name,
          description: input.description,
          features: input.features,
          income: input.income,
          trainingIncrease: input.trainingIncrease,
          upkeepIncrease: input.upkeepIncrease,
        },
      });
    }),
});
