package com.greatdroid.reactnative.media;

import android.app.Activity;

/**
 * Created by kit on 16/11/28.
 */
public class MainActivityInstance {
    private static SoftReference<Activity> activitySoftReference ;
    public static void setActivity(Activity activity)
    {
        if(activitySoftReference!=null)
            activitySoftReference.clear();
        if(activity!=null)
            activitySoftReference = new SoftReference<Activity>(activity) ;

    }
    public static void clear(){
           activitySoftReference.clear();
    }
    public static  Activity getActivity(){
        return activitySoftReference.get() ;
    }
}
