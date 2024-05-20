import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { CounterModel } from "./Counter";
import { CounterAppStoreModel } from "./CounterAppStore";

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  counterStore: types.optional(CounterModel, {}),
  counterAppStore: types.optional(CounterAppStoreModel, {}),
});

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
