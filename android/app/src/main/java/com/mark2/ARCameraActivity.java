package com.mark2;

import android.content.res.Configuration;
import android.os.Bundle;
import android.util.Log;
import android.view.Surface;
import android.widget.ImageButton;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.TextView;

import com.jme3.math.Vector3f;

import java.util.ArrayList;

import eu.kudan.kudan.ARAPIKey;
import eu.kudan.kudan.ARActivity;
import eu.kudan.kudan.ARImageTrackable;
import eu.kudan.kudan.ARImageTracker;
import eu.kudan.kudan.ARLightMaterial;
import eu.kudan.kudan.ARMeshNode;
import eu.kudan.kudan.ARModelImporter;
import eu.kudan.kudan.ARModelNode;
import eu.kudan.kudan.ARNode;
import eu.kudan.kudan.ARTexture2D;
import eu.kudan.kudan.ARWorld;
import eu.kudan.kudan.ARTextureMaterial;
import eu.kudan.kudan.ARColourMaterial;

public class ARCameraActivity extends ARActivity {
    private ARAPIKey key = ARAPIKey.getInstance();
    private Bundle instanceState;
    private ARImageTracker trackableManager;
    private ArrayList<Step> steps;

    private ImageButton closeButton;

    private int currentStep;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        this.currentStep = 0;
        this.instanceState = savedInstanceState;

        super.onCreate(savedInstanceState);

        key.setAPIKey("f8F8oS92HU0ve01zorwGvK2YsN5FnvV1EUt8MFJGFrFn6org4Vc39StRrCllHZ5PWVNHjaCcjjNM2YrzjDhDWBbll6ImIr3vMOfoSGTdbdVSl3YwAj19qSC+j4iCOwp5Oug9myXD3xx8iro0SvvUWk2tdyE99iCs6A++uOCB1TcIlQwXuNsc8y5AUtN+HvUveaWz6E9LKVHXotQBArZWDkilOOed9OafePyA6mbdxaWa3jLyNUkmB+zv4iC9HnN1FWj2UrpSavLTpKTWIDeZ6X8l3iiZXyIoDaYpuccrfDyPdzb95qxE/22+lEQ1JLQADZA8o6Vtx9kMfT/7t7Xzph5S5z3Z6nzWku0m22KuoZd0FpkJckNboo4dSUwK1PqWkPd32IWWFsAr1LVwQ7ahsaeh/CdaQVpra8D9sd/VVKhCxpwpi3q0su1x94OLETkV9D9wVnbezPLa4mstqm/OQ7cs1Vs6yKUYoZzwopJtdK3yiq4kDBY+LMLpbZxmUTAhxA6of9tO+/AD2lvt2tN8xUGiLR2WT0OQYYBXCnZE/zJr8rEFbMIiag763zXG7S1o3n4E/Bh1k8wFNAhOG3lvm8TKTt+XE/htfSVHQsXte1U+AGpZEh8NAf1SQcG7HrsUh05At+H8b5Jq/7OKhTbBjLZT/sY4/UyxIaSGctygT3M=");

        Log.d("DEBUG", "licenseKeyIsValid: " + key.licenseKeyIsValid());

        setContentView(R.layout.activity_sampling);

        closeButton = (ImageButton) findViewById(R.id.imageButton3);

