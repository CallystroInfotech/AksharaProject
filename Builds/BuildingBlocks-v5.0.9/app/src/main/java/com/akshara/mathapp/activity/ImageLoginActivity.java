package com.akshara.mathapp.activity;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.location.Location;
import android.os.Bundle;

import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.akshara.mathapp.MathApp;
import com.akshara.mathapp.R;
import com.akshara.mathapp.adapters.ImageLoginAdapter;
import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.interfaces.PermissionsApi;
import com.akshara.mathapp.utils.AppConstants;
import com.akshara.mathapp.utils.CustomPermissionUtils;
import com.akshara.mathapp.utils.PermissionUtils;
import com.akshara.mathapp.utils.itemdecorators.GridVerticalItemDecorator;
import com.akshara.mathapp.view.FontTextView;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.location.LocationListener;
import com.google.android.gms.location.LocationServices;
import com.google.firebase.analytics.FirebaseAnalytics;

import java.util.ArrayList;
import java.util.List;

import butterknife.Bind;
import butterknife.OnClick;

public class ImageLoginActivity extends BaseActivity implements PermissionsApi.PermissionCallback,
        GoogleApiClient.ConnectionCallbacks, GoogleApiClient.OnConnectionFailedListener, LocationListener {

    private static final int GRID_COLUMN_COUNT = 2;

    @Bind(R.id.recyclerView)
    RecyclerView recyclerViewList;

    List<User> userList = new ArrayList<>();
    private ImageLoginAdapter imageLoginAdapter;

    @Bind(R.id.register)
    FontTextView regButton;

    private int avatar_size = 6;

    GoogleApiClient googleApiClient;
    Location location;
    public static String geo = null;

    private FirebaseAnalytics mFirebaseAnalytics;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mFirebaseAnalytics = FirebaseAnalytics.getInstance(this);

        setupPermissions();
        setupViews();

        setupLocationService();
        if(googleApiClient != null){
            googleApiClient.connect();
        }else{
            //not connected.....
            //setupViews();
        }

    }

    private void setupPermissions() {
        PermissionsApi.getInstance().setPermissionCallback(this);
    }

    private void setupViews() {
        imageLoginAdapter = new ImageLoginAdapter(this, new ImageLoginAdapter.ImageTapListener() {
            @Override
            public void onTap(User user) {

                Bundle bundle = new Bundle();
                bundle.putString("Click_avatar_value","");
                mFirebaseAnalytics.logEvent("Click_avatar",bundle);
                mFirebaseAnalytics.setUserId(""+user.getDeviceId());

                gotoStartGameScreen(user);
            }
        });

        GridLayoutManager gridLayoutManager = new GridLayoutManager(this, GRID_COLUMN_COUNT);
        GridVerticalItemDecorator gridVerticalItemDecorator = new GridVerticalItemDecorator(this);
        recyclerViewList.addItemDecoration(gridVerticalItemDecorator);
        recyclerViewList.setHasFixedSize(true);
        recyclerViewList.setLayoutManager(gridLayoutManager);
        recyclerViewList.setAdapter(imageLoginAdapter);
        recyclerViewList.setNestedScrollingEnabled(false);
    }

    private void gotoStartGameScreen(User user) {
        Intent intent = new Intent(this, StartGameActivity.class);
        intent.putExtra(AppConstants.USER_EXTRA, user);
        startActivity(intent);
    }

    @Override
    protected void onStart() {
        super.onStart();
        if (PermissionUtils.hasPermission(this, CustomPermissionUtils.getMediaPermissions(), getString(R.string.message_rationale_storage_permission), AppConstants.REQUEST_GALLERY_PERMISSION)) {
            loadUsers();
        }
    }


    private void loadUsers() {
        new Thread(new Runnable() {
            @Override
            public void run() {
                userList = MathApp.get().getLocalDb().userDao().getAll();
                updateUI();
            }
        }).start();

    }

    private void disableRegButton()
    {
        Log.e("yo","here");
        if(userList.size()>= avatar_size)
        {
            regButton.setBackground(getResources().getDrawable(R.drawable.bg_color_accent_rounded_corners_dot_border_gray_disbaled));
        }else if(userList.size() == 0){
            Intent intent = new Intent(this, LanguageSelectionActivity.class);
            startActivity(intent);
        }else {
            //do nothing.
        }
    }


    @Override
    protected String getLanguageValue() {
        return null;
    }

    private void updateUI() {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (!userList.isEmpty()) {
                    recyclerViewList.setVisibility(View.VISIBLE);
                    imageLoginAdapter.setDataset(userList);
                    imageLoginAdapter.notifyDataSetChanged();
                    disableRegButton();
                } else {
                    recyclerViewList.setVisibility(View.GONE);
                    getTheDetailsFromWeb();
                }
            }
        });
    }

    private void getTheDetailsFromWeb() {
        startActivity(new Intent(this, PhoneLoginActivity.class));
        //finish();
    }


    @Override
    protected int getLayoutResource() {
        return R.layout.activity_image_login;
    }

   /* @OnClick({R.id.sign_in})
    void onSignInClicked() {
        startActivity(new Intent(this, PhoneLoginActivity.class));
    }*/

    @OnClick({R.id.register})
    void onRegisterClicked() {
        if(userList.size()>= avatar_size)
        {
            Toast.makeText(this, "All avatars being used. No new avatar.", Toast.LENGTH_SHORT).show();

        }
        else
        {
            Bundle bundle = new Bundle();
            bundle.putString("Button_click","");
            mFirebaseAnalytics.logEvent("Button_click_register",bundle);

            startActivity(new Intent(this, LanguageSelectionActivity.class));
        }

    }

    @Override
    public void onPermissionGranted(int requestCode) {
        switch (requestCode) {
            case AppConstants.REQUEST_DEVICE_INFO:
            case AppConstants.REQUEST_GALLERY_PERMISSION:
                loadUsers();
                break;
        }
    }

    @Override
    public void onPermissionDenied(int requestCode) {

    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        moveTaskToBack(true);
        finish();
        android.os.Process.killProcess(android.os.Process.myPid());
        System.exit(0);
    }


    @Override
    public void onConnected(@Nullable Bundle bundle) {

        if (checkLocationPermissionGranted()) {
            location = LocationServices.FusedLocationApi.getLastLocation(googleApiClient);
            //Toast.makeText(this, "got Location", Toast.LENGTH_SHORT).show();

            if (location == null) {
               // LocationServices.FusedLocationApi.requestLocationUpdates(googleApiClient, location, this);

            } else {
                double latittude = location.getLatitude();
                double longitude = location.getLongitude();
                ImageLoginActivity.geo = latittude + "," + longitude;
                Log.e("location",""+geo);
            }
        }else {
            ImageLoginActivity.geo = AppConstants.DEFAULT_GEO;
        }

    }

    public boolean checkLocationPermissionGranted(){
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION)
                != PackageManager.PERMISSION_GRANTED && ContextCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION)
                != PackageManager.PERMISSION_GRANTED) {
            return false;
        } else {
            return true;
        }
    }

    private void setupLocationService() {
        if (googleApiClient != null)
            return;
        googleApiClient = new GoogleApiClient.Builder(this)
                .addConnectionCallbacks(this)
                .addOnConnectionFailedListener(this)
                .addApi(LocationServices.API)
                .build();
    }


    @Override
    public void onConnectionSuspended(int i) {
        Log.e("location","suspended");
    }

    @Override
    public void onConnectionFailed(@NonNull ConnectionResult connectionResult) {
        Log.e("location","Failed");
    }

    @Override
    public void onLocationChanged(Location location) {

    }
}
