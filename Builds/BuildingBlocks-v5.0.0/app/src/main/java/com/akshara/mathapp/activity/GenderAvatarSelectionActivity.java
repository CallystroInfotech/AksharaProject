package com.akshara.mathapp.activity;

import android.content.Intent;
import android.content.res.AssetManager;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ImageButton;

import com.akshara.mathapp.MathApp;
import com.akshara.mathapp.R;
import com.akshara.mathapp.Utils;
import com.akshara.mathapp.adapters.ImageRegistrationAdapter;
import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.utils.AppConstants;
import com.akshara.mathapp.utils.ImageHandler;
import com.akshara.mathapp.utils.MsgUtils;
import com.akshara.mathapp.utils.itemdecorators.GridVerticalItemDecorator;
import com.akshara.mathapp.view.FontTextView;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

import butterknife.Bind;
import butterknife.OnClick;

public class GenderAvatarSelectionActivity extends BaseActivity implements AdapterView.OnItemSelectedListener {



    @Bind(R.id.done_button)
    ImageButton doneButton;

    private ImageHandler mImageHandler;
    float thumbnailWidth = 0;

    private String selectedLanguage;
    private String orgName = "";

    private String selectedGender = null;
    private int selectedGenderPosition = 0;
    private String finalImagePath = null;

    Drawable highlight;
    String name = null;

    private Boolean fish = true;
    private Boolean butterfly = true;
    private Boolean sun = true;
    private Boolean flower = true;
    private Boolean parrot = true;
    private Boolean tree = true;

    private List<User> userLists = new ArrayList<>();

    private ImageRegistrationAdapter imageRegistrationAdapter;

    @Bind(R.id.recyclerRegView)
    RecyclerView recyclerRegViewList;

    private static final int GRID_COLUMN_COUNT = 2;

