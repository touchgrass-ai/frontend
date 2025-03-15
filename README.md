

To run dev:
```
npm i && npm run dev
```

To export as android app (windows):

1. Set envs (path might be different):
```
JAVA_HOME='C:\Program Files\Java\jdk-23'
ANDROID_HOME='C:\Users\{user}\AppData\Local\Android\Sdk'
```

2. Run the following commands:

```
npm run build
npx cap sync
npx cap open android
```

or open `/android` in Android Studio.