import type { Entity, Id, Query } from "@rbxts/jecs";

export declare function observer<T extends unknown[]>(query: Query<T>, callback?: (e: Entity, c: Id, value: any) => void): () => () => Entity;
export declare function monitor<T extends unknown[]>(query: Query<T>, callback?: (e: Entity, c: Id, value: any) => void): () => () => Entity;
