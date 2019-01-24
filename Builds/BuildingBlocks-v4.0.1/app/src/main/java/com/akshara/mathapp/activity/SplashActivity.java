package com.akshara.mathapp.activity;

import android.content.Intent;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Window;

import com.akshara.mathapp.R;
import com.akshara.mathapp.utils.AppConstants;
import com.github.barteksc.pdfviewer.PDFView;

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
        navigateToMainScreen();
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
}

