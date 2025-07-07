import "./jecs";
import observer from "./observers";

namespace JecsAddons {
  export type ObserverWorld = ReturnType<typeof observer>;
  export const observers: typeof observer = observer;
}

export = JecsAddons;
