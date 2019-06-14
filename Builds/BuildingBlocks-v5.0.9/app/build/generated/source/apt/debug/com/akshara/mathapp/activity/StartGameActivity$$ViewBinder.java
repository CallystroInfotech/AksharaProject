// Generated code from Butter Knife. Do not modify!
package com.akshara.mathapp.activity;

import android.view.View;
import butterknife.ButterKnife.Finder;
import butterknife.ButterKnife.ViewBinder;

public class StartGameActivity$$ViewBinder<T extends com.akshara.mathapp.activity.StartGameActivity> implements ViewBinder<T> {
  @Override public void bind(final Finder finder, final T target, Object source) {
    View view;
    view = finder.findRequiredView(source, 2131296308, "field 'childImageIv'");
    target.childImageIv = finder.castView(view, 2131296308, "field 'childImageIv'");
    view = finder.findRequiredView(source, 2131296343, "method 'onEditButtonClick'");
    view.setOnClickListener(
      new butterknife.internal.DebouncingOnClickListener() {
        @Override public void doClick(
          android.view.View p0
        ) {
          target.onEditButtonClick();
        }
      });
    view = finder.findRequiredView(source, 2131296323, "method 'onDeleteButtonClick'");
    view.setOnClickListener(
      new butterknife.internal.DebouncingOnClickListener() {
        @Override public void doClick(
          android.view.View p0
        ) {
          target.onDeleteButtonClick();
        }
      });
    view = finder.findRequiredView(source, 2131296470, "method 'onStartGameClick'");
    view.setOnClickListener(
      new butterknife.internal.DebouncingOnClickListener() {
        @Override public void doClick(
          android.view.View p0
        ) {
          target.onStartGameClick();
        }
      });
  }

  @Override public void unbind(T target) {
    target.childImageIv = null;
  }
}
