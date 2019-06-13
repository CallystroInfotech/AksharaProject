package com.akshara.mathapp;

import android.app.DownloadManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.util.Log;
import android.widget.Toast;

import java.io.File;

import static android.content.Context.DOWNLOAD_SERVICE;

public class RecieverBroadcast extends BroadcastReceiver {

    DownloadManager dm;
    @Override
    public void onReceive(Context context, Intent intent) {
        dm = (DownloadManager) context.getSystemService(DOWNLOAD_SERVICE);


        String action = intent.getAction();
        if(DownloadManager.ACTION_DOWNLOAD_COMPLETE.equals(action)){
            DownloadManager.Query query = new DownloadManager.Query();
            DownloadGameFilesDM obj = new DownloadGameFilesDM();
            query.setFilterById(obj.queid);

            Cursor c = dm.query(query);

            if(c.moveToFirst()){
                int columnIndex = c.getColumnIndex(DownloadManager.COLUMN_STATUS);
                if(DownloadManager.STATUS_SUCCESSFUL == c.getInt(columnIndex)){
                    Log.e("donwload","complete");
                    Toast.makeText(context, "download complete", Toast.LENGTH_SHORT).show();
                    try{
                        new UnzipDownloadFiles(new File(Utils.downloadGameFilesDirectory+"Assets.zip"), new File(Utils.downloadGameFilesDirectoryFullPath), context);
                    }catch (Exception e){
                        e.printStackTrace();
                    }
                }

            }
        }
    }
}
