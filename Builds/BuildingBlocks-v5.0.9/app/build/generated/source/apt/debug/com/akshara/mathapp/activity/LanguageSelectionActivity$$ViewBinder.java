// Generated code from Butter Knife. Do not modify!
package com.akshara.mathapp.activity;

import android.view.View;
import butterknife.ButterKnife.Finder;
import butterknife.ButterKnife.ViewBinder;

public class LanguageSelectionActivity$$ViewBinder<T extends com.akshara.mathapp.activity.LanguageSelectionActivity> implements ViewBinder<T> {
  @Override public void bind(final Finder finder, final T target, Object source) {
    View view;
    view = finder.findRequiredView(source, 2131296342, "field 'doneImageButton' and method 'onDoneButtonClicked'");
    target.doneImageButton = finder.castView(view, 2131296342, "field 'doneImageButton'");
    view.setOnClickListener(
      new butterknife.internal.DebouncingOnClickListener() {
        @Override public void doClick(
          android.view.View p0
        ) {
          target.onDoneButtonClicked(finder.<android.widget.ImageButton>castParam(p0, "doClick", 0, "onDoneButtonClicked", 0));
        }
      });
    view = finder.findRequiredView(source, 2131296432, "field 'schoolTypeSpinner'");
    target.schoolTypeSpinner = finder.castView(view, 2131296432, "field 'schoolTypeSpinner'");
    view = finder.findRequiredView(source, 2131296311, "field 'classTypeSpinner'");
    target.classTypeSpinner = finder.castView(view, 2131296311, "field 'classTypeSpinner'");
    view = finder.findRequiredView(source, 2131296376, "field 'languageEditSpinner'");
    target.languageEditSpinner = finder.castView(view, 2131296376, "field 'languageEditSpinner'");
  }

  @Override public void unbind(T target) {
    target.doneImageButton = null;
    target.schoolTypeSpinner = null;
    target.classTypeSpinner = null;
    target.languageEditSpinner = null;
  }
}
