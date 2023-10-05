import { NewRequester } from "../Requester";
import { ObjectHelper } from "../../utils/ObjectHelper";
import { IAPIListState, IAPIOptions, IStatus } from "../../types/lib";
import { IListLoaderOptions, IListRunLoaderOptions } from "./loaderTypes";
import { ParamHelper } from "../../utils/ParamHelper";

export const apiListHelper = async <T, O>(
  state: () => IAPIListState<T>,
  onUpdateStatus: (status: IStatus) => void,
  onUpdateOptions: (options: IAPIOptions) => void,
  onUpdateItems: (data: T[]) => void,
  opts: IListLoaderOptions<T, O> & IListRunLoaderOptions<T, O>
) => {
  const timestamp = state().options._timestamp;

  if (opts.expire && timestamp) {
    if (timestamp + opts.expire > Date.now()) {
      onUpdateStatus(ObjectHelper.toCompleteStatus(state().status));

      return;
    }
  }

  onUpdateStatus(ObjectHelper.toLoadingStatus(state().status));
  onUpdateOptions({});

  const reqOptions = opts.getRequestOptions?.(opts) ?? {};

  reqOptions.params = ParamHelper.getParams(opts, reqOptions);

  try {
    if (opts.isMock) {
      const res: any = {
        data: opts.mockItems,
      };

      onUpdateItems(res.data);
      onUpdateStatus(ObjectHelper.toSuccessStatus(state().status));
    } else {
      const { data: items, status } = await NewRequester.get<T[]>(
        opts.getURL ? opts.getURL(opts) : opts.url,
        reqOptions
      );

      onUpdateItems(items);
      onUpdateStatus(ObjectHelper.toSuccessStatus(state().status));
      onUpdateOptions({
        _timestamp: Date.now(),
        _status: status,
        request: reqOptions,
      });
    }
  } catch (e: any) {
    onUpdateStatus(ObjectHelper.toErrorStatus(state().status, e));
    onUpdateOptions({
      _status: e.response?.status,
      request: reqOptions,
    });
  }

  onUpdateStatus(ObjectHelper.toCompleteStatus(state().status));
};
