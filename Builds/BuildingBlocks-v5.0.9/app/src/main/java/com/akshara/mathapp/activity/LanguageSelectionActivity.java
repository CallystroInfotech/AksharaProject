package com.akshara.mathapp.activity;

import android.content.Context;
import android.content.Intent;
import android.content.IntentSender;
import android.location.Location;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.view.inputmethod.EditorInfo;
import android.view.inputmethod.InputMethodManager;
import android.widget.AdapterView;
import android.widget.ImageButton;
import android.widget.Spinner;
import android.widget.TextView;

import com.akshara.mathapp.R;
import com.akshara.mathapp.adapters.CustomSpinnerAdapter;
import com.akshara.mathapp.interfaces.PermissionsApi;
import com.akshara.mathapp.utils.AppConstants;
import com.akshara.mathapp.utils.AppUtils;
import com.akshara.mathapp.utils.CustomPermissionUtils;
import com.akshara.mathapp.utils.DataParserUtil;
import com.akshara.mathapp.utils.MsgUtils;
import com.akshara.mathapp.utils.PermissionUtils;
import com.akshara.mathapp.view.FontEditText;
import com.akshara.mathapp.view.FontTextView;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.location.LocationListener;
import com.google.android.gms.location.LocationRequest;
import com.google.android.gms.location.LocationServices;
import com.google.firebase.analytics.FirebaseAnalytics;

import butterknife.Bind;
import butterknife.OnClick;

