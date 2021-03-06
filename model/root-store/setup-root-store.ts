import { connectReduxDevtools } from 'mst-middlewares';
import { RootStoreModel, RootStore } from './root-store';
import { Environment } from '../environment';

/**
 * The key we'll be saving our state as within async storage.
 */

/**
 * Setup the environment that all the models will be sharing.
 *
 * The environment includes other functions that will be picked from some
 * of the models that get created later. This is how we loosly couple things
 * like events between models.
 */
export async function createEnvironment() {
  const env = new Environment();
  return env;
}

/**
 * Setup the root state.
 */
export async function setupRootStore() {
  let rootStore: RootStore;

  // prepare the environment that will be associated with the RootStore.
  const env = await createEnvironment();
  try {
    // load data from storage
    // data = (await storage.load(ROOT_STATE_STORAGE_KEY)) || {}
    rootStore = RootStoreModel.create({}, env);
  } catch (e) {
    // if there's any problems loading, then let's at least fallback to an empty state
    // instead of crashing.
    rootStore = RootStoreModel.create({}, env);

    // but please inform us what happened
    // __DEV__ && console.tron.error(e.message, null)
  }

  // reactotron logging
  // if (__DEV__) {
  // env.reactotron.setRootStore(rootStore, data)
  // }

  // Redux devtools
  if (process.env.NODE_ENV !== 'production') {
    connectReduxDevtools(require('remotedev'), rootStore);
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return rootStore;

  // track changes & save to storage
  // onSnapshot(rootStore, (snapshot) => storage.save(ROOT_STATE_STORAGE_KEY, snapshot))

  return rootStore;
}
