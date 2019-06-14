// Generated code from Butter Knife. Do not modify!
package com.akshara.mathapp.activity;

import android.view.View;
import butterknife.ButterKnife.Finder;
import butterknife.ButterKnife.ViewBinder;

public class ImageLoginActivity$$ViewBinder<T extends com.akshara.mathapp.activity.ImageLoginActivity> implements ViewBinder<T> {
  @Override public void bind(final Finder finder, final T target, Object source) {
    View view;
    view = finder.findRequiredView(source, 2131296423, "field 'recyclerViewList'");
    target.recyclerViewList = finder.castView(view, 2131296423, "field 'recyclerViewList'");
    view = finder.findRequiredView(source, 2131296424, "field 'regButton' and method 'onRegisterClicked'");
    target.regButton = finder.castView(view, 2131296424, "field 'regButton'");
    view.setOnClickListener(
      new butterknife.internal.DebouncingOnClickListener() {
        @Override public void doClick(
          android.view.View p0
        ) {
          target.onRegisterClicked();
        }
      });
  }

  @Override public void unbind(T target) {
    target.recyclerViewList = null;
    target.regButton = null;
  }
}
