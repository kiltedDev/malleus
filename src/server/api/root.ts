import { archetypeRouter } from '@malleus/server/api/routers/archetype';
import { characterRouter } from '@malleus/server/api/routers/character';
import { exampleRouter } from '@malleus/server/api/routers/example';
import { talentRouter } from '@malleus/server/api/routers/talent';
import { trainingRouter } from '@malleus/server/api/routers/training';
import { createTRPCRouter } from '@malleus/server/api/trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  archetype: archetypeRouter,
  character: characterRouter,
  example: exampleRouter,
  training: trainingRouter,
  talent: talentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
