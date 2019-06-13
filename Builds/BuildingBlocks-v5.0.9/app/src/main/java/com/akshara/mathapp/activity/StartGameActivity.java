package com.akshara.mathapp.activity;

import android.app.AlertDialog;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;

import android.support.v4.content.ContextCompat;
import android.text.SpannableString;
import android.text.style.ForegroundColorSpan;
import android.text.style.RelativeSizeSpan;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.Toast;


import com.akshara.mathapp.DownloadGameFiles;
import com.akshara.mathapp.FirebaseDatabaseStore;
import com.akshara.mathapp.MathApp;
import com.akshara.mathapp.R;
import com.akshara.mathapp.Utils;
import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.utils.AppConstants;
import com.akshara.mathapp.utils.ImageUtils;
import com.akshara.mathapp.utils.MsgUtils;
import com.codemybrainsout.ratingdialog.RatingDialog;
import com.google.firebase.analytics.FirebaseAnalytics;
import com.squareup.picasso.Callback;
import com.squareup.picasso.Picasso;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

import butterknife.Bind;
import butterknife.OnClick;


public class StartGameActivity extends BaseActivity {


    @Bind(R.id.child_image)
    ImageView childImageIv;

    private User user;

    private static ProgressDialog progressDialog;

    private boolean downloadAgain = true;

    private FirebaseAnalytics mFirebaseAnalytics;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        user = getIntent().getParcelableExtra(AppConstants.USER_EXTRA);
        if (user == null) {
            MsgUtils.displayToast(this, R.string.error_message_server_error_fallback);
            finish();
        }

        if(user.getGeoForFireBase() == null){

            if(ImageLoginActivity.geo != null)
                user.setGeoForFireBase(ImageLoginActivity.geo);
        }


        super.onCreate(savedInstanceState);
        //FirebaseApp.initializeApp(this);

        enableHomeButton();

        setImage(this, user.getAvatarPicLocalPath());

        deleteRecursive(Utils.checkOldDirectoryExists1);
        //deleteRecursive(Utils.checkOldDirectoryExists2);
        //deleteRecursive(Utils.checkOldDirectoryExists3);
        getPrivateAlbumStorageDir(this,Utils.downloadDirectory);
        showProgressBar();

