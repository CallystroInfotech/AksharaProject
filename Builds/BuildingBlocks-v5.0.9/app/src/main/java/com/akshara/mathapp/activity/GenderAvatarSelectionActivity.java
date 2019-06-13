package com.akshara.mathapp.activity;

import android.Manifest;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.IntentSender;
import android.content.pm.PackageManager;
import android.content.res.AssetManager;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.location.Location;
import android.os.Bundle;

import android.provider.Settings;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.content.ContextCompat;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ImageButton;
import android.widget.Toast;

import com.akshara.mathapp.MathApp;
import com.akshara.mathapp.R;
import com.akshara.mathapp.Utils;
import com.akshara.mathapp.adapters.ImageRegistrationAdapter;
import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.data.remote.APIRequestUtil;
import com.akshara.mathapp.events.BusProvider;
import com.akshara.mathapp.events.networkevents.SignupUserEvent;
import com.akshara.mathapp.events.networkevents.UploadImageFileEvent;
import com.akshara.mathapp.interfaces.PermissionsApi;
import com.akshara.mathapp.utils.AppConstants;
import com.akshara.mathapp.utils.AppUtils;
import com.akshara.mathapp.utils.CustomPermissionUtils;
import com.akshara.mathapp.utils.ImageHandler;
import com.akshara.mathapp.utils.MsgUtils;
import com.akshara.mathapp.utils.NetworkUtil;
import com.akshara.mathapp.utils.PermissionUtils;
import com.akshara.mathapp.utils.itemdecorators.GridVerticalItemDecorator;
import com.akshara.mathapp.view.FontTextView;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.location.LocationListener;
import com.google.android.gms.location.LocationRequest;
import com.google.android.gms.location.LocationServices;
import com.google.firebase.analytics.FirebaseAnalytics;

import org.greenrobot.eventbus.Subscribe;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

import butterknife.Bind;
import butterknife.OnClick;

