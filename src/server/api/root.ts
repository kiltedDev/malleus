import { characterRouter } from '@malleus/server/api/routers/character';
import { exampleRouter } from '@malleus/server/api/routers/example';
import { createTRPCRouter } from '@malleus/server/api/trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  character: characterRouter,
  example: exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
