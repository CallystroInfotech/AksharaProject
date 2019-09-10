package com.akshara.mathapp.activity;

import android.app.PendingIntent;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.text.SpannableString;
import android.text.style.RelativeSizeSpan;
import android.util.Log;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.widget.ImageButton;
import android.widget.PopupWindow;
import android.widget.Toast;

import com.akshara.mathapp.ApplicationSelectorReceiver;
import com.akshara.mathapp.BuildConfig;
import com.akshara.mathapp.FirebaseDatabaseStore;
import com.akshara.mathapp.MathApp;
import com.akshara.mathapp.R;
import com.akshara.mathapp.SendMail;
import com.akshara.mathapp.Utils;
import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.utils.AppConstants;
import com.akshara.mathapp.utils.AppUtils;
import com.akshara.mathapp.utils.DataParserUtil;
import com.akshara.mathapp.utils.MsgUtils;
import com.akshara.mathapp.utils.NetworkUtil;
import com.akshara.mathapp.view.FontTextView;
import com.codemybrainsout.ratingdialog.RatingDialog;
import com.google.firebase.analytics.FirebaseAnalytics;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import org.apache.cordova.CordovaActivity;

import java.util.Locale;

public class WebViewActivity extends CordovaActivity {

    public WebView cordovaWebView;
    Context context;
    User user;
    public float ratingGiven = 0f;
    public View popupView;
    public String shareScreenPage = null;
    private static ProgressDialog progressDialog;

    private boolean userProgress;
    private FirebaseAnalytics mFirebaseAnalytics;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        context = this;
        super.onCreate(savedInstanceState);
        super.init();

        mFirebaseAnalytics = FirebaseAnalytics.getInstance(this);
        userProgress = getIntent().getBooleanExtra("userProgress",false);
        //setContentView(R.layout.activity_web_view);



        boolean notify = getIntent().getBooleanExtra("sentFromNotify",false);

        Log.e("hai","hehejhejehjih"+notify);

        final Bundle si = savedInstanceState;

