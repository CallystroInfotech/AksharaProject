package com.akshara.mathapp;

import android.app.Activity;
import android.os.Environment;

import java.io.File;

/**
 * Created by Callystro-pc on 01-Jun-18.
 */

public class Utils extends Activity {
    public static final String downloadDirectory = ".gameFilesBBV5_0_5";
    public static final String PreviousdownloadDirectory = ".gameFilesBBV5_0_2";

    //public static final String mainUrl = "https://abbmath.klp.org.in/ToServer/";
    //public static final String mainUrl = "http://callystro.com/demo/";
    //public static final String mainUrl = "http://callystro.com/demoTest2/";

    public static final String mainUrl = "https://abbmath.klp.org.in/abbchmprm/assets/bb5_0_5/";
    //public static final String mainUrl = "https://abbmath.klp.org.in/abbchmprm/assets/v5_0_1_test4/";
    public static final String downloadAssets1Url = Utils.mainUrl+"Assets1.zip";
    public static final String downloadAssets2Url = Utils.mainUrl+"Assets2.zip";
    public static final String downloadAssets3Url = Utils.mainUrl+"Assets3.zip";
    public static final String downloadAssets4Url = Utils.mainUrl+"Assets4.zip";
    public static final String downloadAssets5Url = Utils.mainUrl+"Assets5.zip";
    public static final String downloadAssets6Url = Utils.mainUrl+"Assets6.zip";
    public static final String downloadEnglishSoundsUrl= Utils.mainUrl+"English.zip";
    public static final String downloadKannadaSoundsUrl = Utils.mainUrl+"Kannada.zip";
    public static final String downloadHindiSoundsUrl = Utils.mainUrl+"Hindi.zip";
    public static final String downloadOdiyaSoundsUrl = Utils.mainUrl+"Odiya.zip";
    public static final String downloadGujaratiSoundsUrl = Utils.mainUrl+"Gujarati.zip";

    public static final String downloadMangerPath = "Download/"+downloadDirectory+"/";

    public static final String downloadGameFilesDirectory = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.downloadDirectory+"/";

    public static final long englishSize = 23759971;
    public static final long hindiSize = 25508626;
    public static final long kannadaSize = 25787866;
    public static final long odiyaSize = 40129117;
    public static final long gujaratiSize = 31882078;
    public static final long assets1Size = 26430143;
    public static final long assets2Size = 39780906;
    public static final long assets3Size = 18453216;
    public static final long assets4Size = 14402031;
    public static final long assets5Size = 19891065;
    public static final long assets6Size = 19889389;
    public static final long assetsFullSize = 121195371;


    public static final File checkOldDirectoryExists1 = new File(Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.PreviousdownloadDirectory);

    public static final File checkOldDirectoryExists2 = new File(Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.PreviousdownloadDirectory +"/www/questionSounds");

    public static final File checkOldDirectoryExists3 = new File(Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.PreviousdownloadDirectory +"/www/json");

    public static final String downloadDirectoryFullPath = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/";

    public static final String downloadGameFilesDirectoryFullPath = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.downloadDirectory +"/www/";

    public static final File checkForSoundFileEnglish = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/questionSounds/1.1A/English"));

    public static final File checkForSoundFileHindi = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/questionSounds/1.1A/Hindi"));

    public static final File checkForSoundFileKannada = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/questionSounds/1.1A/Kannada"));

    public static final File checkForSoundFileOdiya = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/questionSounds/1.1A/Odiya"));

    public static final File checkForSoundFileGujarati = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/questionSounds/Gujarati"));

    public static final File checkForgameAssets1 = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/assets/commonAssets"));

    public static final File checkForgameAssets2 = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/assets/demoVideos"));

    public static final File checkForgameAssets3 = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/assets/gradeAssets/1.1A"));

    public static final File checkForgameAssets4 = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/assets/gradeAssets/2.2"));

    public static final File checkForgameAssets5 = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/assets/gradeAssets/4.1"));

    public static final File checkForgameAssets6 = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/assets/gradeAssets/6.1"));

    public static final File checkForgameJson = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/json"));

}
