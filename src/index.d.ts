import obs from "./observer";
import "./jecs";
export namespace jecsAddons {
  export const observer: obs;
  export type PatchedWorld = ReturnType<obs>;
}
