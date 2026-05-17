# Guide — Transformer en Application Android

## Option 1 — WebView Simple (recommandée pour débutants)

Transformer le site en app Android en l'affichant dans un WebView.

### Prérequis
- Android Studio (gratuit — developer.android.com/studio)
- Java 11+ installé

### Étapes

#### 1. Créer un nouveau projet

1. Ouvrir Android Studio
2. **New Project** > **Empty Activity**
3. Nom : `CServiceStudio`
4. Package : `cd.cservice.studio`
5. Minimum SDK : API 21 (Android 5.0)
6. Cliquer **Finish**

#### 2. Copier les fichiers web

Copier votre dossier dans `app/src/main/assets/` :

```
app/src/main/assets/
├── index.html
├── style.css
├── script.js
├── images/
└── videos/
```

#### 3. Modifier MainActivity.java

```java
package cd.cservice.studio;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends Activity {

    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        webView = new WebView(this);
        setContentView(webView);
        
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);     // Pour localStorage
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(true);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(true);
        settings.setBuiltInZoomControls(false);
        
        webView.setWebViewClient(new WebViewClient());
        webView.loadUrl("file:///android_asset/index.html");
    }
    
    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
```

#### 4. Modifier activity_main.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <WebView
        android:id="@+id/webview"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />

</FrameLayout>
```

#### 5. Permissions dans AndroidManifest.xml

```xml
<manifest ...>
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    
    <application
        android:usesCleartextTraffic="true"
        ...>
        <activity android:name=".MainActivity"
                  android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
```

#### 6. Build et tester

```bash
# Build APK debug
./gradlew assembleDebug

# APK généré dans :
# app/build/outputs/apk/debug/app-debug.apk
```

---

## Option 2 — Version Online (site hébergé)

Si le site est hébergé sur GitHub Pages :

```java
// Remplacer la dernière ligne dans onCreate par :
webView.loadUrl("https://VOTRE_USERNAME.github.io/c-service-studio/");
```

Avantage : Les mises à jour du site sont automatiquement dans l'app.

---

## Option 3 — Capacitor (solution moderne)

Capacitor (de Ionic) permet de créer une vraie app native :

```bash
# Installer Node.js puis :
npm install -g @capacitor/cli
npx cap init CServiceStudio cd.cservice.studio

# Copier votre projet web dans le dossier www/
cp -r votre-projet/* www/

# Ajouter Android
npx cap add android
npx cap sync android
npx cap open android
```

---

## Icône et Splash Screen

1. Préparer une image de 1024x1024px (logo C-Service)
2. Dans Android Studio : **File > New > Image Asset**
3. Choisir **Launcher Icons**
4. Importer votre logo
5. Android Studio génère toutes les tailles automatiquement

---

## Publier sur Google Play Store

1. Build APK signé : **Build > Generate Signed Bundle/APK**
2. Créer un compte Google Play Developer (25$ unique)
3. Aller sur **play.google.com/console**
4. Créer une nouvelle application
5. Uploader l'APK/AAB signé
6. Remplir la fiche (description, captures, icône)
7. Soumettre pour review (1-3 jours)

---

© 2025 C-Service Business — Ultra Studio  
WhatsApp : +243 850 406 200
