package com.akshara.mathapp;

import android.app.ProgressDialog;
import android.content.Context;
import android.os.AsyncTask;
import android.os.Handler;
import android.util.Log;
import android.widget.Toast;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

/**
 * Created by Callystro-pc on 02-Jun-18.
 */

public class DownloadAssetsFiles6 {
    private static final String TAG = "Download Task";
    private Context context;
    private String downloadUrl = "", downloadFileName = "";
    ProgressDialog progressDialog;

    public DownloadAssetsFiles6(Context context, String downloadUrl) {
        this.context = context;
        this.downloadUrl = downloadUrl;

        downloadFileName = downloadUrl.replace(Utils.mainUrl, "");//Create file name by picking download file name from URL
        Log.e(TAG, downloadFileName);



        new DownloadingTask().execute();

    }

    public static void unzip(File zipFile, File targetDirectory, Context context) throws IOException {
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
                } catch (Exception e)
                {
                    e.printStackTrace();
                }
                finally {
                    fout.close();
                }
            /* if time should be restored as well
            long time = ze.getTime();
            if (time > 0)
                file.setLastModified(time);
            */
            }
        }
        finally {
            zis.close();

            zipFile.delete();

            Log.d("finish","fincish");

            if(!Utils.checkForgameAssets1.exists())
            {
                new DownloadAssetsFiles1(context,Utils.downloadAssets1Url);
            }
            else if(!Utils.checkForgameAssets2.exists())
            {
                new DownloadAssetsFiles6(context,Utils.downloadAssets2Url);
            }
            else if(!Utils.checkForgameAssets3.exists())
            {
                new DownloadAssetsFiles3(context,Utils.downloadAssets3Url);
            }
            else if(!Utils.checkForgameAssets4.exists())
            {
                new DownloadAssetsFiles4(context,Utils.downloadAssets4Url);
            }
            else if(!Utils.checkForgameAssets5.exists())
            {
                new DownloadAssetsFiles5(context,Utils.downloadAssets5Url);
            }
            else if(!Utils.checkForgameAssets6.exists())
            {
                new DownloadAssetsFiles6(context,Utils.downloadAssets6Url);
            }

        }
    }

    private class DownloadingTask extends AsyncTask<Void, Integer, Void> {

        File apkStorage = null;
        File outputFile = null;

        @Override
        protected void onPreExecute() {
            super.onPreExecute();

            progressDialog = new ProgressDialog(context);
            progressDialog.setTitle("Please wait ..");
            progressDialog.setMessage("download in progress 6/6");
            progressDialog.setIndeterminate(false);
            progressDialog.setMax(100);
            progressDialog.setProgressStyle(progressDialog.STYLE_HORIZONTAL);
            progressDialog.setCancelable(false);
            progressDialog.show();
        }



        @Override
        protected void onPostExecute(Void result) {
            try {
                if (outputFile != null) {

                    unzip(new File(Utils.downloadAssets6ZipFullPath), new File(Utils.downloadDirectoryFullPath), context);

                    progressDialog.dismiss();

                } else {

                    Log.e(TAG, "Download Failed");
                    Toast.makeText(context, "Experiencing slow network, Please try again", Toast.LENGTH_LONG).show();
                    progressDialog.setCancelable(true);
                    progressDialog.setTitle("Experiencing slow network");
                    progressDialog.setMessage("please try again");
                }
            } catch (Exception e) {
                e.printStackTrace();

                //Change button text if exception occurs
                // buttonText.setText(R.string.downloadFailed);
                new Handler().postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        //  buttonText.setEnabled(true);
                        //  buttonText.setText(R.string.downloadAgain);
                    }
                }, 3000);
                Log.e(TAG, "Download Failed with Exception - " + e.getLocalizedMessage());

            }


            super.onPostExecute(result);
        }

        @Override
        protected Void doInBackground(Void... arg0) {
            try {

                URL url = new URL(downloadUrl);//Create Download URl
                HttpURLConnection c = (HttpURLConnection) url.openConnection();//Open Url Connection
                c.setRequestMethod("GET");//Set Request Method to "GET" since we are grtting data
                c.connect();//connect the URL Connection

                int fileLength = c.getContentLength();
                //If Connection response is not OK then show Logs
                if (c.getResponseCode() != HttpURLConnection.HTTP_OK) {
                    Log.e(TAG, "Server returned HTTP " + c.getResponseCode()
                            + " " + c.getResponseMessage());

                }


                //Get File if SD card is present
                if (new CheckForSDCard().isSDCardPresent()) {

                    apkStorage = new File(Utils.downloadDirectoryFullPath);

                    Log.e("hai",""+apkStorage);

                } else
                    Toast.makeText(context, "No SD Card", Toast.LENGTH_SHORT).show();

                //If File is not present create directory
                if (!apkStorage.exists()) {
                    apkStorage.mkdirs();
                    Log.e(TAG, "Directory Created.");
                }


                outputFile = new File(apkStorage, downloadFileName);//Create Output file in Main File

                //Create New File if not present
                if (!outputFile.exists()) {
                    outputFile.createNewFile();
                    Log.e(TAG, "File Created");
                }

                FileOutputStream fos = new FileOutputStream(outputFile);//Get OutputStream for NewFile Location

                InputStream is = c.getInputStream();//Get InputStream for connection

                byte[] buffer = new byte[1024];//Set buffer type
                int len1 = 0;//init length
                long total = 0;
                while ((len1 = is.read(buffer)) != -1) {
                    total += len1;
                    publishProgress((int)(total*100/fileLength));
                    fos.write(buffer, 0, len1);//Write new file
                }

                //Close all connection after doing task
                fos.close();
                is.close();

            }
            catch(Exception e) {
                //Read exception if something went wrong
                e.printStackTrace();
                //outputFile.delete();
                outputFile = null;
                Log.e(TAG, "Download Error Exception " + e.getMessage());

            }

            return null;
        }

        @Override
        protected void onProgressUpdate(Integer... values) {
            super.onProgressUpdate(values);
            progressDialog.setProgress(values[0]);
        }
    }
}
