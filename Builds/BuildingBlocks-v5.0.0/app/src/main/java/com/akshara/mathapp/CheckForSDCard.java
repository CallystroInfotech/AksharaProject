package com.akshara.mathapp;

import android.os.Environment;

/**
 * Created by Callystro-pc on 01-Jun-18.
 */

public class CheckForSDCard {
    //Check If SD Card is present or not method
    public boolean isSDCardPresent() {
        if (Environment.getExternalStorageState().equals(

                Environment.MEDIA_MOUNTED)) {
            return true;
        }
        return false;
    }
}

