// Generated code from Butter Knife. Do not modify!
package com.akshara.mathapp.activity;

import android.view.View;
import butterknife.ButterKnife.Finder;
import butterknife.ButterKnife.ViewBinder;

public class GenderAvatarSelectionActivity$$ViewBinder<T extends com.akshara.mathapp.activity.GenderAvatarSelectionActivity> implements ViewBinder<T> {
  @Override public void bind(final Finder finder, final T target, Object source) {
    View view;
    view = finder.findRequiredView(source, 2131296342, "field 'doneButton' and method 'onDoneButtonClicked'");
    target.doneButton = finder.castView(view, 2131296342, "field 'doneButton'");
    view.setOnClickListener(
      new butterknife.internal.DebouncingOnClickListener() {
        @Override public void doClick(
          android.view.View p0
        ) {
          target.onDoneButtonClicked();
        }
      });
    view = finder.findRequiredView(source, 2131296422, "field 'recyclerRegViewList'");
    target.recyclerRegViewList = finder.castView(view, 2131296422, "field 'recyclerRegViewList'");
    view = finder.findRequiredView(source, 2131296449, "field 'selectAvatarText'");
    target.selectAvatarText = finder.castView(view, 2131296449, "field 'selectAvatarText'");
  }

  @Override public void unbind(T target) {
    target.doneButton = null;
    target.recyclerRegViewList = null;
    target.selectAvatarText = null;
  }
}
