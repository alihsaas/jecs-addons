import "./jecs";
import observer from "./observers";

namespace JecsAddons {
  /**
   * The observer world returned when constructing the observer.
   */
  export type ObserverWorld = ReturnType<typeof observer>;
  /**
   * Adds the observer functionality to the Jecs namespace.
   * This allows you to use the observer pattern for world updates.
   */
  export const observer_add: typeof observer = observer;
}

export = JecsAddons;
