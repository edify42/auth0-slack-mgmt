import { namespacedLogger, log } from "../utils/log"
namespacedLogger('handler')
export const handler = () => {
  log("Received slack handler")
  return {
    statusCode: 200,
    body: '',
  };
} 