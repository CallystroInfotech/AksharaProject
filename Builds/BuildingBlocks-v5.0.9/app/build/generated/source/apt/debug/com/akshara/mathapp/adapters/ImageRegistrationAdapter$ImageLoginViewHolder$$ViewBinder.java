// Generated code from Butter Knife. Do not modify!
package com.akshara.mathapp.adapters;

import android.view.View;
import butterknife.ButterKnife.Finder;
import butterknife.ButterKnife.ViewBinder;

public class ImageRegistrationAdapter$ImageLoginViewHolder$$ViewBinder<T extends com.akshara.mathapp.adapters.ImageRegistrationAdapter.ImageLoginViewHolder> implements ViewBinder<T> {
  @Override public void bind(final Finder finder, final T target, Object source) {
    View view;
    view = finder.findRequiredView(source, 2131296308, "field 'childImage'");
    target.childImage = finder.castView(view, 2131296308, "field 'childImage'");
  }

  @Override public void unbind(T target) {
    target.childImage = null;
  }
}
