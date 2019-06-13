package com.akshara.mathapp.activity;

import android.content.Intent;
import android.content.res.AssetManager;
import android.os.Bundle;

import com.akshara.mathapp.MathApp;
import com.akshara.mathapp.R;
import com.akshara.mathapp.Utils;
import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.interfaces.PermissionsApi;
import com.akshara.mathapp.utils.AppConstants;
import com.akshara.mathapp.utils.CustomPermissionUtils;
import com.akshara.mathapp.utils.PermissionUtils;
import com.google.firebase.analytics.FirebaseAnalytics;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

public class PermissionActivity extends BaseActivity implements PermissionsApi.PermissionCallback {

    List<User> checkUserList = new ArrayList<>();

    private FirebaseAnalytics mFirebaseAnalytics;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mFirebaseAnalytics = FirebaseAnalytics.getInstance(this);

        setupPermissions();
    }

    @Override
    protected int getLayoutResource() {
        return R.layout.activity_permission;
    }

    private void setupPermissions() {
        PermissionsApi.getInstance().setPermissionCallback(this);
    }

    @Override
    protected String getLanguageValue() {
        return null;
    }


    @Override
    protected void onStart() {
        super.onStart();

        checkAllPermission();

    }

    protected void checkAllPermission()
    {
        if (!PermissionUtils.hasPermission(this, CustomPermissionUtils.getMediaPermissions(),
                getString(R.string.message_rationale_storage_permission), AppConstants.REQUEST_GALLERY_PERMISSION)) {
            return;
        }
        else if(!PermissionUtils.hasPermission(this, CustomPermissionUtils.getDeviceInfoPermission(),
                getString(R.string.message_rationale_device_id_permission), AppConstants.REQUEST_DEVICE_INFO)) {
            return;
        }
        else if(!PermissionUtils.hasPermission(this, CustomPermissionUtils.getLocationPermission(),
                getString(R.string.message_rationale_location_permission), AppConstants.REQUEST_LOCATION_PERMISSION)) {
            return;
        }
        else
        {
            downloadFullImages();
            checkUsers();
        }
    }

    private void checkUsers() {
        new Thread(new Runnable() {
            @Override
            public void run() {
                checkUserList = MathApp.get().getLocalDb().userDao().getAll();
                checkUserExists();
            }
        }).start();

    }

    private void checkUserExists() {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (!checkUserList.isEmpty()) {
                    gotoImageLoginScreenScreen();
                } else {
                    gotoPhoneLoginScreenScreen();
                }
            }
        });
    }

    private void gotoImageLoginScreenScreen()
    {
        startActivity(new Intent(this, ImageLoginActivity.class));
        //startActivity(new Intent(this, LanguageSelectionActivity.class));
    }

    private void gotoPhoneLoginScreenScreen()
    {
        startActivity(new Intent(this, PhoneLoginActivity.class));
        //startActivity(new Intent(this, LanguageSelectionActivity.class));
    }

    @Override
    public void onPermissionGranted(int requestCode) {
        switch (requestCode) {

            case AppConstants.REQUEST_LOCATION_PERMISSION:
            case AppConstants.REQUEST_DEVICE_INFO:
            case AppConstants.REQUEST_GALLERY_PERMISSION:
                checkAllPermission();
                break;
        }

        if(requestCode == 101){
            Bundle param = new Bundle();
            param.putString("Gallery_permission_val","");
            mFirebaseAnalytics.logEvent("Gallery_permission_granted",param);
        }
        else if(requestCode == 103){
            Bundle param1 = new Bundle();
            param1.putString("Location_permission_val","");
            mFirebaseAnalytics.logEvent("Location_permission_granted",param1);
        }
        else if(requestCode == 104){
            Bundle param2 = new Bundle();
            param2.putString("DeviceInfo_permsn_val","");
            mFirebaseAnalytics.logEvent("DeviceInfo_permission_granted",param2);
        }
    }

    @Override
    public void onPermissionDenied(int requestCode) {
        if(requestCode == 101){
            Bundle param0 = new Bundle();
            param0.putString("Gallery_permission_val","");
            mFirebaseAnalytics.logEvent("Gallery_permission_denied",param0);
        }
        else if(requestCode == 103){
            Bundle param11 = new Bundle();
            param11.putString("Location_permission_val","");
            mFirebaseAnalytics.logEvent("Location_permission_denied",param11);
        }
        else if(requestCode == 104){
            Bundle param22 = new Bundle();
            param22.putString("DeviceInfo_permsn_val","");
            mFirebaseAnalytics.logEvent("DeviceInfo_permission_denied",param22);
        }
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
}
