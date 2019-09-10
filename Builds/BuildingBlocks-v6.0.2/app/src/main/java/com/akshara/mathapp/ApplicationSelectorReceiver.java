package com.akshara.mathapp;

import android.content.BroadcastReceiver;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.util.Log;

import com.google.firebase.analytics.FirebaseAnalytics;

import java.util.Objects;

public class ApplicationSelectorReceiver extends BroadcastReceiver {
    private FirebaseAnalytics mFirebaseAnalytics;
    @Override
    public void onReceive(Context context, Intent intent) {
        for (String key : Objects.requireNonNull(intent.getExtras()).keySet()) {
            try {
                ComponentName componentInfo = (ComponentName) intent.getExtras().get(key);
                PackageManager packageManager = context.getPackageManager();
                assert componentInfo != null;
                String appName = (String) packageManager.getApplicationLabel(packageManager.getApplicationInfo(componentInfo.getPackageName(), PackageManager.GET_META_DATA));
                Log.e("Selected app", ""+appName);
                mFirebaseAnalytics = FirebaseAnalytics.getInstance(context);
                Bundle appchoosed = new Bundle();
                appchoosed.putString("Share_App_Choosed_value",""+appName);
                mFirebaseAnalytics.logEvent("Share_App_Choosed",appchoosed);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
