package com.mark;

import android.os.Parcel;
import android.os.Parcelable;

public class Step implements Parcelable {
    private String instruction;
    private String imageTarget;
    private String model;

    public Step(String instruction, String imageTarget, String model) {
        this.instruction = instruction;
        this.imageTarget = imageTarget;
        this.model = model;
    }

    public String getInstruction() {
        return instruction;
    }

    public String getImageTarget() {
        return imageTarget;
    }

    public String getModel() {
        return model;
    }

    protected Step(Parcel in) {
        instruction = in.readString();
        imageTarget = in.readString();
        model = in.readString();
    }

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {
        dest.writeString(instruction);
        dest.writeString(imageTarget);
        dest.writeString(model);
    }

    @SuppressWarnings("unused")
    public static final Parcelable.Creator<Step> CREATOR = new Parcelable.Creator<Step>() {
        @Override
        public Step createFromParcel(Parcel in) {
            return new Step(in);
        }

        @Override
        public Step[] newArray(int size) {
            return new Step[size];
        }
    };
}