package com.akshara.mathapp.activity;

import android.content.DialogInterface;
import android.content.Intent;
import android.content.IntentSender;
import android.location.Location;
import android.os.Bundle;
import android.provider.Settings;

import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.Spinner;
import android.widget.Toast;

import com.akshara.mathapp.MathApp;
import com.akshara.mathapp.R;
import com.akshara.mathapp.adapters.CustomSpinnerAdapter;
import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.data.remote.APIRequestUtil;
import com.akshara.mathapp.events.BusProvider;
import com.akshara.mathapp.events.networkevents.SignupUserEvent;
import com.akshara.mathapp.events.networkevents.UploadImageFileEvent;
import com.akshara.mathapp.interfaces.PermissionsApi;
import com.akshara.mathapp.utils.AppConstants;
import com.akshara.mathapp.utils.AppUtils;
import com.akshara.mathapp.utils.CustomPermissionUtils;
import com.akshara.mathapp.utils.DataParserUtil;
import com.akshara.mathapp.utils.MsgUtils;
import com.akshara.mathapp.utils.NetworkUtil;
import com.akshara.mathapp.utils.PermissionUtils;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.location.LocationListener;
import com.google.android.gms.location.LocationRequest;
import com.google.android.gms.location.LocationServices;
import com.google.firebase.analytics.FirebaseAnalytics;

import org.greenrobot.eventbus.Subscribe;

import butterknife.Bind;
import butterknife.OnClick;

