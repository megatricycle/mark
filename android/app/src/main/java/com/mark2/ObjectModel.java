package com.mark2;

import java.io.Serializable;

/**
 * Created by tricycle on 5/26/17.
 */

public class ObjectModel implements Serializable {
    private String type;
    private float x;
    private float y;
    private float z;

    public ObjectModel(String type, float x, float y, float z) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public String getType() {
        return type;
    }

    public float getX() {
        return x;
    }

    public float getY() {
        return y;
    }

    public float getZ() {
        return z;
    }
}
