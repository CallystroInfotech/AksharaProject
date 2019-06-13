package com.akshara.mathapp;

public class UserDataToFireBase {

    public String name;
   // public double longitude;
    //public double latitude;
    public String lanAndLat;

    public UserDataToFireBase(){

    }


    public UserDataToFireBase(String lanAndLat,String name) {
        this.name = name;
        this.lanAndLat = lanAndLat;
    }
}