public class StudentDetailActivity extends BaseActivity implements
        PermissionsApi.PermissionCallback,
        GoogleApiClient.ConnectionCallbacks, GoogleApiClient.OnConnectionFailedListener
        , LocationListener {


    /*@Bind(R.id.school_type_spinner)
    Spinner schoolTypeSpinner;

    @Bind(R.id.class_type_spinner)
    Spinner classTypeSpinner;

    private int selectedSchoolTypePosition = 0;
    private int selectedClassTypePosition = 0;


    private String schoolType = null;
    private String selectedClassValue = null;
    */

    private String geo = null;
    private String deviceId = null;

    private final static int CONNECTION_FAILURE_RESOLUTION_REQUEST = 9000;
    private final static int LOCATION_INTERVAL_IN_MILLI = 10000;
    public static final int LOCATION_FAST_INTERVAL_MILLI = 1000;
    private GoogleApiClient mGoogleApiClient;
    private LocationRequest mLocationRequest;
    private User user;

    private FirebaseAnalytics mFirebaseAnalytics;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        mFirebaseAnalytics = FirebaseAnalytics.getInstance(this);

        user = getIntent().getParcelableExtra(AppConstants.USER_EXTRA);

        Log.e("name",""+user.getName());
        Log.e("lang",""+user.getLanguage());
        Log.e("org",""+user.getOrganization());
        Log.e("grade",""+user.getGrade());
        Log.e("school",""+user.getSchoolType());
        Log.e("geo",""+user.getGeo());

        if (user == null){
            startActivity(new Intent(this, GenderAvatarSelectionActivity.class));
            finish();
        }

        super.onCreate(savedInstanceState);
        enableHomeButton();
        setupPermissions();
        //schoolTypeSpinner.setOnItemSelectedListener(this);
        //setupSpinner();
        AppUtils.isGooglePlayServiceAvailable(this);
        setupLocationService();

        checkRegistration();
    }

    private void setupLocationService() {
        if (mGoogleApiClient != null)
            return;
        mGoogleApiClient = new GoogleApiClient.Builder(this)
                .addConnectionCallbacks(this)
                .addOnConnectionFailedListener(this)
                .addApi(LocationServices.API)
                .build();

        if (mLocationRequest != null)
            return;
        mLocationRequest = LocationRequest.create()
                .setPriority(LocationRequest.PRIORITY_HIGH_ACCURACY)
                .setInterval(LOCATION_INTERVAL_IN_MILLI)
                .setFastestInterval(LOCATION_FAST_INTERVAL_MILLI);
    }

    @Override
    protected void onResume() {
        //Log.e("resume","resume");

        super.onResume();
        mGoogleApiClient.connect();
    }

    @Override
    protected void onPause() {
        //Log.e("pause","pause");

        super.onPause();
        if (mGoogleApiClient.isConnected()) {
            LocationServices.FusedLocationApi.removeLocationUpdates(mGoogleApiClient, this);
            mGoogleApiClient.disconnect();
        }
    }

    private void setupPermissions() {
        PermissionsApi.getInstance().setPermissionCallback(this);
    }

    /*private void setupSpinner() {
        CustomSpinnerAdapter schoolAdapter = new CustomSpinnerAdapter(this, R.array.school_type_array);

        schoolTypeSpinner.setAdapter(schoolAdapter);
        schoolTypeSpinner.setOnItemSelectedListener(this);
        schoolAdapter.notifyDataSetChanged();
        schoolTypeSpinner.setSelection(selectedSchoolTypePosition);

        CustomSpinnerAdapter classAdapter = new CustomSpinnerAdapter(this, R.array.class_type_array);

        classTypeSpinner.setAdapter(classAdapter);
        classTypeSpinner.setOnItemSelectedListener(this);
        classAdapter.notifyDataSetChanged();
        classTypeSpinner.setSelection(selectedSchoolTypePosition);
    }*/

    @Override
    protected int getLayoutResource() {
        //return R.layout.activity_student_detail;
        return R.layout.activity_phone_login;
    }

    @Override
    protected String getLanguageValue() {
        return user.getLanguage();
    }

    /*
    @Override
    public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
        switch (adapterView.getId()) {
            case R.id.school_type_spinner:
                selectedSchoolTypePosition = i;
                if (i != 0)
                    schoolType = DataParserUtil.getSchoolTypeFromPosition(i);
                break;
            case R.id.class_type_spinner:
                selectedClassTypePosition = i;
                if (i != 0) {
                    selectedClassValue = (String) adapterView.getItemAtPosition(i);

                    if(selectedClassValue.equalsIgnoreCase(getString(R.string.first_grade)))
                        selectedClassValue = "1st Grade";
                    else if(selectedClassValue.equalsIgnoreCase(getString(R.string.second_grade)))
                        selectedClassValue = "2nd Grade";
                    else if(selectedClassValue.equalsIgnoreCase(getString(R.string.third_grade)))
                        selectedClassValue = "3rd Grade";
                    else if(selectedClassValue.equalsIgnoreCase(getString(R.string.fourth_grade)))
                        selectedClassValue = "4th Grade";
                    else if(selectedClassValue.equalsIgnoreCase(getString(R.string.fifth_grade)))
                        selectedClassValue = "5th Grade";
                    else if(selectedClassValue.equalsIgnoreCase(getString(R.string.sixth_grade)))
                        selectedClassValue = "6th Grade";
                    else if(selectedClassValue.equalsIgnoreCase(getString(R.string.seventh_grade)))
                        selectedClassValue = "7th Grade";
                    else if(selectedClassValue.equalsIgnoreCase(getString(R.string.eighth_grade)))
                        selectedClassValue = "8th Grade";
                    else if(selectedClassValue.equalsIgnoreCase(getString(R.string.ninth_grade)))
                        selectedClassValue = "9th Grade";
                    else
                        selectedClassValue = "1st Grade";
                }
                break;
        }
    }*/

    public void checkRegistration(){

        showProgressDialog(getString(R.string.progress_dialog_user_signup));

        if (geo == null) {
            if (AppUtils.isGooglePlayServiceAvailable(this)) {
                setupLocationService();
                getGeoCoordinates();
            }
            //return;
        }

        if (deviceId == null) {
            if (PermissionUtils.hasPermission(this, CustomPermissionUtils.getDeviceInfoPermission(),
                    getString(R.string.message_rationale_device_id_permission), AppConstants.REQUEST_DEVICE_INFO)) {
                deviceId = AppUtils.getDeviceUniqueId();
            } else {
                return;
            }
        }

        if (!NetworkUtil.getConnectivityStatusString(this)) {
            MsgUtils.displayToast(this, R.string.error_message_no_internet);
            return;
        }

        showProgressDialog(getString(R.string.progress_dialog_user_signup));

        user.setGeo(geo);
        user.setDeviceId(deviceId);

        //Toast.makeText(this, "SignUp Call"+user.getGeo(), Toast.LENGTH_SHORT).show();

        //signupStudent(user);
    }


    /*
    @OnClick(R.id.done_button)
    public void onDoneButtonClicked() {

        //Log.e("done","clicked"+geo);

        if (selectedClassTypePosition == 0 || selectedClassValue == null) {
            MsgUtils.displayToast(this, R.string.error_message_class_field);
            return;
        }

        if (selectedSchoolTypePosition == 0 || schoolType == null) {
            MsgUtils.displayToast(this, R.string.message_error_select_school_type);
            return;
        }

        if (geo == null) {
            if (AppUtils.isGooglePlayServiceAvailable(this)) {
                setupLocationService();
                getGeoCoordinates();
            }
            return;
        }

        if (deviceId == null) {
            if (PermissionUtils.hasPermission(this, CustomPermissionUtils.getDeviceInfoPermission(),
                    getString(R.string.message_rationale_device_id_permission), AppConstants.REQUEST_DEVICE_INFO)) {
                deviceId = AppUtils.getDeviceUniqueId();
            } else {
                return;
            }
        }


        if (!NetworkUtil.getConnectivityStatusString(this)) {
            MsgUtils.displayToast(this, R.string.error_message_no_internet);
            return;
        }

        showProgressDialog(getString(R.string.progress_dialog_user_signup));

        user.setSchoolType(schoolType);
        user.setGrade(selectedClassValue);

        user.setGeo(geo);
        user.setDeviceId(deviceId);

        //Toast.makeText(this, "SignUp Call"+user.getGeo(), Toast.LENGTH_SHORT).show();

        Bundle bundle = new Bundle();
        bundle.putString("Select_class_value",""+selectedClassValue);
        mFirebaseAnalytics.logEvent("Select_class",bundle);

        mFirebaseAnalytics.setUserProperty("User_class",""+selectedClassValue);

        Bundle param = new Bundle();
        if(schoolType.equalsIgnoreCase("0"))
        {
            param.putString("Select_school_value","Government");
            mFirebaseAnalytics.setUserProperty("User_school_type","Government");
        }
        else{
            param.putString("Select_school_value","Private");
            mFirebaseAnalytics.setUserProperty("User_school_type","Private");
        }
        mFirebaseAnalytics.logEvent("Select_school",param);

        signupStudent(user);

    }*/

    private void signupStudent(User user) {
        BusProvider.getInstance().post(new SignupUserEvent.OnLoadingStart(
                APIRequestUtil.getUserRegisterParams(user)
        ));
    }

    @Subscribe
    public void onDataLoaded(SignupUserEvent.OnLoadingFinished onLoadingFinished) {
        if (onLoadingFinished.getResponse().getStatus().contentEquals(AppConstants.API_SUCCESS)) {
            user.setUid(onLoadingFinished.getResponse().getDescription());
            new Thread(new Runnable() {
                @Override
                public void run() {
                    MathApp.get().getLocalDb().userDao().insertAll(user);
                    uploadImage(user);
                }
            }).start();
        } else {
            handleFailed(onLoadingFinished.getResponse().getDescription());
        }
    }


    @Subscribe
    public void onDataLoadingFailed(final SignupUserEvent.OnLoadingError onLoadingError) {
        handleFailed(onLoadingError.getErrorMessage());
        Toast.makeText(this, "Registration Failed", Toast.LENGTH_SHORT).show();
    }

    private void handleFailed(final String description) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                dismissProgressDialog();
                //MsgUtils.displayToast(StudentDetailActivity.this, description);
                gotoImageLogin();
            }
        });
    }

    private void uploadImage(User user) {
        BusProvider.getInstance().post(new UploadImageFileEvent.OnLoadingStart(APIRequestUtil.getImageFileUpload(
                user.getUid(), user.getAvatarPicLocalPath()
        )));
    }

    @Subscribe
    public void onDataLoaded(UploadImageFileEvent.OnLoadingFinished onLoadingFinished) {
        if (!onLoadingFinished.getResponse().getStatus().contentEquals(AppConstants.API_SUCCESS))
            handleFailed(onLoadingFinished.getResponse().getDescription());
        gotoImageLogin();
    }

    @Subscribe
    public void onDataLoadingFailed(UploadImageFileEvent.OnLoadingError onLoadingError) {
        handleFailed(onLoadingError.getErrorMessage());
        gotoImageLogin();
    }

    private void gotoImageLogin() {
        if (NetworkUtil.canToggleGPS(this))
            NetworkUtil.turnGPSOff(this);
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                dismissProgressDialog();
                Intent mIntent = new Intent(StudentDetailActivity.this, ImageLoginActivity.class);
                mIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                mIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK);
                mIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                MsgUtils.displayToast(StudentDetailActivity.this, R.string.message_success);
                startActivity(mIntent);
                finish();
            }
        });

    }

    private void getGeoCoordinates() {

        //Log.e("getGeo","Location");
        if (!NetworkUtil.isLocationEnabled(this)) {
            if (NetworkUtil.canToggleGPS(this)) {
                NetworkUtil.turnGPSOn(this);
            } else {
                MsgUtils.displayConfirmationDialog(this, null, getString(R.string.message_turn_on_location), new MsgUtils.AlertDialogCallback() {
                    @Override
                    public void onButtonClick(DialogInterface dialog, int id, int clickedButtonType) {
                        Intent myIntent = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
                        startActivity(myIntent);
                    }
                });
                return;
            }

        }
        if (!mGoogleApiClient.isConnected()) {
            mGoogleApiClient.reconnect();
        } else {
            getLocationDonePressed();
        }

        //signupStudent(user);
    }

    @Override
    public void onBackPressed() {
        finish();
    }

    @Override
    public void onPermissionGranted(int requestCode) {
        switch (requestCode) {
            case AppConstants.REQUEST_LOCATION_PERMISSION:
                getLocation();
                break;
            case AppConstants.REQUEST_DEVICE_INFO:
                //onDoneButtonClicked();
                break;
        }
    }

    @Override
    public void onPermissionDenied(int requestCode) {

    }

    @Override
    public void onConnected(@Nullable Bundle bundle) {
        getLocation();
    }

    private void getLocation() {
        if (PermissionUtils.hasPermission(this, CustomPermissionUtils.getLocationPermission(),
                getString(R.string.message_rationale_location_permission), AppConstants.REQUEST_LOCATION_PERMISSION)) {
            Location location = LocationServices.FusedLocationApi.getLastLocation(mGoogleApiClient);
            //Toast.makeText(this, "got Location", Toast.LENGTH_SHORT).show();

            Log.e("get","Location"+location);

            if (location == null) {
                LocationServices.FusedLocationApi.requestLocationUpdates(mGoogleApiClient, mLocationRequest, this);

                /*if(geo==null){
                    if(ImageLoginActivity.geo!=null)
                        geo = ImageLoginActivity.geo;
                    else
                        geo = AppConstants.DEFAULT_GEO;
                }*/

            } else {
                setGeo(location);
            }
        }


    }

    private void getLocationDonePressed() {
        //Log.e("geoooooooooo",""+ImageLoginActivity.geo);
        if (PermissionUtils.hasPermission(this, CustomPermissionUtils.getLocationPermission(),
                getString(R.string.message_rationale_location_permission), AppConstants.REQUEST_LOCATION_PERMISSION)) {
            Location location = LocationServices.FusedLocationApi.getLastLocation(mGoogleApiClient);
            //Toast.makeText(this, "got Location", Toast.LENGTH_SHORT).show();

            Log.e("get","Location"+location);

            if (location == null) {
                LocationServices.FusedLocationApi.requestLocationUpdates(mGoogleApiClient, mLocationRequest, this);

                if(geo==null){
                    Log.e("here","Here");
                    if(ImageLoginActivity.geo!=null)
                        geo = ImageLoginActivity.geo;
                    else
                        geo = AppConstants.DEFAULT_GEO;
                }

            } else {
                setGeo(location);
            }
        }

        signupStudent(user);
    }

    @Override
    public void onConnectionSuspended(int i) {

    }

    @Override
    public void onConnectionFailed(@NonNull ConnectionResult connectionResult) {

        //Toast.makeText(this, "connection Failed", Toast.LENGTH_SHORT).show();

        if (connectionResult.hasResolution()) {
            try {
                // Start an Activity that tries to resolve the error
                connectionResult.startResolutionForResult(this, CONNECTION_FAILURE_RESOLUTION_REQUEST);
                    /*
                     * Thrown if Google Play services canceled the original
                     * PendingIntent
                     */
            } catch (IntentSender.SendIntentException e) {
                // Log the error
                e.printStackTrace();
            }
        } else {
                /*
                 * If no resolution is available, display a dialog to the
                 * user with the error.
                 */
            Log.e("Error", "Location services connection failed with code " + connectionResult.getErrorCode());
        }
    }

    @Override
    public void onLocationChanged(Location location) {
        setGeo(location);
    }


    private void setGeo(Location location) {

        //Log.e("setGeo","Location");

        //Toast.makeText(this, "set Location"+location, Toast.LENGTH_SHORT).show();
        double latittude = location.getLatitude();
        double longitude = location.getLongitude();
        geo = longitude + "," + latittude;
    }
}
