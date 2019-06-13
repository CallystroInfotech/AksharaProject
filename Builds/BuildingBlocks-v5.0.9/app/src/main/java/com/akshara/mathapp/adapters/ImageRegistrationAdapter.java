package com.akshara.mathapp.adapters;

import android.content.Context;
import android.os.Build;

import android.support.v4.content.ContextCompat;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import com.akshara.mathapp.R;
import com.akshara.mathapp.activity.GenderAvatarSelectionActivity;
import com.akshara.mathapp.utils.ImageUtils;
import com.squareup.picasso.Callback;
import com.squareup.picasso.Picasso;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import butterknife.Bind;
import butterknife.ButterKnife;

/**
 * Created by Rajeef on 2/1/18
 */

public class ImageRegistrationAdapter extends RecyclerView.Adapter<ImageRegistrationAdapter.ImageLoginViewHolder> {
    private List<String> userList = new ArrayList<>();
    private ImageTapListener imageTapListener;
    private Context context;

    private List<ImageLoginViewHolder> imageItems = new ArrayList<>();

    public interface ImageTapListener {
        void onTap(String uname,View view,List<ImageLoginViewHolder> items);
    }

    public ImageRegistrationAdapter(Context context, ImageTapListener imageTapListener) {
        this.context = context;
        this.imageTapListener = imageTapListener;
    }

    public void setDataset(List<String> userList) {
        this.userList = userList;
    }

    @Override
    public ImageLoginViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View rootView = LayoutInflater.from(parent.getContext()).inflate(R.layout.layout_image_login_item, parent, false);
        return new ImageLoginViewHolder(rootView);
    }

    @Override
    public void onBindViewHolder(ImageLoginViewHolder holder, int position) {
        final String user = userList.get(position);
        //holder.childName.setText(user.getName());
        if (user != null && !user.isEmpty()) {
            setImage(holder, user);
        } else {
            holder.childImage.setImageDrawable(ContextCompat.getDrawable(context, R.drawable.image_avatar_placeholder));
        }
        holder.childImage.setPadding(10,10,10,10);
        imageItems.add(holder);

        GenderAvatarSelectionActivity g = new GenderAvatarSelectionActivity();
        g.setListDisabled(imageItems);

        holder.childImage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                if (imageTapListener != null)
                    imageTapListener.onTap(user,view,imageItems);
            }
        });
    }

    private void setImage(final ImageLoginViewHolder holder, String filePath) {
        final float thumbnailWidth = ImageUtils.getWindowDimension(context, ImageUtils.WIDTH);
        Picasso.with(context).load(new File(filePath))
                .resize(((int) thumbnailWidth), ((int) thumbnailWidth))
                .placeholder(R.drawable.image_avatar_placeholder)
                .into(holder.childImage, new Callback() {
                    @Override
                    public void onSuccess() {
                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                            holder.childImage.setClipToOutline(true);
                           // holder.childImage.setBackground(ContextCompat.getDrawable(
                           //         context, R.drawable.bg_color_transparent_rounded_corners_accent_dot_border_no_padding
                           // ));
                        }
                    }

                    @Override
                    public void onError() {

                    }
                });
    }

    @Override
    public int getItemCount() {
        return userList.size();
    }

    public static class ImageLoginViewHolder extends RecyclerView.ViewHolder {

        //@Bind(R.id.child_name)
        //FontTextView childName;

        @Bind(R.id.child_image)
        public ImageView childImage;

        public ImageLoginViewHolder(View itemView) {
            super(itemView);
            ButterKnife.bind(this, itemView);
        }
    }
}