        FirebaseDatabaseStore firebaseDatabaseStore = new FirebaseDatabaseStore(user,this);
        mFirebaseAnalytics = FirebaseAnalytics.getInstance(this);

    }

    private void showProgressBar()
    {
        progressDialog = new ProgressDialog(this);
        progressDialog.setTitle("Please wait ..");
        progressDialog.setMessage("Cheking files.");
        progressDialog.setIndeterminate(false);
        progressDialog.setCancelable(false);

    }

    void deleteRecursive(File fileOrDirectory) {
        if (fileOrDirectory.isDirectory())
            for (File child : fileOrDirectory.listFiles())
                deleteRecursive(child);

        fileOrDirectory.delete();
    }


    public File getPrivateAlbumStorageDir(Context context, String albumName) {
        // Get the directory for the app's private pictures directory.
        File file = new File(context.getExternalFilesDir(
                Environment.DIRECTORY_DOWNLOADS), albumName);
        if (!file.mkdir()) {
            Log.e("hai", "Directory not created");
        }

        checkForTheFilesDownloaded(user.getLanguage());
        return file;
    }


    private void checkForTheFilesDownloaded(String lang)
    {
        if(lang.equals("English") && !Utils.checkForSoundFileEnglish.exists())
        {
            new DownloadGameFiles(this,Utils.downloadEnglishSoundsUrl,"English",Utils.englishSize);
        }
        else if(lang.equals("Hindi") && !Utils.checkForSoundFileHindi.exists())
        {
            new DownloadGameFiles(this,Utils.downloadHindiSoundsUrl,"Hindi",Utils.hindiSize);
        }
        else if(lang.equals("Kannada") && !Utils.checkForSoundFileKannada.exists())
        {
            new DownloadGameFiles(this,Utils.downloadKannadaSoundsUrl,"Kannada",Utils.kannadaSize);
        }
        else if(lang.equals("Odiya") && !Utils.checkForSoundFileOdiya.exists())
        {
            new DownloadGameFiles(this,Utils.downloadOdiyaSoundsUrl,"Odiya",Utils.odiyaSize);
        }
        else if(lang.equals("Gujarati") && !Utils.checkForSoundFileGujarati.exists())
        {
            new DownloadGameFiles(this,Utils.downloadGujaratiSoundsUrl,"Gujarati",Utils.gujaratiSize);
        }
        else if(!Utils.checkForgameAssets1.exists())
        {
            new DownloadGameFiles(this,Utils.downloadAssets1Url,"Assets1",Utils.assets1Size);
        }
        else if(!Utils.checkForgameAssets2.exists())
        {
            new DownloadGameFiles(this,Utils.downloadAssets2Url,"Assets2",Utils.assets2Size);
        }
        else if(!Utils.checkForgameAssets3.exists())
        {
            new DownloadGameFiles(this,Utils.downloadAssets3Url,"Assets3",Utils.assets3Size);
        }
        else if(!Utils.checkForgameAssets4.exists())
        {
            new DownloadGameFiles(this,Utils.downloadAssets4Url,"Assets4",Utils.assets4Size);
        }
        else if(!Utils.checkForgameAssets5.exists())
        {
            new DownloadGameFiles(this,Utils.downloadAssets5Url,"Assets5",Utils.assets5Size);
        }
        else if(!Utils.checkForgameAssets6.exists())
        {
            new DownloadGameFiles(this,Utils.downloadAssets6Url,"Assets6",Utils.assets6Size);
        }
        else
        {
            checkZipExists();
        }

    }

    private boolean checkZipExists()
    {
        File englishZip = new File(Utils.downloadGameFilesDirectoryFullPath+"/English.zip");
        File hindiZip = new File(Utils.downloadGameFilesDirectoryFullPath+"/Hindi.zip");
        File kannadaZip = new File(Utils.downloadGameFilesDirectoryFullPath+"/Kannada.zip");
        File odiyaZip = new File(Utils.downloadGameFilesDirectoryFullPath+"/Odiya.zip");
        File gujaratiZip = new File(Utils.downloadGameFilesDirectoryFullPath+"/Gujarati.zip");
        File Assets1Zip = new File(Utils.downloadGameFilesDirectoryFullPath+"/Assets1.zip");
        File Assets2Zip = new File(Utils.downloadGameFilesDirectoryFullPath+"/Assets2.zip");
        File Assets3Zip = new File(Utils.downloadGameFilesDirectoryFullPath+"/Assets3.zip");
        File Assets4Zip = new File(Utils.downloadGameFilesDirectoryFullPath+"/Assets4.zip");
        File Assets5Zip = new File(Utils.downloadGameFilesDirectoryFullPath+"/Assets5.zip");
        File Assets6Zip = new File(Utils.downloadGameFilesDirectoryFullPath+"/Assets6.zip");

        if(englishZip.exists()) {
            unzipordownload(englishZip,Utils.englishSize,Utils.downloadEnglishSoundsUrl,"English",Utils.englishSize);
            return false;
        }
        else if(hindiZip.exists()) {
            unzipordownload(hindiZip,Utils.hindiSize,Utils.downloadHindiSoundsUrl,"Hindi",Utils.hindiSize);
            return false;
        }
        else if(kannadaZip.exists()) {
            unzipordownload(kannadaZip, Utils.kannadaSize,Utils.downloadKannadaSoundsUrl,"Kannada",Utils.kannadaSize);
            return false;
        }
        else if(odiyaZip.exists()) {
            unzipordownload(odiyaZip, Utils.odiyaSize,Utils.downloadOdiyaSoundsUrl,"Odiya",Utils.odiyaSize);
            return false;
        }
        else if(gujaratiZip.exists()) {
            unzipordownload(gujaratiZip, Utils.gujaratiSize,Utils.downloadGujaratiSoundsUrl,"Gujarati",Utils.gujaratiSize);
            return false;
        }
        else if(Assets1Zip.exists()) {
            unzipordownload(Assets1Zip, Utils.assets1Size,Utils.downloadAssets1Url,"Assets1",Utils.assets1Size);
            return false;
        }
        else if(Assets2Zip.exists()) {
            unzipordownload(Assets2Zip, Utils.assets2Size,Utils.downloadAssets2Url,"Assets2",Utils.assets2Size);
            return false;
        }
        else if(Assets3Zip.exists()) {
            unzipordownload(Assets3Zip, Utils.assets3Size,Utils.downloadAssets3Url,"Assets3",Utils.assets3Size);
            return false;
        }
        else if(Assets4Zip.exists()) {
            unzipordownload(Assets4Zip, Utils.assets4Size,Utils.downloadAssets4Url,"Assets4",Utils.assets4Size);
            return false;
        }
        else if(Assets5Zip.exists()) {
            unzipordownload(Assets5Zip, Utils.assets5Size,Utils.downloadAssets5Url,"Assets5",Utils.assets5Size);
            return false;
        }
        else if(Assets6Zip.exists()) {
            unzipordownload(Assets6Zip, Utils.assets6Size,Utils.downloadAssets6Url,"Assets6",Utils.assets6Size);
            return false;
        }

        return true;
    }

    private void unzipordownload(final File zipFile, long length,String url,String filename,long filesize)
    {
        if(zipFile.exists())
        {
           if(zipFile.length() != length)
            {
                new DownloadGameFiles(this,url,filename,filesize);
            }
            else
            {

                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            progressDialog.show();
                        }
                    });

                    new Thread(new Runnable() {
                        @Override
                        public void run() {
                            try {
                                unzipFile(zipFile, new File(Utils.downloadGameFilesDirectoryFullPath), StartGameActivity.this);
                            }
                            catch(Exception e)
                            {
                                e.printStackTrace();
                            }
                        }
                    }).start();


            }
        }
    }


    private void setImage(Context context, String filePath) {
        final float thumbnailWidth = ImageUtils.getWindowDimension(context, ImageUtils.WIDTH);
        if (filePath != null && !filePath.isEmpty()) {
            Picasso.with(context).load(new File(filePath))
                    .resize(((int) thumbnailWidth), ((int) thumbnailWidth))
                    .placeholder(R.drawable.image_avatar_placeholder)
                    .into(childImageIv, new Callback() {
                        @Override
                        public void onSuccess() {
                            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                                childImageIv.setClipToOutline(true);
                               // childImageIv.setBackground(ContextCompat.getDrawable(
                               //         StartGameActivity.this, R.drawable.bg_color_transparent_rounded_corners_accent_dot_border_no_padding
                               // ));
                            }
                        }

                        @Override
                        public void onError() {

                        }
                    });
        } else {
            childImageIv.setImageDrawable(ContextCompat.getDrawable(context, R.drawable.image_avatar_placeholder));
        }
    }

    @OnClick(R.id.edit_button)
    void onEditButtonClick() {
        Intent intent = new Intent(this, EditProfileActivity.class);
        intent.putExtra(AppConstants.USER_EXTRA, user);
        startActivity(intent);
    }

    @OnClick(R.id.delete_button)
    void onDeleteButtonClick() {
        MsgUtils.displayConfirmationDialog(this, null, getString(R.string.error_message_delete_avatar_confirmation), new MsgUtils.AlertDialogCallback() {
            @Override
            public void onButtonClick(DialogInterface dialog, int id, int clickedButtonType) {
                switch (clickedButtonType) {
                    case AppConstants.POSITIVE_BUTTON_CLICKED:
                        deleteUser();
                        break;
                    case AppConstants.NEGATIVE_BUTTON_CLICKED:
                        dialog.dismiss();
                        break;
                }
            }
        });

    }

    private void deleteUser() {
        showProgressDialog("Deleting");
        new Thread(new Runnable() {
            @Override
            public void run() {
                MathApp.get().getLocalDb().userDao().delete(user);
                updateUI();
            }
        }).start();
    }

    private void updateUI() {

        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                dismissProgressDialog();
                MsgUtils.displayToast(StartGameActivity.this, "Deleted user");
                finish();
            }
        });
    }

    @OnClick(R.id.start_game)
    void onStartGameClick() {

        Bundle bundle = new Bundle();
        bundle.putString("Button_click_start","");
        mFirebaseAnalytics.logEvent("Button_click_start",bundle);
        mFirebaseAnalytics.setUserId(""+user.getDeviceId());

        if (user == null)
            finish();

        String lang = user.getLanguage();

        if(lang.equals("English") && !Utils.checkForSoundFileEnglish.exists())
        {
            new DownloadGameFiles(this,Utils.downloadEnglishSoundsUrl,"English",Utils.englishSize);
        }
        else if(lang.equals("Hindi") && !Utils.checkForSoundFileHindi.exists())
        {
            new DownloadGameFiles(this,Utils.downloadHindiSoundsUrl,"Hindi",Utils.hindiSize);
        }
        else if(lang.equals("Kannada") && !Utils.checkForSoundFileKannada.exists())
        {
            new DownloadGameFiles(this,Utils.downloadKannadaSoundsUrl,"Kannada",Utils.kannadaSize);
        }
        else if(lang.equals("Odiya") && !Utils.checkForSoundFileOdiya.exists())
        {
            new DownloadGameFiles(this,Utils.downloadOdiyaSoundsUrl,"Odiya",Utils.odiyaSize);
        }
        else if(lang.equals("Gujarati") && !Utils.checkForSoundFileGujarati.exists())
        {
            new DownloadGameFiles(this,Utils.downloadGujaratiSoundsUrl,"Gujarati",Utils.gujaratiSize);
        }
        else if(!Utils.checkForgameAssets1.exists())
        {
            new DownloadGameFiles(this,Utils.downloadAssets1Url,"Assets1",Utils.assets1Size);
        }
        else if(!Utils.checkForgameAssets2.exists())
        {
            new DownloadGameFiles(this,Utils.downloadAssets2Url,"Assets2",Utils.assets2Size);
        }
        else if(!Utils.checkForgameAssets3.exists())
        {
            new DownloadGameFiles(this,Utils.downloadAssets3Url,"Assets3",Utils.assets3Size);
        }
        else if(!Utils.checkForgameAssets4.exists())
        {
            new DownloadGameFiles(this,Utils.downloadAssets4Url,"Assets4",Utils.assets4Size);
        }
        else if(!Utils.checkForgameAssets5.exists())
        {
            new DownloadGameFiles(this,Utils.downloadAssets5Url,"Assets5",Utils.assets5Size);
        }
        else if(!Utils.checkForgameAssets6.exists())
        {
            new DownloadGameFiles(this,Utils.downloadAssets6Url,"Assets6",Utils.assets6Size);
        }
        else
        {
            long size = folderSize(new File(Utils.downloadGameFilesDirectoryFullPath+"/assets"));

            if((size != Utils.assetsFullSize) && downloadAgain)
            {
                //download again.
                //checkForTheFilesDownloaded(user.getLanguage());
                AlertDialog.Builder builder;
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                    builder = new AlertDialog.Builder(this, android.R.style.Theme_Material_Dialog_Alert);
                } else {
                    builder = new AlertDialog.Builder(this);
                }
                builder.setTitle("Download again")
                        .setMessage("Are you sure you want to download the content again?")
                        .setPositiveButton(android.R.string.yes, new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int which) {
                                downloadAgain = true;
                                // continue with delete
                                deleteAssetFiles(new File(Utils.downloadGameFilesDirectoryFullPath+"/assets"));
                                checkForTheFilesDownloaded(user.getLanguage());
                            }
                        })
                        .setNegativeButton(android.R.string.no, new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int which) {
                                // do nothing
                                downloadAgain = false;
                            }
                        })
                        .setIcon(android.R.drawable.ic_dialog_alert)
                        .show();

            }
            else if(checkZipExists()) {
                Intent intent = new Intent(this, WebViewActivity.class);
                intent.putExtra(AppConstants.USER_EXTRA, user);
                startActivity(intent);

            }
        }
        /*Intent intent = new Intent(this, WebViewActivity.class);
        intent.putExtra(AppConstants.USER_EXTRA, user);
        startActivity(intent);*/


    }

    void deleteAssetFiles(File fileOrDirectory) {
        if (fileOrDirectory.isDirectory())
            for (File child : fileOrDirectory.listFiles())
                deleteRecursive(child);

        fileOrDirectory.delete();
    }

    @Override
    protected int getLayoutResource() {
        return R.layout.activity_start_game;
    }

    @Override
    protected String getLanguageValue() {
        return user.getLanguage();
    }


    public static void unzipFile(File zipFile, File targetDirectory, Context context) throws IOException {
        Log.e("here","here");

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
                    progressDialog.setCancelable(true);
                    progressDialog.setTitle("Problem while unzipping");
                    progressDialog.setMessage("please try again");
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


            progressDialog.dismiss();

            StartGameActivity obj = new StartGameActivity();
            obj.checkZipExists();

        }
    }

    public static long folderSize(File directory) {
        long length = 0;
        for (File file : directory.listFiles()) {
            if (file.isFile())
                length += file.length();
            else
                length += folderSize(file);
        }
        return length;
    }
}
