package com.akshara.mathappG.activity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

import com.akshara.mathappG.Utils;
import com.akshara.mathappG.data.local.User;
import com.akshara.mathappG.utils.AppConstants;
import com.akshara.mathappG.utils.AppUtils;

import org.apache.cordova.CordovaActivity;

public class WebViewActivity extends CordovaActivity {

    public WebView cordovaWebView;
    Context context;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        context = this;
        super.onCreate(savedInstanceState);
        super.init();
        if (getIntent().hasExtra(AppConstants.USER_EXTRA)) {
            User user = getIntent().getParcelableExtra(AppConstants.USER_EXTRA);
            if (user == null)
                finish();

            //loadUrl(getUrl(user));

            cordovaWebView = (WebView) appView.getEngine().getView();
            cordovaWebView.getSettings().setJavaScriptEnabled(true);
            cordovaWebView.addJavascriptInterface(new WebAppInterface(WebViewActivity.this),"nativeApp");

            if (savedInstanceState == null) {
               cordovaWebView.loadUrl(getUrl(user));
            }
            else {
                cordovaWebView.restoreState(savedInstanceState);
            }


        } else {
            finish();
        }
    }


    private String getUrl(User user) {
        String deviceId = AppUtils.getDeviceUniqueId();
        String baseUrl = "file:///android_asset/www/index.html#";
        return baseUrl + "uid=" + user.getUid() + "?lang=" + user.getLanguage() + "?grade=" + user.getGrade()+ "?url=" + Utils.downloadGameFilesDirectoryFullPath
                + "?avatarName=" + user.getName() + "?deviceId=" + deviceId;
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        finish();
    }


    /*@Override
    public void onDestroy()
    {
        super.onDestroy();

        moveTaskToBack(true);
        finish();
        android.os.Process.killProcess(android.os.Process.myPid());
        System.exit(0);

    }*/



    @Override
    public void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        cordovaWebView.saveState(outState);
    }

    public class WebAppInterface {
        Context mContext;

        WebAppInterface(Context c) {
            mContext = c;
        }

        @JavascriptInterface
        public void CloseApp() {

            Intent i = new Intent(WebViewActivity.this, SplashActivity.class);
            startActivity(i);
            finish();

            moveTaskToBack(true);
            android.os.Process.killProcess(android.os.Process.myPid());
            System.exit(0);
        }

    }

}
