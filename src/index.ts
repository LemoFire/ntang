import { PACKAGE_VERSION } from "./config/version";

import * as Browser from "./Browser";
export * from "./Checker";
export * from "./Device";
export * from "./Encrypt/index";
export * from "./Identifier";
export * from "./Optimization";
export * from "./StringFilter";
export * from "./Time";
export * from "./Type";

export const useBrowser = () => Browser;

console.log(
  "%cNTANG toolkit " + PACKAGE_VERSION + " loaded | https://docs.ito.fun/ntang",
  "color:#fff; background: linear-gradient(270deg, #986fee, #8695e6, #68b7dd, #18d7d3); padding: 8px 15px; border-radius: 0 15px 0 15px"
);
