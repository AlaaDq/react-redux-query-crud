import { AppRouterProvider, StoreProvider } from '../providers';
export const mergeProviders =
  (...providers) =>
  ({ children }) => {
    return providers.reduceRight(
      (child, Provider) => <Provider>{child}</Provider>,
      children
    );
  };

// register providers
export const AllProviders = mergeProviders(StoreProvider, AppRouterProvider);
