package com.akshara.mathapp.activity;

import android.content.Intent;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Window;

import com.akshara.mathapp.R;
import com.akshara.mathapp.utils.AppConstants;

public class SplashActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);//will hide the title not the title bar
        setContentView(R.layout.activity_splash);
        navigateToMainScreen();
    }

    void navigateToMainScreen() {
        final Handler handler = new Handler();
        handler.postDelayed(new Runnable() {
            @Override
            public void run() {
                Intent i = new Intent(SplashActivity.this, ImageLoginActivity.class);
                startActivity(i);
                finish();
                handler.removeCallbacks(this);
            }
        }, 2000);
    }
}