        closeButton.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });

        this.steps = getIntent().getParcelableArrayListExtra("STEPS");
    }

    public void setup() {
        this.trackableManager = ARImageTracker.getInstance();

        initializeTrackables();

        renderStep(0);
    }

    private void renderStep(int stepIndex) {
        // set UI elements to step
        TextView stepPagination = (TextView) findViewById(R.id.textView2);
        TextView instruction = (TextView) findViewById(R.id.textView);

        stepPagination.setText((stepIndex + 1) + "/" + this.steps.size());
        instruction.setText(this.steps.get(stepIndex).getInstruction());

        renderButtons();

        // set 3d models visibility for each step
        for(int i = 0; i < this.trackableManager.getTrackables().size(); i++) {
            ARWorld world = this.trackableManager.getTrackables().get(i).getWorld();

            for(int j = 0; j < world.getChildren().size(); j++) {
                ARNode node = world.getChildren().get(j);

                boolean visibility = node.getName().split("~~~")[0].equals(stepIndex + "");

                node.setVisible(visibility);

                // Log.d("DEBUG", node.getName() + " visible: " + visibility);
            }
        }
    }

    public void nextStep(View view) {
        if(this.currentStep < this.steps.size() - 1) {
            this.currentStep++;
            renderStep(this.currentStep);
        }
    }

    public void prevStep(View view) {
        if(this.currentStep > 0) {
            this.currentStep--;
            renderStep(this.currentStep);
        }
    }

    private void renderButtons() {
        ImageButton nextButton = (ImageButton) findViewById(R.id.imageButton);
        ImageButton prevButton = (ImageButton) findViewById(R.id.imageButton2);
        TextView stepPagination = (TextView) findViewById(R.id.textView2);


        if(this.steps.size() == 1) {
            nextButton.setVisibility(View.INVISIBLE);
            prevButton.setVisibility(View.INVISIBLE);
            stepPagination.setVisibility(View.INVISIBLE);
        }
        else if(this.currentStep == 0) {
            nextButton.setVisibility(View.VISIBLE);
            prevButton.setVisibility(View.INVISIBLE);
        }
        else if(this.currentStep == this.steps.size() - 1) {
            nextButton.setVisibility(View.INVISIBLE);
            prevButton.setVisibility(View.VISIBLE);
        }
        else {
            nextButton.setVisibility(View.VISIBLE);
            prevButton.setVisibility(View.VISIBLE);
        }
    }

    private void initializeTrackables() {
        for(int i = 0; i < this.steps.size(); i++) {
            Step step = this.steps.get(i);

            // create the image target
            String name = step.getImageTarget();
            ARImageTrackable trackable;

            boolean newFlag = false;

            if(this.trackableManager.findTrackable(name) == null) {
                trackable = new ARImageTrackable(name);
                trackable.loadFromPath(step.getImageTarget(), true);
                trackable.setExtensible(true);
                newFlag = true;
                Log.d("DEBUG", "Trackable: " + trackable.getWidth() + "x" + trackable.getHeight());
            }
            else {
                trackable = this.trackableManager.findTrackable(name);
            }

            for(int j = 0; j < step.getObjects().size(); j++) {
                ObjectModel objectModel = step.getObjects().get(j);

                // Import model
                ARModelImporter modelImporter = new ARModelImporter();
                modelImporter.loadFromAsset("models/" + objectModel.getType() + "/model.jet");
                ARModelNode modelNode = (ARModelNode)modelImporter.getNode();
                modelNode.setName(i + "~~~" + j);

                Log.d("DEBUG", "New model: " + modelNode.getName());

                ARColourMaterial material = new ARColourMaterial(new Vector3f(1f, 0f, 0f));

                // Apply texture material to models mesh nodes
                for(ARMeshNode meshNode : modelImporter.getMeshNodes()){
                    meshNode.setMaterial(material);
                }

                modelNode.rotateByDegrees(90,1,0,0);

                float size_multiplier = 50f;
                float position_multiplier = 80f;

                float editorWidth = trackable.getWidth() > trackable.getHeight() ? 12.5f : trackable.getWidth() / trackable.getHeight() * 12.5f;
                float editorHeight = trackable.getHeight() > trackable.getWidth() ? 12.5f : trackable.getHeight() / trackable.getWidth() * 12.5f;

                modelNode.setPosition(
                    translate(objectModel.getX(), 0, editorWidth, 0, trackable.getWidth() / 2),
                    translate(objectModel.getZ(), 0, editorHeight, 0, trackable.getHeight() / 2),
                    objectModel.getY() * position_multiplier
                );
                modelNode.scaleByUniform(size_multiplier);


                // Add model node to image trackable
                trackable.getWorld().addChild(modelNode);
                trackable.getWorld().setVisible(false);
            }

            if(newFlag) {
                this.trackableManager.addTrackable(trackable);
            }
        }
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        super.onCreate(instanceState);
    }

    @Override
    public int getRotation() {
        return Surface.ROTATION_90;
    }

    private float translate(float x, float src_start, float src_end, float dest_start, float dest_end) {
        return (x / (src_end - src_start)) * (dest_end - dest_start);
    }
}
