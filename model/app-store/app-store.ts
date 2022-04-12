import {
  Instance,
  SnapshotOut,
  types,
  applySnapshot,
  getRoot,
} from 'mobx-state-tree';

import { withEnvironment } from '../extensions/with-environment';

const SubMenu = types.model('SubMenu').props({
  key: types.optional(types.string, ''),
  label: types.optional(types.string, ''),
});
const ChildMenu = types.model('ChildMenu').props({
  key: types.optional(types.string, ''),
  label: types.optional(types.string, ''),
  child: types.optional(types.array(SubMenu), []),
});
const SourceMenu = types.model('SourceMenu').props({
  key: types.optional(types.string, ''),
  label: types.optional(types.string, ''),
  child: types.optional(types.array(ChildMenu), []),
});

export const AppStoreModel = types
  .model('AppStore')
  .props({
    isLoading: types.optional(types.boolean, false),
    isError: types.optional(types.boolean, false),
    msgError: types.optional(types.string, ''),
    selectedTab: types.optional(types.string, ''),
    token: types.optional(types.string, ''),
    npk: types.optional(types.string, ''),
    email: types.optional(types.string, ''),
    name: types.optional(types.string, ''),
    logout: types.optional(types.string, ''),
    // npkAdmin: types.optional(types.string, '16818'),
    menu: types.optional(types.array(SourceMenu), []),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    setLoading(value: boolean) {
      self.isLoading = value;
    },
    error(value: boolean, msg: string) {
      self.isError = value;
      self.msgError = msg;
    },
    handleGlobalState(data: any) {
      applySnapshot(self, { ...self, ...data });
    },

    clearState() {
      const { logout } = getRoot(self);
      logout();
    },
  }))
  .actions((self) => ({}));

type AppStoreType = Instance<typeof AppStoreModel>;
export interface AppStore extends AppStoreType {}
type AppStoreSnapshotType = SnapshotOut<typeof AppStoreModel>;
export interface AppStoreSnapshot extends AppStoreSnapshotType {}
export const createAppStoreDefaultModel = () =>
  types.optional(AppStoreModel, {});
