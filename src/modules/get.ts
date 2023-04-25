import { Providers } from "@Providers";
import { HigherRequest } from "@woen4/higher";

export const handle = (ctx: Providers, request: HigherRequest) => {
  return "Hello Higher";
};