    @Bind(R.id.selectAvatarText)
    FontTextView selectAvatarText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        selectedLanguage = getIntent().getStringExtra(AppConstants.SELECTED_LANGUAGE);
        super.onCreate(savedInstanceState);
        orgName = getIntent().getStringExtra(AppConstants.ORG_NAME_EXTRA);
        enableHomeButton();
        //downloadFullImages();
        setupViews();

    }

    private void downloadFullImages()
    {
        copyAssets("fish.jpg");
        copyAssets("butterfly.jpg");
        copyAssets("flower.jpg");
        copyAssets("parrot.jpg");
        copyAssets("sun.jpg");
        copyAssets("tree.jpg");
    }


    private void getData(final ImageRegistrationAdapter.ImageLoginViewHolder v1,final ImageRegistrationAdapter.ImageLoginViewHolder v2,
                         final ImageRegistrationAdapter.ImageLoginViewHolder v3, final ImageRegistrationAdapter.ImageLoginViewHolder v4,
                         final ImageRegistrationAdapter.ImageLoginViewHolder v5,final ImageRegistrationAdapter.ImageLoginViewHolder v6)
    {

        new Thread(new Runnable() {
            @Override
            public void run() {
                userLists = MathApp.get().getLocalDb().userDao().getAll();
                //getData();


                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        if (!userLists.isEmpty()) {
                            for(int i=0;i<userLists.size();i++)
                            {
                                if(userLists.get(i).getName().equals(AppConstants.FISH_AVATAR_NAME))
                                {
                                    fish = false;
                                }
                                else if(userLists.get(i).getName().equals(AppConstants.BUTTERFLY_AVATAR_NAME))
                                {
                                    butterfly = false;
                                }
                                else if(userLists.get(i).getName().equals(AppConstants.SUN_AVATAR_NAME))
                                {
                                    sun = false;
                                }
                                else if(userLists.get(i).getName().equals(AppConstants.FLOWER_AVATAR_NAME))
                                {
                                    flower = false;
                                }
                                else if(userLists.get(i).getName().equals(AppConstants.PARROT_AVATAR_NAME))
                                {
                                    parrot = false;
                                }
                                else if(userLists.get(i).getName().equals(AppConstants.TREE_AVATAR_NAME))
                                {
                                    tree = false;
                                }
                                else
                                {
                                    //do nothing;
                                }
                            }
                            checkDisbaled(v1, v2, v3, v4, v5, v6);
                        } else {
                            return;
                        }
                    }
                });


            }
        }).start();


    }


    private void setupViews() {
        String selectAvatar = getString(R.string.textview_set_profile_pic);
        selectAvatarText.setText(selectAvatar);

        List<String> picList = new ArrayList<>();
        picList.add(AppConstants.FISH_AVATAR_URL);
        picList.add(AppConstants.BUTTERFLY_AVATAR_URL);
        picList.add(AppConstants.FLOWER_AVATAR_URL);
        picList.add(AppConstants.PARROT_AVATAR_URL);
        picList.add(AppConstants.SUN_AVATAR_URL);
        picList.add(AppConstants.TREE_AVATAR_URL);


        imageRegistrationAdapter = new ImageRegistrationAdapter(this, new ImageRegistrationAdapter.ImageTapListener() {
            @Override
            public void onTap(String uname,View view,List<ImageRegistrationAdapter.ImageLoginViewHolder> IconsList) {
                //gotoStartGameScreen(user);
                onClickAvatars(uname,view,IconsList);
            }
        });
        GridLayoutManager gridLayoutManager = new GridLayoutManager(this, GRID_COLUMN_COUNT);
        GridVerticalItemDecorator gridVerticalItemDecorator = new GridVerticalItemDecorator(this);
        recyclerRegViewList.addItemDecoration(gridVerticalItemDecorator);
        recyclerRegViewList.setHasFixedSize(true);
        recyclerRegViewList.setLayoutManager(gridLayoutManager);
        recyclerRegViewList.setAdapter(imageRegistrationAdapter);
        recyclerRegViewList.setNestedScrollingEnabled(false);

        imageRegistrationAdapter.setDataset(picList);
        imageRegistrationAdapter.notifyDataSetChanged();

    }

    private void onClickAvatars(String avatarName,View view,List<ImageRegistrationAdapter.ImageLoginViewHolder> IconsList)
    {
        setBackgroundToNull(IconsList);
        view.setBackgroundResource(R.drawable.highlight);
        finalImagePath = avatarName;
        name = getAvatarName(avatarName);
        doneButton.setSelected(true);
    }

    public void setBackgroundToNull(List<ImageRegistrationAdapter.ImageLoginViewHolder> IconsList)
    {

            ImageRegistrationAdapter.ImageLoginViewHolder v1 = IconsList.get(0);
            ImageRegistrationAdapter.ImageLoginViewHolder v2 = IconsList.get(1);
            ImageRegistrationAdapter.ImageLoginViewHolder v3 = IconsList.get(2);
            ImageRegistrationAdapter.ImageLoginViewHolder v4 = IconsList.get(3);
            ImageRegistrationAdapter.ImageLoginViewHolder v5 = IconsList.get(4);
            ImageRegistrationAdapter.ImageLoginViewHolder v6 = IconsList.get(5);


            v1.childImage.setBackgroundResource(0);
            v2.childImage.setBackgroundResource(0);
            v3.childImage.setBackgroundResource(0);
            v4.childImage.setBackgroundResource(0);
            v5.childImage.setBackgroundResource(0);
            v6.childImage.setBackgroundResource(0);

    }


    public void setListDisabled(List<ImageRegistrationAdapter.ImageLoginViewHolder> IconsList)
    {
        if(IconsList.size()>=6) {
            ImageRegistrationAdapter.ImageLoginViewHolder v1 = IconsList.get(0);
            ImageRegistrationAdapter.ImageLoginViewHolder v2 = IconsList.get(1);
            ImageRegistrationAdapter.ImageLoginViewHolder v3 = IconsList.get(2);
            ImageRegistrationAdapter.ImageLoginViewHolder v4 = IconsList.get(3);
            ImageRegistrationAdapter.ImageLoginViewHolder v5 = IconsList.get(4);
            ImageRegistrationAdapter.ImageLoginViewHolder v6 = IconsList.get(5);

            getData(v1, v2, v3, v4, v5, v6);

        }
    }



    public void checkDisbaled(ImageRegistrationAdapter.ImageLoginViewHolder v1,ImageRegistrationAdapter.ImageLoginViewHolder v2,
            ImageRegistrationAdapter.ImageLoginViewHolder v3, ImageRegistrationAdapter.ImageLoginViewHolder v4,
                              ImageRegistrationAdapter.ImageLoginViewHolder v5,ImageRegistrationAdapter.ImageLoginViewHolder v6)
    {
        Log.e("fish2",""+fish);
        if(!fish) {
            v1.childImage.setColorFilter(Color.argb(150, 169, 169, 169));
            v1.childImage.setEnabled(false);
        }
        if(!butterfly) {
            v2.childImage.setColorFilter(Color.argb(150, 169, 169, 169));
            v2.childImage.setEnabled(false);
        }
        if(!flower) {
            v3.childImage.setColorFilter(Color.argb(150, 169, 169, 169));
            v3.childImage.setEnabled(false);
        }
        if(!parrot) {
            v4.childImage.setColorFilter(Color.argb(150, 169, 169, 169));
            v4.childImage.setEnabled(false);
        }
        if(!sun) {
            v5.childImage.setColorFilter(Color.argb(150, 169, 169, 169));
            v5.childImage.setEnabled(false);
        }
        if(!tree) {
            v6.childImage.setColorFilter(Color.argb(150, 169, 169, 169));
            v6.childImage.setEnabled(false);
        }
    }


    public String getAvatarName(String avatarName)
    {
        String aName = null;

        if(avatarName.equals(AppConstants.FISH_AVATAR_URL))
        {
            aName = AppConstants.FISH_AVATAR_NAME;
        }
        else if(avatarName.equals(AppConstants.BUTTERFLY_AVATAR_URL))
        {
            aName = AppConstants.BUTTERFLY_AVATAR_NAME;
        }
        else if(avatarName.equals(AppConstants.FLOWER_AVATAR_URL))
        {
            aName = AppConstants.FLOWER_AVATAR_NAME;
        }
        else if(avatarName.equals(AppConstants.PARROT_AVATAR_URL))
        {
            aName = AppConstants.PARROT_AVATAR_NAME;
        }
        else if(avatarName.equals(AppConstants.SUN_AVATAR_URL))
        {
            aName = AppConstants.SUN_AVATAR_NAME;
        }
        else if(avatarName.equals(AppConstants.TREE_AVATAR_URL))
        {
            aName = AppConstants.TREE_AVATAR_NAME;
        }

        return aName;
    }



    @Override
    public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
        selectedGenderPosition = i;
        switch (i) {
            case 1:
                selectedGender = AppConstants.GENDER_FEMALE;
                break;
            case 2:
                selectedGender = AppConstants.GENDER_MALE;
                break;
        }
        setDoneButton();
    }

    private void setDoneButton() {
        if (selectedGenderPosition != 0 && finalImagePath != null) {
            doneButton.setSelected(true);
        } else {
            doneButton.setSelected(false);
        }
    }

    @Override
    public void onNothingSelected(AdapterView<?> adapterView) {

    }



    @OnClick(R.id.done_button)
    public void onDoneButtonClicked() {
        if (finalImagePath == null) {
            MsgUtils.displayToast(this, R.string.message_error_select_profile_picture);
        } else {
            Intent intent = new Intent(this, StudentDetailActivity.class);
            User user = new User();
            user.setName(name);
            user.setLanguage(selectedLanguage);
            user.setGender(selectedGender);
            user.setAvatarPicLocalPath(finalImagePath);
            user.setOrganization(orgName);
            intent.putExtra(AppConstants.USER_EXTRA, user);
            startActivity(intent);
        }
    }


    @Override
    protected int getLayoutResource() {
        return R.layout.activity_gender_avatar_selection;
    }

    @Override
    protected String getLanguageValue() {
        return selectedLanguage;
    }

    @Override
    public void onBackPressed() {
        finish();
    }

    private void copyAssets(String filename)
    {
        String dirPath = Utils.downloadDirectoryFullPath;
        File dir = new File(dirPath);
        if(!dir.exists())
        {
            dir.mkdirs();
        }
        AssetManager assetManager = getAssets();
        InputStream in =null;
        OutputStream out = null;
        try{
            in = assetManager.open(filename);
            File outFile = new File(dirPath,filename);
            out = new FileOutputStream(outFile);
            copyFileToDirectory(in,out);
        }catch (Exception e)
        {
            e.printStackTrace();
        }
        finally {
            if(in != null)
            {
                try{
                    in.close();
                }
                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
            if(out != null)
            {
                try{
                    out.close();
                }
                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
        }
    }


    private void copyFileToDirectory(InputStream in , OutputStream out)throws IOException
    {
        byte[] buffer = new byte[1024];
        int read;

        while((read = in.read(buffer)) != -1)
        {
            out.write(buffer,0,read);
        }
    }


}
