package com.akshara.mathappG.events.networkevents;

import com.akshara.mathappG.models.BaseModel;
import com.akshara.mathappG.models.NetworkErrorModel;
import com.akshara.mathappG.models.RequestModel;

/**
 * Created by Rajeef on 17/1/18
 */

public class UpdateUserEvent extends BaseNetworkEvent {

    public static class OnLoadingStart extends OnStart<RequestModel> {
        public OnLoadingStart(RequestModel requestModel) {
            super(requestModel);
        }
    }

    public static class OnLoadingFinished extends OnDone<BaseModel> {
        public OnLoadingFinished(BaseModel mBaseModel) {
            super(mBaseModel);
        }
    }

    public static class OnLoadingError extends OnLoadingFailed {
        public OnLoadingError(NetworkErrorModel errorModel) {
            super(errorModel);
        }
    }
}
