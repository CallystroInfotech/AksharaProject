package com.akshara.mathapp;

public class UserFeedbackToFireBase {

    public String deviceID;
    public float rating;
   // public double longitude;
    //public double latitude;
    public String feedback;

    public UserFeedbackToFireBase(){

    }


    public UserFeedbackToFireBase(String feedback, float rating, String deviceID) {
        this.deviceID = deviceID;
        this.rating = rating;
        this.feedback = feedback;
    }
}
