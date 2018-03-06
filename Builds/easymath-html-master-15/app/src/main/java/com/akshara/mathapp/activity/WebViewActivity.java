package com.akshara.mathapp.activity;

import android.os.Bundle;

import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.utils.AppConstants;

import org.apache.cordova.CordovaActivity;

public class WebViewActivity extends CordovaActivity {


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.init();
        if (getIntent().hasExtra(AppConstants.USER_EXTRA)) {
            User user = getIntent().getParcelableExtra(AppConstants.USER_EXTRA);
            if (user == null)
                finish();
            loadUrl(getUrl(user));
        } else {
            finish();
        }
    }

    private String getUrl(User user) {
        String baseUrl = "file:///android_asset/www/index.html#";
        return baseUrl + "uid=" + user.getUid() + "?lang=" + user.getLanguage() + "?grade=" + user.getGrade();
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        finish();
    }

}
