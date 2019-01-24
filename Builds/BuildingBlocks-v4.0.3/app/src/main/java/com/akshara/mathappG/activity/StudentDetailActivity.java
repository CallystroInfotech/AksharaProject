package com.akshara.mathappG.activity;

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

import com.akshara.mathappG.MathApp;
import com.akshara.mathappG.R;
import com.akshara.mathappG.adapters.CustomSpinnerAdapter;
import com.akshara.mathappG.data.local.User;
import com.akshara.mathappG.data.remote.APIRequestUtil;
import com.akshara.mathappG.events.BusProvider;
import com.akshara.mathappG.events.networkevents.SignupUserEvent;
import com.akshara.mathappG.events.networkevents.UploadImageFileEvent;
import com.akshara.mathappG.interfaces.PermissionsApi;
import com.akshara.mathappG.utils.AppConstants;
import com.akshara.mathappG.utils.AppUtils;
import com.akshara.mathappG.utils.CustomPermissionUtils;
import com.akshara.mathappG.utils.DataParserUtil;
import com.akshara.mathappG.utils.MsgUtils;
import com.akshara.mathappG.utils.NetworkUtil;
import com.akshara.mathappG.utils.PermissionUtils;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.location.LocationListener;
import com.google.android.gms.location.LocationRequest;
import com.google.android.gms.location.LocationServices;

import org.greenrobot.eventbus.Subscribe;

import butterknife.Bind;
import butterknife.OnClick;

public class StudentDetailActivity extends BaseActivity implements
        AdapterView.OnItemSelectedListener, PermissionsApi.PermissionCallback,
        GoogleApiClient.ConnectionCallbacks, GoogleApiClient.OnConnectionFailedListener
        , LocationListener {


    @Bind(R.id.school_type_spinner)
    Spinner schoolTypeSpinner;

    @Bind(R.id.class_type_spinner)
    Spinner classTypeSpinner;

    private int selectedSchoolTypePosition = 0;
    private int selectedClassTypePosition = 0;


    private String schoolType = null;
    private String selectedClassValue = null;

    private String geo = null;
    private String deviceId = null;

    private final static int CONNECTION_FAILURE_RESOLUTION_REQUEST = 9000;
    private final static int LOCATION_INTERVAL_IN_MILLI = 10000;
    public static final int LOCATION_FAST_INTERVAL_MILLI = 1000;
    private GoogleApiClient mGoogleApiClient;
    private LocationRequest mLocationRequest;
    private User user;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        user = getIntent().getParcelableExtra(AppConstants.USER_EXTRA);
        if (user == null)
            finish();
        super.onCreate(savedInstanceState);
        enableHomeButton();
        setupPermissions();
        schoolTypeSpinner.setOnItemSelectedListener(this);
        setupSpinner();
        AppUtils.isGooglePlayServiceAvailable(this);
        setupLocationService();
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
        super.onResume();
        mGoogleApiClient.connect();
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mGoogleApiClient.isConnected()) {
            LocationServices.FusedLocationApi.removeLocationUpdates(mGoogleApiClient, this);
            mGoogleApiClient.disconnect();
        }
    }

    private void setupPermissions() {
        PermissionsApi.getInstance().setPermissionCallback(this);
    }

    private void setupSpinner() {
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
    }

    @Override
    protected int getLayoutResource() {
        return R.layout.activity_student_detail;
    }

    @Override
    protected String getLanguageValue() {
        return user.getLanguage();
    }

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

                    if(selectedClassValue.equals(R.string.first_grade))
                        selectedClassValue = "1st Grade";
                    else if(selectedClassValue.equals(R.string.second_grade))
                        selectedClassValue = "2st Grade";
                    else if(selectedClassValue.equals(R.string.third_grade))
                        selectedClassValue = "3st Grade";
                    else if(selectedClassValue.equals(R.string.fourth_grade))
                        selectedClassValue = "4st Grade";
                    else if(selectedClassValue.equals(R.string.fifth_grade))
                        selectedClassValue = "5st Grade";
                    else if(selectedClassValue.equals(R.string.sixth_grade))
                        selectedClassValue = "6st Grade";
                    else if(selectedClassValue.equals(R.string.seventh_grade))
                        selectedClassValue = "7st Grade";
                    else if(selectedClassValue.equals(R.string.eighth_grade))
                        selectedClassValue = "8st Grade";
                    else if(selectedClassValue.equals(R.string.ninth_grade))
                        selectedClassValue = "9st Grade";
                    else
                        selectedClassValue = "1st Grade";
                }
                break;
        }
    }

    @Override
    public void onNothingSelected(AdapterView<?> adapterView) {
    }

    @OnClick(R.id.done_button)
    public void onDoneButtonClicked() {

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

        signupStudent(user);

    }

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
    }

    private void handleFailed(final String description) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                dismissProgressDialog();
                //MsgUtils.displayToast(StudentDetailActivity.this, description);
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
            getLocation();
        }
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
                onDoneButtonClicked();
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

            if (location == null) {
                LocationServices.FusedLocationApi.requestLocationUpdates(mGoogleApiClient, mLocationRequest, this);

            } else {
                setGeo(location);
            }
        }
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
        //Toast.makeText(this, "set Location"+location, Toast.LENGTH_SHORT).show();
        double latittude = location.getLatitude();
        double longitude = location.getLongitude();
        geo = longitude + "," + latittude;
    }
}
