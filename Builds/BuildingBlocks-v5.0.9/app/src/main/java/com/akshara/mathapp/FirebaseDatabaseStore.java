package com.akshara.mathapp;

import android.Manifest;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.pm.PackageManager;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Bundle;


import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.util.Log;

import com.akshara.mathapp.data.local.User;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.Query;


@SuppressLint("NewApi")


public class FirebaseDatabaseStore {

    Context context;
    Activity activity;

    public String name;
    public String email;
    public double longitude;
    public double latitude;
    public String lanAndLat;
    private  String userId;
    private String geo;
    private String deviceId;
    private String feedback;


    /*public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }*/

    private DatabaseReference mFirebaseDatabase;
    private DatabaseReference mFirebaseDatabase2;
    private FirebaseDatabase mFirebaseInstance;
    private FirebaseDatabase mFirebaseInstance2;
    

    public FirebaseDatabaseStore(String feedback, float rating, String deviceId){
        mFirebaseInstance2 = FirebaseDatabase.getInstance();
        mFirebaseDatabase2 = mFirebaseInstance2.getReference("feedbacks");
        final UserFeedbackToFireBase userFeedbackToFireBase = new UserFeedbackToFireBase(feedback,rating,deviceId);
        mFirebaseDatabase2.child(deviceId).setValue(userFeedbackToFireBase);
    }

    public FirebaseDatabaseStore(User user, Activity activity)
    {
        this.activity = activity;

        //Toast.makeText(context, "name :"+user.getName(), Toast.LENGTH_SHORT).show();
        Log.i("User_Name :"," : "+user.getName());
        Log.i("User_DeviceId :"," : "+user.getDeviceId());
        Log.i("User_getGeo :"," : "+user.getGeo());
        Log.i("User_organisation :"," : "+user.getOrganization());
       // askPermission();

        mFirebaseInstance = FirebaseDatabase.getInstance();
        mFirebaseDatabase = mFirebaseInstance.getReference("users");
        mFirebaseInstance.getReference("app_title").setValue("Realtime Database");

        this.name = user.getName();
        this.geo = user.getGeoForFireBase();
        lanAndLat = this.geo;
        this.deviceId = user.getDeviceId();
        //latitude = 12.8793361;
       // longitude = 74.8534744;
       // Log.i("@@@@@@@@@@@@@@@ ",""+this.geo);
       // Log.i("@@@@@@@@@@@@@@@ ",""+this.geo.getClass().getName());
       // Log.i("@@@@@@@@@@@@@@@ ",""+this.deviceId);
        /*if(TextUtils.isEmpty(userId)){
            userId = mFirebaseDatabase.push().getKey();
        }*/
        final UserDataToFireBase userDataToFireBase = new UserDataToFireBase(lanAndLat,name);
        mFirebaseDatabase.child(this.deviceId+this.name).setValue(userDataToFireBase);


      /*  mFirebaseDatabase.child(deviceId).child("name").addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {


                if(dataSnapshot.hasChild("name")){
                    Log.i("IF","if"+deviceId);
                    mFirebaseDatabase.child(deviceId).setValue(userDataToFireBase);
                }
                else
                {
                    Log.i("Else","Else"+deviceId);
                    mFirebaseDatabase.child(deviceId).push().setValue(userDataToFireBase);
                }
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {

            }
        });*/

       /* mFirebaseDatabase.push().setValue(values, new DatabaseReference.CompletionListener() {
            @Override
            public void onComplete(DatabaseError databaseError, DatabaseReference databaseReference) {
              if(databaseError == null){
                  Log.i("Info","Save Successfull");
              }
              else{
                  Log.i("Info","Save Failed");
              }
            }
        });*/

    }

    public void askPermission() {

        LocationManager LocationManager = (LocationManager)context.getSystemService(Context.LOCATION_SERVICE);
        LocationListener locationListener = new LocationListener() {
            @Override
            public void onLocationChanged(Location location) {

                Log.i("Location!!!! :", location.toString());
            }

            @Override
            public void onStatusChanged(String s, int i, Bundle bundle) {

            }

            @Override
            public void onProviderEnabled(String s) {

            }

            @Override
            public void onProviderDisabled(String s) {

            }

        };

        if (ContextCompat.checkSelfPermission(context, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) {

            ActivityCompat.requestPermissions(activity, new String[]{Manifest.permission.ACCESS_FINE_LOCATION},
                    1);
        }
        if (ContextCompat.checkSelfPermission(context, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED) {

            LocationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 0, 0, locationListener);
        }
    }

}

