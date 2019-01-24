package com.akshara.mathapp.activity;

import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.graphics.Color;
import android.os.Bundle;
import android.text.Layout;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.widget.ImageButton;
import android.widget.LinearLayout;
import android.widget.PopupWindow;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.akshara.mathapp.R;
import com.akshara.mathapp.Utils;
import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.utils.AppConstants;
import com.akshara.mathapp.utils.AppUtils;
import com.akshara.mathapp.utils.DataParserUtil;
import com.akshara.mathapp.view.FontTextView;

import org.apache.cordova.CordovaActivity;

import java.util.Locale;

import butterknife.OnClick;

public class WebViewActivity extends CordovaActivity {

    public WebView cordovaWebView;
    Context context;
    User user;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        context = this;
        super.onCreate(savedInstanceState);
        super.init();
        //setContentView(R.layout.activity_web_view);

        if (getIntent().hasExtra(AppConstants.USER_EXTRA)) {
            user = getIntent().getParcelableExtra(AppConstants.USER_EXTRA);
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

        onButtonShowPopupWindowClick();

    }

    public void onButtonShowPopupWindowClick() {

        // inflate the layout of the popup window
        LayoutInflater inflater = (LayoutInflater)
                getSystemService(LAYOUT_INFLATER_SERVICE);

        final View popupView = inflater.inflate(R.layout.exit_popup, null);

        // create the popup window
        int width = ViewGroup.LayoutParams.MATCH_PARENT;
        int height = ViewGroup.LayoutParams.MATCH_PARENT;
        boolean focusable = false; // lets taps outside the popup also dismiss it
        final PopupWindow popupWindow = new PopupWindow(popupView, width, height, focusable);

        // show the popup window
        // which view you pass in doesn't matter, it is only used for the window tolken
        popupWindow.showAtLocation(cordovaWebView, Gravity.CENTER, 0, 0);
        popupWindow.setOutsideTouchable(false);


        //final ImageButton confirmBtn = popupView.findViewById(R.id.exitConfirm);
        //final ImageButton cancelBtn = popupView.findViewById(R.id.exitCancel);
        final FontTextView exitText = popupView.findViewById(R.id.exitText);
        final FontTextView confirmText = popupView.findViewById(R.id.exitConfirmText);
        final FontTextView cancelText = popupView.findViewById(R.id.exitCancelText);

        String languageToLoad = DataParserUtil.getLocaleCodeFromLanguageValue(user.getLanguage());
        if (languageToLoad != null) {
            Locale locale = new Locale(languageToLoad);
            Locale.setDefault(locale);
            Configuration config = new Configuration();
            config.locale = locale;
            getBaseContext().getResources().updateConfiguration(config,
                    getBaseContext().getResources().getDisplayMetrics());
        }

        exitText.setText(R.string.exitText);
        confirmText.setText(R.string.confirmText);
        cancelText.setText(R.string.cancelText);


        confirmText.setOnClickListener(new ImageButton.OnClickListener() {
            @Override
            public void onClick(View v) {
                WebViewActivity.this.finishAffinity();
            }
        });

        cancelText.setOnClickListener(new ImageButton.OnClickListener() {
            @Override
            public void onClick(View v) {
                popupWindow.dismiss();
            }
        });


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