        if (getIntent().hasExtra(AppConstants.USER_EXTRA)) {
                user = getIntent().getParcelableExtra(AppConstants.USER_EXTRA);
                if (user == null)
                    finish();

                //loadUrl(getUrl(user));

                cordovaWebView = (WebView) appView.getEngine().getView();
                //cordovaWebView.setTag("com.userexperior.dontmask");
                //cordovaWebView = findViewById(R.id.tutorialView);
                cordovaWebView.getSettings().setJavaScriptEnabled(true);
                cordovaWebView.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
                cordovaWebView.addJavascriptInterface(new WebAppInterface(WebViewActivity.this), "nativeApp");
                if (savedInstanceState == null) {
                    cordovaWebView.loadUrl(getUrl(user));
                    user.setLastUser(true);
                    new Thread(new Runnable() {
                        @Override
                        public void run() {
                            MathApp.get().getLocalDb().userDao().updateUsers(user);
                        }
                    }).start();
                } else {
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
                    + "?avatarName=" + user.getName() + "?deviceId=" + deviceId + "?userProgress=" + userProgress;

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
        //Log.e("saved","saved");
        cordovaWebView.saveState(outState);
    }



    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        // Check which request we're responding to
        if (requestCode == 1) {
            // Make sure the request was successful
            if (resultCode == RESULT_OK) {
                // The user pressed ok
                Log.e("data",""+data);
                /*Bundle senttoPSbundle = new Bundle();
                senttoPSbundle.putString("Sent_to_playstore_value","");
                mFirebaseAnalytics.logEvent("Sent_to_playstore",senttoPSbundle);*/

            }else{
                // The user pressed cancel
                Log.e("data2",""+data);

                Bundle shareappClosed = new Bundle();
                shareappClosed.putString("Share_app_closed_value","");
                mFirebaseAnalytics.logEvent("Share_app_closed",shareappClosed);

            }
        }
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
        public void CallUserProgress() {

            MsgUtils.displayToast(WebViewActivity.this, R.string.error_message_no_internet);

        }

        @JavascriptInterface
        public void CallUserProgressFetchError() {

            MsgUtils.displayToast(WebViewActivity.this, "Error while fetching user data");

        }

        @JavascriptInterface
        public void CallUserProgressBeforeFEtchingData() {

            MsgUtils.displayToast(WebViewActivity.this, "Please Wait...");

        }


        @JavascriptInterface
        public void ShareApp() {
            //Log.e("hai","hjgggiughuihuik");

            Log.e("page",""+shareScreenPage);

            Bundle shareapp = new Bundle();
            shareapp.putString("Share_button_clicked_value",""+shareScreenPage);
            mFirebaseAnalytics.logEvent("Share_button_clicked",shareapp);

            new Handler(Looper.getMainLooper()).postDelayed(new Runnable() {
                        @Override
                        public void run() {
                            Log.d("UI thread", "I am the UI thread");
                            Intent intent = new Intent(Intent.ACTION_SEND);
                            intent.setType("text/plain");

                            intent.putExtra(Intent.EXTRA_SUBJECT, "Building Blocks");
                            intent.putExtra(Intent.EXTRA_TEXT, "Check out this Amazing app \"Building Blocks\",  that can help your child studying in class 1-5 learn Mathematics in the most amazing way, Download the android app now: http://bit.ly/Building_blocks_download");
                            Intent receiver = new Intent(WebViewActivity.this, ApplicationSelectorReceiver.class);
                            PendingIntent pendingIntent = PendingIntent.getBroadcast(WebViewActivity.this, 0, receiver, PendingIntent.FLAG_UPDATE_CURRENT);
                            //Intent chooser = Intent.createChooser(sendIntent, null, pendingIntent.getIntentSender());

                            if (android.os.Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP_MR1){
                                Intent chooser = Intent.createChooser(intent, "Building Blocks", pendingIntent.getIntentSender());
                                startActivityForResult(chooser,1);
                            }
                            else
                            {
                                Intent chooser = Intent.createChooser(intent, "Building Blocks");
                                startActivityForResult(chooser,1);
                            }

                        }
                    },100);
        }


        @JavascriptInterface
        public void RateApp() {
            //flag = false;
            if(AppConstants.FEEDBACK_STATUS == false)
            {
                if (!NetworkUtil.getConnectivityStatusString(WebViewActivity.this)) {
                    String s = "DO YOU LIKE OUR APP? \n Give us a quick rating so we know if you like it.";
                    SpannableString ss1 = new SpannableString(s);
                    ss1.setSpan(new RelativeSizeSpan(1.1f), 0, 20, 0); // set size
                    ss1.setSpan(new RelativeSizeSpan(0.8f), 20, 71, 0);

                    final RatingDialog ratingDialog = new RatingDialog.Builder(WebViewActivity.this)
                            .threshold(8)
                            .title(String.valueOf(ss1))
                            .titleTextColor(R.color.black)
                            .ratingBarColor(R.color.yellow)
                            .playstoreUrl("https://play.google.com/store/apps/details?id=com.akshara.easymath&hl=en")
                            .onThresholdCleared(new RatingDialog.Builder.RatingThresholdClearedListener() {
                                @Override
                                public void onThresholdCleared(RatingDialog ratingDialog, float rating, boolean thresholdCleared) {
                                    //do something
                                    ratingDialog.dismiss();
                                    MsgUtils.displayToast(WebViewActivity.this, R.string.error_message_no_internet);
                                    RateApp();
                                }
                            })
                            .onThresholdFailed(new RatingDialog.Builder.RatingThresholdFailedListener() {
                                @Override
                                public void onThresholdFailed(RatingDialog ratingDialog, float rating, boolean thresholdCleared) {
                                    //do something
                                    ratingDialog.dismiss();
                                    MsgUtils.displayToast(WebViewActivity.this, R.string.error_message_no_internet);
                                    RateApp();
                                }
                            }).build();
                    ratingDialog.show();
                    ratingDialog.setCancelable(false);
                    ratingDialog.getIconImageView().setVisibility(View.GONE);
                    ratingDialog.getTitleTextView().setText(ss1);
                    ratingDialog.getTitleTextView().setLineSpacing(1.2f, 1.2f);
                }
                else {
                    DatabaseReference mDatabaseReference = FirebaseDatabase.getInstance().getReference("feedbacks");
                    //Query query =  mDatabaseReference.orderByChild("deviceID").equalTo(user.getDeviceId());

                    mDatabaseReference.addValueEventListener(new ValueEventListener() {
                        @Override
                        public void onDataChange(DataSnapshot dataSnapshot) {
                            for (DataSnapshot feedbacks : dataSnapshot.getChildren()) {
                                //Log.e("feedbacks",""+feedbacks.getKey());
                                if (user.getDeviceId().equals(feedbacks.getKey())) {
                                    //Log.e("feedbacks","yo"+feedbacks.getKey());
                                    return;
                                }
                            }

                            ratingGiven = 0f;
                            String s = "DO YOU LIKE OUR APP? \n Give us a quick rating so we know if you like it.";
                            SpannableString ss1 = new SpannableString(s);
                            ss1.setSpan(new RelativeSizeSpan(1.1f), 0, 20, 0); // set size
                            ss1.setSpan(new RelativeSizeSpan(0.8f), 20, 71, 0);
                            final RatingDialog ratingDialog = new RatingDialog.Builder(WebViewActivity.this)
                                    .threshold(4)
                                    .title(String.valueOf(ss1))
                                    .titleTextColor(R.color.black)
                                    .ratingBarColor(R.color.yellow)
                                    .playstoreUrl("https://play.google.com/store/apps/details?id=com.akshara.easymath&hl=en")
                                    .onThresholdCleared(new RatingDialog.Builder.RatingThresholdClearedListener() {
                                        @Override
                                        public void onThresholdCleared(RatingDialog ratingDialog, float rating, boolean thresholdCleared) {
                                            //do something
                                            final RatingDialog rtd = ratingDialog;
                                            final Handler handler = new Handler();
                                            handler.postDelayed(new Runnable() {
                                                @Override
                                                public void run() {
                                                    //Do something after 100ms
                                                    openPlaystore(WebViewActivity.this);
                                                    rtd.dismiss();
                                                    Toast.makeText(WebViewActivity.this, "Thank you, Please Rate us on the Playstore", Toast.LENGTH_LONG).show();

                                                }
                                            }, 50);

                                        }
                                    })
                                    .onRatingChanged(new RatingDialog.Builder.RatingDialogListener() {
                                        @Override
                                        public void onRatingSelected(float rating, boolean thresholdCleared) {

                                            Bundle ratingGivenbundle = new Bundle();
                                            ratingGivenbundle.putString("Rating_value","Yes_rating_given-"+rating);
                                            mFirebaseAnalytics.logEvent("Rating_value",ratingGivenbundle);

                                            if (thresholdCleared) {
                                                user.setFeedbackStatus(true);
                                                new Thread(new Runnable() {
                                                    @Override
                                                    public void run() {
                                                        MathApp.get().getLocalDb().userDao().updateUsers(user);
                                                    }
                                                }).start();
                                                FirebaseDatabaseStore firebaseDatabaseStore = new FirebaseDatabaseStore("rated in playstore", rating, user.getDeviceId());
                                                Bundle senttoPSbundle = new Bundle();
                                                senttoPSbundle.putString("Sent_to_playstore_value","");
                                                mFirebaseAnalytics.logEvent("Sent_to_playstore",senttoPSbundle);
                                            } else {
                                                ratingGiven = rating;

                                            }
                                        }
                                    })
                                    .onRatingBarFormSumbit(new RatingDialog.Builder.RatingDialogFormListener() {
                                        @Override
                                        public void onFormSubmitted(String feedback) {
                                            user.setFeedbackStatus(true);
                                            new Thread(new Runnable() {
                                                @Override
                                                public void run() {
                                                    MathApp.get().getLocalDb().userDao().updateUsers(user);
                                                }
                                            }).start();
                                            Log.e("name",""+user.getName());
                                            Log.e("feedback",""+user.getFeedbackStatus());
                                            FirebaseDatabaseStore firebaseDatabaseStore = new FirebaseDatabaseStore(feedback, ratingGiven, user.getDeviceId());
                                            sendEmail(ratingGiven, user.getDeviceId(), feedback);

                                            Bundle feedbackSubmitbundle = new Bundle();
                                            feedbackSubmitbundle.putString("Feedback_submitted_value",""+feedback);
                                            mFirebaseAnalytics.logEvent("Feedback_submitted",feedbackSubmitbundle);

                                            Toast.makeText(WebViewActivity.this, "Thank you for your feedback", Toast.LENGTH_LONG).show();
                                        }
                                    }).build();

                            ratingDialog.show();
                            ratingDialog.getIconImageView().setVisibility(View.GONE);
                            ratingDialog.getTitleTextView().setText(ss1);
                            ratingDialog.getTitleTextView().setLineSpacing(1.2f, 1.2f);
                            ratingDialog.getPositiveButtonTextView().setOnClickListener(new View.OnClickListener() {
                                @Override
                                public void onClick(View v) {
                                    Bundle maybelaterbundle = new Bundle();
                                    maybelaterbundle.putString("Rating_pop_up_Canceled_value","No_maybelater");
                                    mFirebaseAnalytics.logEvent("Rating_pop_up_Canceled",maybelaterbundle);
                                    ratingDialog.dismiss();
                                }
                            });
                            ratingDialog.getFormCancelTextView().setOnClickListener(new View.OnClickListener() {
                                @Override
                                public void onClick(View v) {
                                    Bundle formcancelbundle = new Bundle();
                                    formcancelbundle.putString("Feedback_screen_canceled_value","Form_canceled");
                                    mFirebaseAnalytics.logEvent("Feedback_screen_canceled",formcancelbundle);
                                    ratingDialog.dismiss();
                                }
                            });

                            Bundle showratingbundle = new Bundle();
                            showratingbundle.putString("Rate_us_popup_value","Popup_shown");
                            mFirebaseAnalytics.logEvent("Rate_us_popup",showratingbundle);

                        }

                        @Override
                        public void onCancelled(DatabaseError databaseError) {

                        }
                    });
                }
            }

            //Toast.makeText(mContext, ""+query, Toast.LENGTH_SHORT).show();


        }


        private void openPlaystore(Context context) {
            final Uri marketUri = Uri.parse("market://details?id="+ context.getPackageName());
            try {
                context.startActivity(new Intent(Intent.ACTION_VIEW, marketUri));
            } catch (android.content.ActivityNotFoundException ex) {
                Toast.makeText(context, "Couldn't find PlayStore on this device", Toast.LENGTH_SHORT).show();
            }
        }

        private void sendEmail(float rating, String deviceID, String feedback) {

            ConnectivityManager cm = (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
            NetworkInfo activeNetwork = cm.getActiveNetworkInfo();

            String msg = "App Version Code - "+ BuildConfig.VERSION_CODE +"\n App Version name - "+ BuildConfig.VERSION_NAME +"\n Android version - "+android.os.Build.VERSION.RELEASE +
                    "\n Device Manufacturer And Model- "+getDeviceName()+"\n Network - "+activeNetwork.getTypeName()+"\n Language Selected - "+user.getLanguage()+"\n Rating - "+rating+"\n Feedback - "+feedback;

            Log.e("masg",""+msg);

            //Creating SendMail object
            SendMail sm = new SendMail(WebViewActivity.this, AppConstants.TO_EMAIL, AppConstants.TO_EMAIL_CC, AppConstants.TO_EMAIL_CC2,"Building Blocks Feedback - "+deviceID, ""+msg);

            //Executing sendmail to send email
            sm.execute();
        }

        public String getDeviceName() {
            String manufacturer = Build.MANUFACTURER;
            String model = Build.MODEL;
            if (model.toLowerCase().startsWith(manufacturer.toLowerCase())) {
                return capitalize(model);
            } else {
                return capitalize(manufacturer) + " " + model;
            }
        }


        private String capitalize(String s) {
            if (s == null || s.length() == 0) {
                return "";
            }
            char first = s.charAt(0);
            if (Character.isUpperCase(first)) {
                return s;
            } else {
                return Character.toUpperCase(first) + s.substring(1);
            }
        }

        @JavascriptInterface
        public void screenViewStringPass(String message1,String message2){

            Log.i("From JS msg1",""+message1);

            shareScreenPage = message1;

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

            if (popupView == null) {
                popupView = inflater.inflate(R.layout.exit_popup, null);

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
                        popupView = null;
                    }
                });


            }
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