public class GenderAvatarSelectionActivity extends BaseActivity implements AdapterView.OnItemSelectedListener, PermissionsApi.PermissionCallback, GoogleApiClient.ConnectionCallbacks, GoogleApiClient.OnConnectionFailedListener
        , LocationListener {



    @Bind(R.id.done_button)
    ImageButton doneButton;

    private ImageHandler mImageHandler;
    float thumbnailWidth = 0;

    private String selectedLanguage;
    private String orgName = "";
    private String schoolType = "";
    private String grade = "";

    private String selectedGender = null;
    private int selectedGenderPosition = 0;
    private String finalImagePath = null;

    Drawable highlight;
    String name = null;

    private Boolean fish = true;
    private Boolean butterfly = true;
    private Boolean sun = true;
    private Boolean flower = true;
    private Boolean parrot = true;
    private Boolean tree = true;

    private List<User> userLists = new ArrayList<>();

    private ImageRegistrationAdapter imageRegistrationAdapter;

    @Bind(R.id.recyclerRegView)
    RecyclerView recyclerRegViewList;

    private static final int GRID_COLUMN_COUNT = 2;

    @Bind(R.id.selectAvatarText)
    FontTextView selectAvatarText;


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
        selectedLanguage = getIntent().getStringExtra(AppConstants.SELECTED_LANGUAGE);
        super.onCreate(savedInstanceState);

        mFirebaseAnalytics = FirebaseAnalytics.getInstance(this);

        user = new User();
        orgName = getIntent().getStringExtra(AppConstants.ORG_NAME_EXTRA);
        schoolType = getIntent().getStringExtra(AppConstants.SCHOOL_TYPE);
        grade = getIntent().getStringExtra(AppConstants.GRADE_EXTRA);
        enableHomeButton();
        //downloadFullImages();
        setupViews();

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

    private void downloadFullImages()
    {
        copyAssets("fish.jpg");
        copyAssets("butterfly.jpg");
        copyAssets("flower.jpg");
        copyAssets("parrot.jpg");
        copyAssets("sun.jpg");
        copyAssets("tree.jpg");
    }


    private void getData(final ImageRegistrationAdapter.ImageLoginViewHolder v1,final ImageRegistrationAdapter.ImageLoginViewHolder v2,
                         final ImageRegistrationAdapter.ImageLoginViewHolder v3, final ImageRegistrationAdapter.ImageLoginViewHolder v4,
                         final ImageRegistrationAdapter.ImageLoginViewHolder v5,final ImageRegistrationAdapter.ImageLoginViewHolder v6)
    {

        new Thread(new Runnable() {
            @Override
            public void run() {
                userLists = MathApp.get().getLocalDb().userDao().getAll();
                //getData();


                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        if (!userLists.isEmpty()) {
                            for(int i=0;i<userLists.size();i++)
                            {
                                if(userLists.get(i).getName().equals(AppConstants.FISH_AVATAR_NAME))
                                {
                                    fish = false;
                                }
                                else if(userLists.get(i).getName().equals(AppConstants.BUTTERFLY_AVATAR_NAME))
                                {
                                    butterfly = false;
                                }
                                else if(userLists.get(i).getName().equals(AppConstants.SUN_AVATAR_NAME))
                                {
                                    sun = false;
                                }
                                else if(userLists.get(i).getName().equals(AppConstants.FLOWER_AVATAR_NAME))
                                {
                                    flower = false;
                                }
                                else if(userLists.get(i).getName().equals(AppConstants.PARROT_AVATAR_NAME))
                                {
                                    parrot = false;
                                }
                                else if(userLists.get(i).getName().equals(AppConstants.TREE_AVATAR_NAME))
                                {
                                    tree = false;
                                }
                                else
                                {
                                    //do nothing;
                                }
                            }
                            checkDisbaled(v1, v2, v3, v4, v5, v6);
                        } else {
                            return;
                        }
                    }
                });


            }
        }).start();


    }


    private void setupViews() {
        String selectAvatar = getString(R.string.textview_set_profile_pic);
        selectAvatarText.setText(selectAvatar);

        List<String> picList = new ArrayList<>();
        picList.add(AppConstants.FISH_AVATAR_URL);
        picList.add(AppConstants.BUTTERFLY_AVATAR_URL);
        picList.add(AppConstants.FLOWER_AVATAR_URL);
        picList.add(AppConstants.PARROT_AVATAR_URL);
        picList.add(AppConstants.SUN_AVATAR_URL);
        picList.add(AppConstants.TREE_AVATAR_URL);


        imageRegistrationAdapter = new ImageRegistrationAdapter(this, new ImageRegistrationAdapter.ImageTapListener() {
            @Override
            public void onTap(String uname,View view,List<ImageRegistrationAdapter.ImageLoginViewHolder> IconsList) {
                //gotoStartGameScreen(user);
                onClickAvatars(uname,view,IconsList);
            }
        });


        GridLayoutManager gridLayoutManager = new GridLayoutManager(this, GRID_COLUMN_COUNT);
        //GridVerticalItemDecorator gridVerticalItemDecorator = new GridVerticalItemDecorator(this);
        //recyclerRegViewList.addItemDecoration(gridVerticalItemDecorator);
        recyclerRegViewList.setHasFixedSize(true);
        recyclerRegViewList.setLayoutManager(gridLayoutManager);
        recyclerRegViewList.setAdapter(imageRegistrationAdapter);
        recyclerRegViewList.setNestedScrollingEnabled(false);

        imageRegistrationAdapter.setDataset(picList);
        imageRegistrationAdapter.notifyDataSetChanged();

    }

    private void onClickAvatars(String avatarName,View view,List<ImageRegistrationAdapter.ImageLoginViewHolder> IconsList)
    {
        setBackgroundToNull(IconsList);
        view.setBackgroundResource(R.drawable.highlight);
        finalImagePath = avatarName;
        name = getAvatarName(avatarName);
        doneButton.setSelected(true);
    }

    public void setBackgroundToNull(List<ImageRegistrationAdapter.ImageLoginViewHolder> IconsList)
    {

            ImageRegistrationAdapter.ImageLoginViewHolder v1 = IconsList.get(0);
            ImageRegistrationAdapter.ImageLoginViewHolder v2 = IconsList.get(1);
            ImageRegistrationAdapter.ImageLoginViewHolder v3 = IconsList.get(2);
            ImageRegistrationAdapter.ImageLoginViewHolder v4 = IconsList.get(3);
            ImageRegistrationAdapter.ImageLoginViewHolder v5 = IconsList.get(4);
            ImageRegistrationAdapter.ImageLoginViewHolder v6 = IconsList.get(5);


            v1.childImage.setBackgroundResource(0);
            v2.childImage.setBackgroundResource(0);
            v3.childImage.setBackgroundResource(0);
            v4.childImage.setBackgroundResource(0);
            v5.childImage.setBackgroundResource(0);
            v6.childImage.setBackgroundResource(0);

    }


    public void setListDisabled(List<ImageRegistrationAdapter.ImageLoginViewHolder> IconsList)
    {
        if(IconsList.size()>=6) {
            ImageRegistrationAdapter.ImageLoginViewHolder v1 = IconsList.get(0);
            ImageRegistrationAdapter.ImageLoginViewHolder v2 = IconsList.get(1);
            ImageRegistrationAdapter.ImageLoginViewHolder v3 = IconsList.get(2);
            ImageRegistrationAdapter.ImageLoginViewHolder v4 = IconsList.get(3);
            ImageRegistrationAdapter.ImageLoginViewHolder v5 = IconsList.get(4);
            ImageRegistrationAdapter.ImageLoginViewHolder v6 = IconsList.get(5);

            getData(v1, v2, v3, v4, v5, v6);

        }
    }



    public void checkDisbaled(ImageRegistrationAdapter.ImageLoginViewHolder v1,ImageRegistrationAdapter.ImageLoginViewHolder v2,
            ImageRegistrationAdapter.ImageLoginViewHolder v3, ImageRegistrationAdapter.ImageLoginViewHolder v4,
                              ImageRegistrationAdapter.ImageLoginViewHolder v5,ImageRegistrationAdapter.ImageLoginViewHolder v6)
    {
        Log.e("fish2",""+fish);
        if(!fish) {
            v1.childImage.setColorFilter(Color.argb(150, 169, 169, 169));
            v1.childImage.setEnabled(false);
        }
        if(!butterfly) {
            v2.childImage.setColorFilter(Color.argb(150, 169, 169, 169));
            v2.childImage.setEnabled(false);
        }
        if(!flower) {
            v3.childImage.setColorFilter(Color.argb(150, 169, 169, 169));
            v3.childImage.setEnabled(false);
        }
        if(!parrot) {
            v4.childImage.setColorFilter(Color.argb(150, 169, 169, 169));
            v4.childImage.setEnabled(false);
        }
        if(!sun) {
            v5.childImage.setColorFilter(Color.argb(150, 169, 169, 169));
            v5.childImage.setEnabled(false);
        }
        if(!tree) {
            v6.childImage.setColorFilter(Color.argb(150, 169, 169, 169));
            v6.childImage.setEnabled(false);
        }
    }


    public String getAvatarName(String avatarName)
    {
        String aName = null;

        if(avatarName.equals(AppConstants.FISH_AVATAR_URL))
        {
            aName = AppConstants.FISH_AVATAR_NAME;
        }
        else if(avatarName.equals(AppConstants.BUTTERFLY_AVATAR_URL))
        {
            aName = AppConstants.BUTTERFLY_AVATAR_NAME;
        }
        else if(avatarName.equals(AppConstants.FLOWER_AVATAR_URL))
        {
            aName = AppConstants.FLOWER_AVATAR_NAME;
        }
        else if(avatarName.equals(AppConstants.PARROT_AVATAR_URL))
        {
            aName = AppConstants.PARROT_AVATAR_NAME;
        }
        else if(avatarName.equals(AppConstants.SUN_AVATAR_URL))
        {
            aName = AppConstants.SUN_AVATAR_NAME;
        }
        else if(avatarName.equals(AppConstants.TREE_AVATAR_URL))
        {
            aName = AppConstants.TREE_AVATAR_NAME;
        }

        return aName;
    }



    @Override
    public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
        selectedGenderPosition = i;
        switch (i) {
            case 1:
                selectedGender = AppConstants.GENDER_FEMALE;
                break;
            case 2:
                selectedGender = AppConstants.GENDER_MALE;
                break;
        }
        setDoneButton();
    }

    private void setDoneButton() {
        if (selectedGenderPosition != 0 && finalImagePath != null) {
            doneButton.setSelected(true);
        } else {
            doneButton.setSelected(false);
        }
    }

    @Override
    public void onNothingSelected(AdapterView<?> adapterView) {

    }



    @OnClick(R.id.done_button)
    public void onDoneButtonClicked() {

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



        //Toast.makeText(this, "SignUp Call"+user.getGeo(), Toast.LENGTH_SHORT).show();



        Bundle bundle = new Bundle();
        bundle.putString("Selected_Avatar_value",""+name);
        mFirebaseAnalytics.logEvent("Selected_Avatar",bundle);

        mFirebaseAnalytics.setUserProperty("Selected_Avatar",""+name);





        if (finalImagePath == null) {
            MsgUtils.displayToast(this, R.string.message_error_select_profile_picture);
        } else {
            Intent intent = new Intent(this, StudentDetailActivity.class);
            user.setName(name);
            user.setLanguage(selectedLanguage);
            user.setGender(selectedGender);
            user.setAvatarPicLocalPath(finalImagePath);
            user.setOrganization(orgName);
            user.setGrade(grade);
            user.setSchoolType(schoolType);
            user.setGeo(geo);
            user.setDeviceId(deviceId);
            //intent.putExtra(AppConstants.USER_EXTRA, user);
            //startActivity(intent);

            Log.e("geo",""+user.getGeo());

            showProgressDialog(getString(R.string.progress_dialog_user_signup));

            Bundle param = new Bundle();
            param.putString("Button_click_tick_regst","");
            mFirebaseAnalytics.logEvent("Button_click_tick_register",param);


            signupStudent(user);
            //gotoImageLogin();
        }
    }


    @Override
    protected int getLayoutResource() {
        return R.layout.activity_gender_avatar_selection;
    }

    @Override
    protected String getLanguageValue() {
        return selectedLanguage;
    }

    @Override
    public void onBackPressed() {
        finish();
    }

    private void copyAssets(String filename)
    {
        String dirPath = Utils.downloadDirectoryFullPath;
        File dir = new File(dirPath);
        if(!dir.exists())
        {
            dir.mkdirs();
        }
        AssetManager assetManager = getAssets();
        InputStream in =null;
        OutputStream out = null;
        try{
            in = assetManager.open(filename);
            File outFile = new File(dirPath,filename);
            out = new FileOutputStream(outFile);
            copyFileToDirectory(in,out);
        }catch (Exception e)
        {
            e.printStackTrace();
        }
        finally {
            if(in != null)
            {
                try{
                    in.close();
                }
                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
            if(out != null)
            {
                try{
                    out.close();
                }
                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
        }
    }


    private void copyFileToDirectory(InputStream in , OutputStream out)throws IOException
    {
        byte[] buffer = new byte[1024];
        int read;

        while((read = in.read(buffer)) != -1)
        {
            out.write(buffer,0,read);
        }
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
            Toast.makeText(this, "failed", Toast.LENGTH_SHORT).show();
        }
    }


    @Subscribe
    public void onDataLoadingFailed(final SignupUserEvent.OnLoadingError onLoadingError) {
        handleFailed(onLoadingError.getErrorMessage());
        Toast.makeText(this, "failed", Toast.LENGTH_SHORT).show();
        //gotoImageLogin();
    }

    private void handleFailed(final String description) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                dismissProgressDialog();
                //MsgUtils.displayToast(GenderAvatarSelectionActivity.this, description);

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
                Intent mIntent = new Intent(GenderAvatarSelectionActivity.this, StartGameActivity.class);
                mIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                mIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK);
                mIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                MsgUtils.displayToast(GenderAvatarSelectionActivity.this, R.string.message_success);
                mIntent.putExtra(AppConstants.USER_EXTRA, user);
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
                /*MsgUtils.displayConfirmationDialog(this, null, getString(R.string.message_turn_on_location), new MsgUtils.AlertDialogCallback() {
                    @Override
                    public void onButtonClick(DialogInterface dialog, int id, int clickedButtonType) {
                        if(clickedButtonType == 1){
                            Intent myIntent = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
                            startActivity(myIntent);
                        }
                        else{
                            geo = AppConstants.DEFAULT_GEO;
                        }

                    }
                });*/
                geo = AppConstants.DEFAULT_GEO;
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
        if (checkLocationPermissionGranted()) {
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
        }else{
            if(geo==null){
                if(ImageLoginActivity.geo!=null)
                    geo = ImageLoginActivity.geo;
                else
                    geo = AppConstants.DEFAULT_GEO;
            }
        }


    }

    private void getLocationDonePressed() {
        //Log.e("geoooooooooo",""+ImageLoginActivity.geo);
        if (checkLocationPermissionGranted()) {
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
        }else{
            if(geo==null){
                if(ImageLoginActivity.geo!=null)
                    geo = ImageLoginActivity.geo;
                else
                    geo = AppConstants.DEFAULT_GEO;
            }
        }

        signupStudent(user);
    }

    @Override
    public void onConnectionSuspended(int i) {

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
