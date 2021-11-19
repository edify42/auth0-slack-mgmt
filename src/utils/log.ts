import * as logger from 'debug';
export const log: typeof console.log = console.log;
export const error: typeof console.error = console.error;
export const debug: typeof console.debug = console.debug;
export const namespacedLogger = logger.debug;