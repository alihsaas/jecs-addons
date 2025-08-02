import type { Entity, Id, Query, Iter } from "@rbxts/jecs";

export type Observer<T extends unknown[]> = {
    iter: Iter<T>,
    entities: Entity[],
    disconnect: () => void,
} & Iter<T>;

export declare function observer<T extends unknown[]>(query: Query<T>, callback?: (e: Entity, c: Id, value: any) => void): Observer<T>;
export declare function monitor<T extends unknown[]>(query: Query<T>, callback?: (e: Entity, c: Id, value: any) => void): Observer<T>;
