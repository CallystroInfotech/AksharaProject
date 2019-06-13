package com.akshara.mathapp;

import android.content.Context;
import android.util.Log;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

public class UnzipDownloadFiles {


    public UnzipDownloadFiles(File zipFile, File targetDirectory, Context context) throws IOException {

        Log.e("here",""+zipFile);
        Log.e("here2",""+targetDirectory);
        ZipInputStream zis = new ZipInputStream(
                new BufferedInputStream(new FileInputStream(zipFile)));
        try {
            ZipEntry ze;
            int count;
            byte[] buffer = new byte[8192];
            while ((ze = zis.getNextEntry()) != null) {
                File file = new File(targetDirectory, ze.getName());
                File dir = ze.isDirectory() ? file : file.getParentFile();
                if (!dir.isDirectory() && !dir.mkdirs())
                    throw new FileNotFoundException("Failed to ensure directory: " +
                            dir.getAbsolutePath());
                if (ze.isDirectory())
                    continue;
                FileOutputStream fout = new FileOutputStream(file);
                try {
                    while ((count = zis.read(buffer)) != -1)
                        fout.write(buffer, 0, count);
                } catch (Exception e) {
                    e.printStackTrace();

                } finally {
                    fout.close();
                }
            /* if time should be restored as well
            long time = ze.getTime();
            if (time > 0)
                file.setLastModified(time);
            */
          /*  }
        }
        finally {
            zis.close();

            zipFile.delete();

            Log.d("finish","fincish");

            if(!Utils.checkForgameAssets1.exists())
            {
                new DownloadGameFilesDM(context,Utils.downloadAssets1Url,"Assets1",Utils.assets1Size);
            }
            else if(!Utils.checkForgameAssets2.exists())
            {
                new DownloadGameFilesDM(context,Utils.downloadAssets2Url,"Assets2",Utils.assets2Size);
            }
            else if(!Utils.checkForgameAssets3.exists())
            {
                new DownloadGameFilesDM(context,Utils.downloadAssets3Url,"Assets3",Utils.assets3Size);
            }
            else if(!Utils.checkForgameAssets4.exists())
            {
                new DownloadGameFilesDM(context,Utils.downloadAssets4Url,"Assets4",Utils.assets4Size);
            }
            else if(!Utils.checkForgameAssets5.exists())
            {
                new DownloadGameFilesDM(context,Utils.downloadAssets5Url,"Assets5",Utils.assets5Size);
            }
            else if(!Utils.checkForgameAssets6.exists())
            {
                new DownloadGameFilesDM(context,Utils.downloadAssets6Url,"Assets6",Utils.assets6Size);
            }
        }*/
            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
