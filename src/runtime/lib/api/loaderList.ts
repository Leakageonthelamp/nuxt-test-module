import { UnwrapRef, ref } from "vue";
import { ObjectHelper } from "../../utils/ObjectHelper";
import { apiListHelper } from "./apiListHelper";
import {
  IListLoaderOptions,
  IListRunLoaderOptions,
  IUseListLoader,
} from "./loaderTypes";
import { IAPIOptions, IStatus } from "../../types/lib";

export const useListLoader = <T = any, O = Record<string, any>>(
  loaderOptions: IListLoaderOptions<T, O>
): IUseListLoader<T, O> => {
  const status = ref<IStatus>(ObjectHelper.createStatus());
  const items = ref<T[]>([]);
  const options = ref<IAPIOptions>({});

  const clear = () => {
    status.value = ObjectHelper.createStatus();
    items.value = [];
  };

  const run = async (opts?: IListRunLoaderOptions<T, O>) => {
    return apiListHelper<T, O>(
      () => ({
        status: status.value,
        items: items.value as T[],
        options: options.value,
      }),
      (_data) => {
        status.value = _data;
      },
      (_data) => {
        options.value = _data;
      },
      (_data) => {
        items.value = _data as UnwrapRef<T[]>;
      },
      {
        ...loaderOptions,
        ...opts,
      }
    );
  };

  const setLoading = () => {
    status.value = ObjectHelper.toLoadingStatus(status.value);
  };

  const setItems = (_items: T[]) => {
    items.value = _items as any[];
  };

  return {
    items,
    status,
    options,
    run,
    clear,
    setItems,
    setLoading,
  };
};