public class LanguageSelectionActivity extends BaseActivity implements
        AdapterView.OnItemSelectedListener {

    @Bind(R.id.done_button)
    ImageButton doneImageButton;

    /*@Bind(R.id.org_edittext)
    FontEditText organizationEditText;

    @Bind(R.id.option_text)
    FontTextView optionTextView;

    @Bind(R.id.org_header)
    FontTextView orgHeaderTextView;*/

    @Bind(R.id.school_type_spinner)
    Spinner schoolTypeSpinner;

    @Bind(R.id.class_type_spinner)
    Spinner classTypeSpinner;

    @Bind(R.id.language_edit_spinner)
    Spinner languageEditSpinner;

    private int selectedLanguagePosition = 0;
    private String selectedLanguageValue = AppConstants.LANGUAGE_VALUE_ENGLISH;
    String orgHint;

    private int selectedSchoolTypePosition = 0;
    private int selectedClassTypePosition = 0;


    private String schoolType = null;
    private String selectedClassValue = null;


    private FirebaseAnalytics mFirebaseAnalytics;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mFirebaseAnalytics = FirebaseAnalytics.getInstance(this);

        setupLanguageSpinner();
        setViews();
        enableHomeButton();
        //schoolTypeSpinner.setOnItemSelectedListener(this);
        //setupSpinner();
        AppUtils.isGooglePlayServiceAvailable(this);

    }



    private void setViews() {
        String orgNameHeader = getString(R.string.textview_organization_name);
        orgHint = getString(R.string.hint_organization_name);
        String optionText = getString(R.string.textview_optional);
        setupSpinner();
        /*orgHeaderTextView.setText(orgNameHeader);
        organizationEditText.setHint(orgHint);
        optionTextView.setText(optionText);

        organizationEditText.setOnEditorActionListener(new TextView.OnEditorActionListener() {
            @Override
            public boolean onEditorAction(TextView textView, int actionId, KeyEvent keyEvent) {
                if (actionId == EditorInfo.IME_ACTION_NEXT) {
                    hideKeyboard();
                    textView.clearFocus();
                    languageEditSpinner.requestFocus();
                    languageEditSpinner.performClick();
                }
                return true;
            }
        });*/
    }


    private void setupSpinner() {
        CustomSpinnerAdapter schoolAdapter = new CustomSpinnerAdapter(this, R.array.school_type_array);

        schoolTypeSpinner.setAdapter(schoolAdapter);
        schoolTypeSpinner.setOnItemSelectedListener(this);
        schoolAdapter.notifyDataSetChanged();
        schoolTypeSpinner.setSelection(selectedSchoolTypePosition);

        CustomSpinnerAdapter classAdapter = new CustomSpinnerAdapter(this, R.array.class_type_array);

        classTypeSpinner.setAdapter(classAdapter);
        classTypeSpinner.setOnItemSelectedListener(this);
        classAdapter.notifyDataSetChanged();
        classTypeSpinner.setSelection(selectedSchoolTypePosition);
    }

    private void hideKeyboard() {
        InputMethodManager inputManager = (InputMethodManager) getSystemService(Context.INPUT_METHOD_SERVICE);
        if (inputManager == null)
            return;
        inputManager.hideSoftInputFromWindow(this.getCurrentFocus().getWindowToken(),
                InputMethodManager.HIDE_NOT_ALWAYS);
    }

    private void setupLanguageSpinner() {
        CustomSpinnerAdapter languageAdapter = new CustomSpinnerAdapter(this, R.array.language_type_array);

        languageEditSpinner.setAdapter(languageAdapter);
        languageEditSpinner.setOnItemSelectedListener(this);
        languageAdapter.notifyDataSetChanged();
        languageEditSpinner.setSelection(selectedLanguagePosition);

        languageEditSpinner.setFocusable(true);
    }

    @OnClick(R.id.done_button)
    public void onDoneButtonClicked(ImageButton imageButton) {
        String orgName = null;


        if (selectedClassTypePosition == 0 || selectedClassValue == null) {
            //MsgUtils.displayToast(this, R.string.error_message_class_field);
            //return;
            selectedClassValue = "1st Grade";
        }
        if (selectedSchoolTypePosition == 0 || schoolType == null) {
            //MsgUtils.displayToast(this, R.string.message_error_select_school_type);
            //return;
            schoolType = AppConstants.ID_SCHOOL_TYPE_GOVT;
        }
        if (selectedLanguagePosition == 0) {
            MsgUtils.displayToast(this, R.string.message_error_select_language);
            return;
        }
        else {
            //orgName = organizationEditText.getText().toString().trim();
            orgName = "Akshara";

            Bundle bundle = new Bundle();
            bundle.putString("Select_language_value",""+selectedLanguageValue);
            mFirebaseAnalytics.logEvent("Select_language",bundle);

            mFirebaseAnalytics.setUserProperty("User_language",""+selectedLanguageValue);

            /*Bundle param = new Bundle();
            param.putString("Button_click_tick_regst","");
            mFirebaseAnalytics.logEvent("Button_click_tick_register",param);

            Bundle bundle1 = new Bundle();
            bundle1.putString("Select_class_value",""+selectedClassValue);
            mFirebaseAnalytics.logEvent("Select_class",bundle1);

            mFirebaseAnalytics.setUserProperty("User_class",""+selectedClassValue);

            Bundle param1 = new Bundle();
            if(schoolType.equalsIgnoreCase("0"))
            {
                param1.putString("Select_school_value","Government");
                mFirebaseAnalytics.setUserProperty("User_school_type","Government");
            }
            else{
                param1.putString("Select_school_value","Private");
                mFirebaseAnalytics.setUserProperty("User_school_type","Private");
            }
            mFirebaseAnalytics.logEvent("Select_school",param1);
            */

            Intent intent = new Intent(this, GenderAvatarSelectionActivity.class);
            intent.putExtra(AppConstants.SELECTED_LANGUAGE, DataParserUtil.getLanguageValueFromPosition(selectedLanguagePosition));
            intent.putExtra(AppConstants.ORG_NAME_EXTRA, orgName);
            intent.putExtra(AppConstants.SCHOOL_TYPE, schoolType);
            intent.putExtra(AppConstants.GRADE_EXTRA, selectedClassValue);
            startActivity(intent);
        }
    }

    @Override
    protected int getLayoutResource() {
        return R.layout.activity_language_selection;
    }

    @Override
    protected String getLanguageValue() {
        return selectedLanguageValue;
    }

    @Override
    public void onBackPressed() {
        finish();
    }

    @Override
    public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {

        switch (adapterView.getId()) {
            case R.id.school_type_spinner:
                selectedSchoolTypePosition = i;
                if (i != 0)
                    schoolType = DataParserUtil.getSchoolTypeFromPosition(i);
                break;
            case R.id.class_type_spinner:
                selectedClassTypePosition = i;
                if (i != 0) {
                    selectedClassValue = (String) adapterView.getItemAtPosition(i);

                    if(selectedClassValue.equalsIgnoreCase(getString(R.string.first_grade)))
                        selectedClassValue = "1st Grade";
                    else if(selectedClassValue.equalsIgnoreCase(getString(R.string.second_grade)))
                        selectedClassValue = "2nd Grade";
                    else if(selectedClassValue.equalsIgnoreCase(getString(R.string.third_grade)))
                        selectedClassValue = "3rd Grade";
                    else if(selectedClassValue.equalsIgnoreCase(getString(R.string.fourth_grade)))
                        selectedClassValue = "4th Grade";
                    else if(selectedClassValue.equalsIgnoreCase(getString(R.string.fifth_grade)))
                        selectedClassValue = "5th Grade";
                    else if(selectedClassValue.equalsIgnoreCase(getString(R.string.sixth_grade)))
                        selectedClassValue = "6th Grade";
                    else if(selectedClassValue.equalsIgnoreCase(getString(R.string.seventh_grade)))
                        selectedClassValue = "7th Grade";
                    else if(selectedClassValue.equalsIgnoreCase(getString(R.string.eighth_grade)))
                        selectedClassValue = "8th Grade";
                    else if(selectedClassValue.equalsIgnoreCase(getString(R.string.ninth_grade)))
                        selectedClassValue = "9th Grade";
                    else
                        selectedClassValue = "1st Grade";
                }
                break;
            case R.id.language_edit_spinner:
                selectedLanguagePosition = i;
                if (i == 0) {
                    doneImageButton.setSelected(false);
                    return;
                }
                if (!doneImageButton.isSelected())
                    doneImageButton.setSelected(true);
                selectedLanguageValue = DataParserUtil.getLanguageValueFromPosition(i);
                setLanguage();
                setViews();
                break;
        }


    }

    @Override
    public void onNothingSelected(AdapterView<?> adapterView) {

    }



}
