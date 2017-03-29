package com.mark;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ARActivityModule extends ReactContextBaseJavaModule {
    public static final String REACT_CLASS = "ARActivity";
    public ARActivityModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactMethod
    @SuppressWarnings("unused")
    public void startActivity() {
        Activity context = getCurrentActivity();
        Intent rctActivityIntent = new Intent(context, ARCameraActivity.class);
        context.startActivity(rctActivityIntent);
    }
}