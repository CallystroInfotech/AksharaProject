package com.akshara.mathapp;

import android.app.Activity;
import android.os.Environment;

import java.io.File;

/**
 * Created by Callystro-pc on 01-Jun-18.
 */

public class Utils extends Activity {
    public static final String downloadDirectory = ".gameFilesV20";
    public static final String PreviousdownloadDirectory = ".gameFiles";

    //public static final String mainUrl = "https://abbmath.klp.org.in/";
    public static final String mainUrl = "http://callystro.com/demo/";
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

    public static final String test = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/.gameFiles/English.zip";

    public static final String testPath = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/.gameFiles/";

    public static final File checkOldDirectoryExists = new File(Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.PreviousdownloadDirectory);

    public static final String downloadDirectoryFullPath = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.downloadDirectory +"/www/";


    /*public static final String downloadSoundDirectoryFullPath = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.downloadDirectory +"/www/questionSounds/";*/

    public static final String downloadSoundDirectoryFullPath = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.downloadDirectory +"/www/";

    public static final String downloadAssets1ZipFullPath = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.downloadDirectory +"/www/Assets1.zip";

    public static final String downloadAssets2ZipFullPath = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.downloadDirectory +"/www/Assets2.zip";

    public static final String downloadAssets3ZipFullPath = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.downloadDirectory +"/www/Assets3.zip";

    public static final String downloadAssets4ZipFullPath = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.downloadDirectory +"/www/Assets4.zip";

    public static final String downloadAssets5ZipFullPath = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.downloadDirectory +"/www/Assets5.zip";

    public static final String downloadAssets6ZipFullPath = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.downloadDirectory +"/www/Assets6.zip";


    /*public static final String downloadEnglishZipFullPath = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.downloadDirectory +"/www/questionSounds/English.zip";*/

    public static final String downloadEnglishZipFullPath = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.downloadDirectory +"/www/English.zip";

    /*public static final String downloadHindiZipFullPath = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.downloadDirectory +"/www/questionSounds/Hindi.zip";*/

    public static final String downloadHindiZipFullPath = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.downloadDirectory +"/www/Hindi.zip";

    /*public static final String downloadKannadaZipFullPath = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.downloadDirectory +"/www/questionSounds/Kannada.zip";*/

    public static final String downloadKannadaZipFullPath = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.downloadDirectory +"/www/Kannada.zip";

    /*public static final String downloadOdiyaZipFullPath = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.downloadDirectory +"/www/questionSounds/Odiya.zip";*/

    public static final String downloadOdiyaZipFullPath = Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/"
            + Utils.downloadDirectory +"/www/Odiya.zip";



    public static final File checkForSoundFileEnglish = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/questionSounds/1.1A/English"));

    public static final File checkForSoundFileHindi = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/questionSounds/1.1A/Hindi"));

    public static final File checkForSoundFileKannada = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/questionSounds/1.1A/Kannada"));

    public static final File checkForSoundFileOdiya = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/questionSounds/1.1A/Odiya"));

    public static final File checkForgameAssets1 = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/assets/commonAssets"));

    public static final File checkForgameAssets2 = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/assets/gradeAssets/1.1A"));

    public static final File checkForgameAssets3 = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/assets/gradeAssets/2.2.1"));

    public static final File checkForgameAssets4 = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/assets/gradeAssets/2.4.3"));

    public static final File checkForgameAssets5 = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/assets/gradeAssets/3.3A"));

    public static final File checkForgameAssets6 = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/assets/gradeAssets/5.1"));

    public static final File checkForgameJson = new File((Environment.getExternalStorageDirectory() +
            "/Android/data/com.akshara.easymath/Files/Download/" + Utils.downloadDirectory +"/www/json"));
}
