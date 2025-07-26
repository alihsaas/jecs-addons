/* eslint-disable prettier/prettier */
import type { Entity, Id, Query, World } from "@rbxts/jecs";

interface ObservableWorld extends World {
    /**
     * Registers a callback for when an entity with the specified component is added.
     * @param callback - The function to call when an entity is added.
     * @returns A function to unregister the callback.
     */
    added<T>(this: ObservableWorld, component: Id<T>, callback: (e: Entity, id: Id<T>, value?: T) => void): () => void;
    /**
     * Registers a callback for when an entity with the specified component is removed.
     * @param callback - The function to call when an entity is removed.
     * @returns A function to unregister the callback.
     */
    removed<T>(this: ObservableWorld, component: Id<T>, callback: (e: Entity, id: Id<T>) => void): () => void;
    /**
     * Registers a callback for when an entity with the specified component is changed.
     * @param callback - The function to call when an entity is changed.
     * @returns A function to unregister the callback.
     */
    changed<T>(this: ObservableWorld, component: Id<T>, callback: (e: Entity, id: Id<T>, value?: T) => void): () => void;
    observer<T extends unknown[]>(this: ObservableWorld, query: Query<T>, callback?: (e: Entity, c: Id, value?: any) => void): () => () => Entity;
    monitor<T extends unknown[]>(this: ObservableWorld, query: Query<T>, callback?: (e: Entity, c: Id, value?: any) => void): () => () => Entity;
}

type Observers = (world: World) => ObservableWorld;

declare const observers: Observers;

export = observers;
