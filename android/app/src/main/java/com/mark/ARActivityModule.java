package com.mark;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;

import java.util.ArrayList;

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
    public void startActivity(ReadableArray steps) {
        ArrayList<Step> serializedSteps = new ArrayList<Step>();

        for(int i = 0; i < steps.size(); i++) {
            ReadableMap stepObject = steps.getMap(i);

            String instruction = stepObject.getString("instruction");
            String imageTarget = stepObject.getString("imageTarget");
            String model = stepObject.getString("model");

            serializedSteps.add(new Step(instruction, imageTarget, model));
        }

        Activity context = getCurrentActivity();
        Intent rctActivityIntent = new Intent(context, ARCameraActivity.class);

        rctActivityIntent.putParcelableArrayListExtra("STEPS", serializedSteps);

        context.startActivity(rctActivityIntent);
    }
}