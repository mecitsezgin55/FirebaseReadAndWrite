# Firebase Read And Write
 install
 ```
  npm install @react-native-firebase/app
  npm install @react-native-firebase/database
  npm install @react-native-firebase/auth
  npm install @react-native-firebase/storage
 ``` 
* add \android\app\google-services.json

* add \android\build.gradle
```
buildscript {
    repositories {
        google()
        jcenter()
    }
    dependencies {
        classpath("com.android.tools.build:gradle:3.5.3")
        classpath 'com.google.gms:google-services:4.3.5'  // <- add this code
        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}
```

* add \android\app\build.gradle
```
apply plugin: "com.android.application"

apply plugin: 'com.google.gms.google-services' // <- add this code


dependencies {
    implementation platform('com.google.firebase:firebase-bom:26.4.0')  // <- add this code
    
    implementation fileTree(dir: "libs", include: ["*.jar"])
}
```
