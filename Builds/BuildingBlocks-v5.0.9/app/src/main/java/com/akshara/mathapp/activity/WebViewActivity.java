package com.akshara.mathapp.activity;

import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.graphics.Color;
import android.os.Bundle;
import android.text.Layout;
import android.text.SpannableString;
import android.text.style.RelativeSizeSpan;
import android.util.Log;
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

import com.akshara.mathapp.FirebaseDatabaseStore;
import com.akshara.mathapp.R;
import com.akshara.mathapp.SendMail;
import com.akshara.mathapp.Utils;
import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.utils.AppConstants;
import com.akshara.mathapp.utils.AppUtils;
import com.akshara.mathapp.utils.DataParserUtil;
import com.akshara.mathapp.view.FontTextView;
import com.codemybrainsout.ratingdialog.RatingDialog;
import com.google.firebase.analytics.FirebaseAnalytics;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.Query;

import org.apache.cordova.CordovaActivity;

import java.util.Locale;

import butterknife.OnClick;

public class WebViewActivity extends CordovaActivity {

    public WebView cordovaWebView;
    Context context;
    User user;
    public float ratingGiven = 0f;

    private FirebaseAnalytics mFirebaseAnalytics;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        context = this;
        super.onCreate(savedInstanceState);
        super.init();

        mFirebaseAnalytics = FirebaseAnalytics.getInstance(this);

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

            /*Intent i = new Intent(WebViewActivity.this, SplashActivity.class);
            startActivity(i);
            finish();

            moveTaskToBack(true);
            android.os.Process.killProcess(android.os.Process.myPid());
            System.exit(0);*/
            //WebViewActivity.this.finishAffinity();
        }

        @JavascriptInterface
        public void RateApp() {

            /*Intent intent = new Intent(Intent.ACTION_SEND);
            intent.setType("text/plain");

            intent.putExtra(Intent.EXTRA_SUBJECT, "Building Blocks");
            intent.putExtra(Intent.EXTRA_TEXT, "Check out this cool app https://play.google.com/store/apps/details?id=com.akshara.easymath&hl=en");

            Intent chooser = Intent.createChooser(intent, "Building Blocks");
            startActivity(chooser);*/

            //sendEmail();
            //DatabaseReference mDatabaseReference = FirebaseDatabase.getInstance().getReference("feedbacks");
            //Query query =  mDatabaseReference.orderByChild("deviceID").equalTo(user.getDeviceId());

            //Toast.makeText(mContext, ""+query, Toast.LENGTH_SHORT).show();

            ratingGiven = 0f;
            String s= "DO YOU LIKE OUR APP? \n Give us a quick rating so we know if you like it.";
            SpannableString ss1=  new SpannableString(s);
            ss1.setSpan(new RelativeSizeSpan(1.1f), 0,20, 0); // set size
            ss1.setSpan(new RelativeSizeSpan(0.8f), 20,71, 0);
            final RatingDialog ratingDialog = new RatingDialog.Builder(WebViewActivity.this)
                    .threshold(3)
                    .title(String.valueOf(ss1))
                    .titleTextColor(R.color.black)
                    .ratingBarColor(R.color.yellow)
                    .playstoreUrl("https://play.google.com/store/apps/details?id=com.akshara.easymath&hl=en")
                    .onRatingChanged(new RatingDialog.Builder.RatingDialogListener() {
                        @Override
                        public void onRatingSelected(float rating, boolean thresholdCleared) {
                            if(thresholdCleared){
                                FirebaseDatabaseStore firebaseDatabaseStore = new FirebaseDatabaseStore("rated in playstore",rating, user.getDeviceId());
                            }
                            else
                            {
                                ratingGiven = rating;
                            }
                        }
                    })
                    .onRatingBarFormSumbit(new RatingDialog.Builder.RatingDialogFormListener() {
                        @Override
                        public void onFormSubmitted(String feedback) {
                            FirebaseDatabaseStore firebaseDatabaseStore = new FirebaseDatabaseStore(feedback, ratingGiven, user.getDeviceId());
                        }
                    }).build();

            ratingDialog.show();
            ratingDialog.getIconImageView().setVisibility(View.GONE);
            ratingDialog.getTitleTextView().setText(ss1);
            ratingDialog.getTitleTextView().setLineSpacing(1.2f,1.2f);


        }

        private void sendEmail() {
            //Creating SendMail object
            SendMail sm = new SendMail(WebViewActivity.this, AppConstants.TO_EMAIL, "Feedbacks", "feedback");

            //Executing sendmail to send email
            sm.execute();
        }

        @JavascriptInterface
        public void screenViewStringPass(String message1,String message2){

            Log.i("From JS",""+message1);

           /* Bundle param = new Bundle();
            param.putString("from_index",""+message);
            mFirebaseAnalytics.logEvent("from_indexJS",param);*/
            //mFirebaseAnalytics.setCurrentScreen(WebViewActivity.this ,"Pradeep",message);
            //mFirebaseAnalytics.setCurrentScreen(WebViewActivity.this ,message,"cally");
            //Toast.makeText(context,message,Toast.LENGTH_SHORT).show();
            toTestCurrentScreen(message1,message2);
        }
        @JavascriptInterface
        public void selectModeType(String message){
            //Toast.makeText(context,message,Toast.LENGTH_SHORT).show();
            Bundle param = new Bundle();
            param.putString("Select_mode_type_value",""+message);
            mFirebaseAnalytics.logEvent("Select_mode_type",param);
        }
        @JavascriptInterface
        public void startPracticeActivity(String gameName)
        {
            Bundle param = new Bundle();
            param.putString("Select_practice_avty_val",""+gameName);
            mFirebaseAnalytics.logEvent("Select_practice_activity",param);
        }
        @JavascriptInterface
        public void startChallengeActivity(String gameId)
        {
            Bundle param = new Bundle();
            param.putString("Select_chal_avty_val",""+gameId);
            mFirebaseAnalytics.logEvent("Select_challenge_activity",param);
        }
        @JavascriptInterface
        public void finishPracticeActivity(String temp)
        {
            Bundle param = new Bundle();
            param.putString("Finish_practice_acty_val",""+temp);
            mFirebaseAnalytics.logEvent("Finish_practice_activity",param);
        }
        @JavascriptInterface
        public void finishChallengeActivity(String temp)
        {
            Bundle param = new Bundle();
            param.putString("Finish_chal_acty_val",""+temp);
            mFirebaseAnalytics.logEvent("Finish_Challenge_activity",param);
        }

        @JavascriptInterface
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


    }

    public void toTestCurrentScreen(final String message1,final String message2) {
        Log.i("toTestCurrentFunction", "" + message1);

        WebViewActivity.this.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                mFirebaseAnalytics.setCurrentScreen(WebViewActivity.this, ""+message2, ""+message1);
            }
        });

    }




}
