package com.mark;

import android.os.Parcel;
import android.os.Parcelable;

import java.util.ArrayList;
import java.util.List;

public class Step implements Parcelable {
    private String instruction;
    private String imageTarget;
    private List<ObjectModel> objects;

    public Step(String instruction, String imageTarget, List<ObjectModel> objects) {
        this.instruction = instruction;
        this.imageTarget = imageTarget;
        this.objects = objects;
    }

    public String getInstruction() {
        return instruction;
    }

    public String getImageTarget() {
        return imageTarget;
    }

    public List<ObjectModel> getObjects() {
        return objects;
    }

    protected Step(Parcel in) {
        instruction = in.readString();
        imageTarget = in.readString();
        if (in.readByte() == 0x01) {
            objects = new ArrayList<ObjectModel>();
            in.readList(objects, ObjectModel.class.getClassLoader());
        } else {
            objects = null;
        }
    }

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {
        dest.writeString(instruction);
        dest.writeString(imageTarget);
        if (objects == null) {
            dest.writeByte((byte) (0x00));
        } else {
            dest.writeByte((byte) (0x01));
            dest.writeList(objects);
        }
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