package com.akshara.mathapp.activity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.Window;

import androidx.appcompat.app.AppCompatActivity;

import com.akshara.mathapp.R;
import com.akshara.mathapp.utils.AppUtils;
import com.github.barteksc.pdfviewer.PDFView;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.iid.InstanceIdResult;
import com.google.firebase.messaging.FirebaseMessaging;
//import com.userexperior.UserExperior;

import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;


public class SplashActivity extends AppCompatActivity {

    PDFView splashpdf;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);//will hide the title not the title bar
        setContentView(R.layout.activity_splash);

        splashpdf = findViewById(R.id.splashScreenPdf);
        splashpdf.fromAsset("splash.pdf").load();
        splashpdf.setEnabled(false);

        //Toast.makeText(this, "yyyyyyyyyyyyyyyyyyyy", Toast.LENGTH_SHORT).show();

        //UserExperior.startRecording(getApplicationContext(), "a0056935-c7ca-4dd5-af97-85e4d08d7b2c");
        //UXCam.startWithKey("p34h7xcb3dmhf3u");

        //disableSSLCertificateChecking();
        subscribeToPushService();

        //Log.e("device id",""+ AppUtils.getDeviceUniqueId());


        //Crashlytics.getInstance().crash();

        if (getIntent().getExtras() != null) {

            for (String key : getIntent().getExtras().keySet()) {
                String value = getIntent().getExtras().getString(key);

                if (key.equals("AnotherActivity") && value.equals("True")) {
                    Intent intent = new Intent(this, StartGameActivity.class);
                    intent.putExtra("value", value);
                    intent.putExtra("sentFromNotify", true);
                    startActivity(intent);
                    finish();
                }
            }
        }//else
        //{
            navigateToMainScreen();
        //}


    }

    private void subscribeToPushService() {
        FirebaseMessaging.getInstance().subscribeToTopic("BuildingBlocks-V6.0.1");

        //Log.d("AndroidBash", "Subscribed");
        //Toast.makeText(SplashActivity.this, "Subscribed", Toast.LENGTH_SHORT).show();

        //String token = FirebaseInstanceId.getInstance().getToken();

        // Log and toast
        //Log.e("AndroidBash", ""+token);
        //Toast.makeText(SplashActivity.this, token, Toast.LENGTH_SHORT).show();

        FirebaseInstanceId.getInstance().getInstanceId().addOnSuccessListener( new OnSuccessListener<InstanceIdResult>() {
            @Override
            public void onSuccess(InstanceIdResult instanceIdResult) {
                String deviceToken = instanceIdResult.getToken();
                // Do whatever you want with your token now
                // i.e. store it on SharedPreferences or DB
                // or directly send it to server
                //Log.e("token",""+deviceToken);
            }
        });
    }

    void navigateToMainScreen() {
        final Handler handler = new Handler();
        handler.postDelayed(new Runnable() {
            @Override
            public void run() {
                //Intent i = new Intent(SplashActivity.this, ImageLoginActivity.class);
                Intent i = new Intent(SplashActivity.this, PermissionActivity.class);
                startActivity(i);
                finish();
                handler.removeCallbacks(this);
            }
        }, 2000);
    }

    /**
     * Disables the SSL certificate checking for new instances of {@link HttpsURLConnection} This has been created to
     * aid testing on a local box, not for use on production.
     */
    private static void disableSSLCertificateChecking() {
        TrustManager[] trustAllCerts = new TrustManager[] { new X509TrustManager() {
            public X509Certificate[] getAcceptedIssuers() {
                return null;
            }

            @Override
            public void checkClientTrusted(X509Certificate[] arg0, String arg1) throws CertificateException {
                // Not implemented
            }

            @Override
            public void checkServerTrusted(X509Certificate[] arg0, String arg1) throws CertificateException {
                // Not implemented
            }
        } };

        try {
            SSLContext sc = SSLContext.getInstance("TLS");

            sc.init(null, trustAllCerts, new java.security.SecureRandom());

            HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
        } catch (KeyManagementException e) {
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
    }
}

