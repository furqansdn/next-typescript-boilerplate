import { Instance, SnapshotOut, types, applySnapshot } from 'mobx-state-tree';

import { createAppStoreDefaultModel } from '../app-store/app-store';

export const RootStoreModel = types
  .model('RootStore')
  .props({
    app: createAppStoreDefaultModel(),
  })
  .actions((self) => {
    return {};
  });

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
