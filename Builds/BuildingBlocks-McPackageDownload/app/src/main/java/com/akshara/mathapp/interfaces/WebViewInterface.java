package com.akshara.mathapp.interfaces;

import android.app.DownloadManager;
import android.content.BroadcastReceiver;
import android.content.Context;

import android.content.Intent;
import android.net.Uri;

import android.os.Environment;
import android.os.StatFs;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.widget.Toast;


import com.akshara.mathapp.DownloadEnglishSoundFiles;
import com.akshara.mathapp.Utils;
import com.akshara.mathapp.activity.WebViewActivity;
import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.utils.AppConstants;


/**
 * Created by Callystro-pc on 04-Jul-18.
 */

public class WebViewInterface {

    private Context context;
    private long queId;
    private DownloadManager downloadManager;
    private BroadcastReceiver setReciever;

    WebViewActivity wb;

    public WebViewInterface(Context context)
    {
        this.context = context;
    }

    @JavascriptInterface
    public void showAlert()
    {
        Toast.makeText(context, "hai", Toast.LENGTH_SHORT).show();
        wb = new WebViewActivity();
        String theArgumentYouWantToPass = "Hai";


        /*wb.cordovaWebView.postDelayed(new Runnable() {
            @Override
            public void run() {
                wb.cordovaWebView.reload();
            }
        },10);*/


    }



    @JavascriptInterface
    public void showToast(String msg)
    {

        /*long size = getAvailableSpaceInMB();

        if(size <= 200)
        {
            Toast.makeText(context, "Not Enaugh Space available to download please clear some space and try again", Toast.LENGTH_SHORT).show();
        }
        else {

            Log.e("download","download");
            Toast.makeText(context, msg + "" + size, Toast.LENGTH_SHORT).show();

            new Thread(new Runnable() {
                @Override
                public void run() {
                    //new DownloadEnglishSoundFiles(context, Utils.downloadEnglishSoundsUrl);
                    downloadManager = (DownloadManager) context.getSystemService(Context.DOWNLOAD_SERVICE);
                    DownloadManager.Request request = new DownloadManager.Request(Uri.parse(Utils.downloadEnglishSoundsUrl));
                    //request.setDestinationInExternalPublicDir(Utils.downloadDirectoryFullPath,"/English.zip");
                    request.setDestinationInExternalFilesDir(context, "/Download/.gameFiles", "/English.zip");


                    queId = downloadManager.enqueue(request);


                }
            }).start();
        }*/

        //new DownloadEnglishSoundFiles(context,Utils.downloadEnglishSoundsUrl);
    }


    /**
     * @return Number of bytes available on External storage
     */
    public static long getAvailableSpaceInBytes() {
        long availableSpace = -1L;
        StatFs stat = new StatFs(Environment.getExternalStorageDirectory().getPath());
        availableSpace = (long) stat.getAvailableBlocks() * (long) stat.getBlockSize();

        return availableSpace;
    }


    /**
     * @return Number of kilo bytes available on External storage
     */
    public static long getAvailableSpaceInKB(){
        final long SIZE_KB = 1024L;
        long availableSpace = -1L;
        StatFs stat = new StatFs(Environment.getExternalStorageDirectory().getPath());
        availableSpace = (long) stat.getAvailableBlocks() * (long) stat.getBlockSize();
        return availableSpace/SIZE_KB;
    }
    /**
     * @return Number of Mega bytes available on External storage
     */
    public static long getAvailableSpaceInMB(){
        final long SIZE_KB = 1024L;
        final long SIZE_MB = SIZE_KB * SIZE_KB;
        long availableSpace = -1L;
        StatFs stat = new StatFs(Environment.getExternalStorageDirectory().getPath());
        availableSpace = (long) stat.getAvailableBlocks() * (long) stat.getBlockSize();
        return availableSpace/SIZE_MB;
    }

    /**
     * @return Number of gega bytes available on External storage
     */
    public static long getAvailableSpaceInGB(){
        final long SIZE_KB = 1024L;
        final long SIZE_GB = SIZE_KB * SIZE_KB * SIZE_KB;
        long availableSpace = -1L;
        StatFs stat = new StatFs(Environment.getExternalStorageDirectory().getPath());
        availableSpace = (long) stat.getAvailableBlocks() * (long) stat.getBlockSize();
        return availableSpace/SIZE_GB;
    }

}
