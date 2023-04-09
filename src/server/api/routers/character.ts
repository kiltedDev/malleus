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
    .input(
      z.object({
        name: z.string(),
        homeland: z.string(),
        archetype: z.string(),
        faction: z.string(),
        notes: z.string(),
        playerName: z.string(),
        trainings: z.array(z.string()),
        talents: z.array(z.string()),
        trappings: z.array(z.string()),
        eventCount: z.number(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.character.create({
        data: {
          userId: ctx.session.user.id,
          archetype: input.archetype,
          eventCount: input.eventCount,
          faction: input.faction,
          homeland: input.homeland,
          name: input.name,
          notes: input.notes,
          playerName: input.playerName,
          talents: input.talents,
          trainings: input.trainings,
          trappings: input.talents,
        },
      });
    }),
});
