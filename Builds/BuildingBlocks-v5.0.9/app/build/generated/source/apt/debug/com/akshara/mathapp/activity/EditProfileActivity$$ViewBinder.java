// Generated code from Butter Knife. Do not modify!
package com.akshara.mathapp.activity;

import android.view.View;
import butterknife.ButterKnife.Finder;
import butterknife.ButterKnife.ViewBinder;

public class EditProfileActivity$$ViewBinder<T extends com.akshara.mathapp.activity.EditProfileActivity> implements ViewBinder<T> {
  @Override public void bind(final Finder finder, final T target, Object source) {
    View view;
    view = finder.findRequiredView(source, 2131296376, "field 'languageEditSpinner'");
    target.languageEditSpinner = finder.castView(view, 2131296376, "field 'languageEditSpinner'");
    view = finder.findRequiredView(source, 2131296432, "field 'schoolTypeSpinner'");
    target.schoolTypeSpinner = finder.castView(view, 2131296432, "field 'schoolTypeSpinner'");
    view = finder.findRequiredView(source, 2131296311, "field 'classTypeSpinner'");
    target.classTypeSpinner = finder.castView(view, 2131296311, "field 'classTypeSpinner'");
    view = finder.findRequiredView(source, 2131296342, "method 'onDoneButtonClicked'");
    view.setOnClickListener(
      new butterknife.internal.DebouncingOnClickListener() {
        @Override public void doClick(
          android.view.View p0
        ) {
          target.onDoneButtonClicked();
        }
      });
  }

  @Override public void unbind(T target) {
    target.languageEditSpinner = null;
    target.schoolTypeSpinner = null;
    target.classTypeSpinner = null;
  }
}
