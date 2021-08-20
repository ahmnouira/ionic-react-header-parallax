import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/' />
          </IonButtons>
          <IonTitle>Post Details</IonTitle>
          <IonButtons slot='end'>
            <IonButton>Button</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen className="ion-padding">
        <p>This directive enables parallax effect on <code>ion-header</code> elements to display a cover photo while on top of
          the page and transition it to the normal navbar when content is scrolled down.</p>
        <h2 id="set-up">Set Up</h2>
        <ol>
          <li>Install package: <code>$ npm i ionic-header-parallax</code>.</li>
          <li>Import the directive into your desired module (usually <code>app.module.ts</code>):</li>
        </ol>
        <pre className="hljs"><code><div><span className="hljs-keyword">import</span>  IonicHeaderParallaxModule  <span className="hljs-keyword">from</span> <span className="hljs-string">'ionic-header-parallax'</span>;

          <span className="hljs-meta">@NgModule</span>(
          imports: [
          IonicHeaderParallaxModule,
          ...
        </div></code></pre>
        <h2 id="usage">Usage</h2>
        <p>Just add the attribute <code>parallax</code> to any <code>&lt;ion-header&gt;</code> element:</p>
        <pre className="hljs"><code><div><span className="hljs-tag">&lt;<span className="hljs-name">ion-header</span> <span className="hljs-attr">parallax</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">ion-header</span>&gt;</span>
        </div></code></pre>
        <p>Optional attributes:</p>
        <ul>
          <li><code>imageUrl (string)</code>: The background image to show while expanded.</li>
          <li><code>maximumHeight (number)</code>: The height for the header when expanded. Default is <code>200</code>.</li>
          <li><code>expandedColor (string)</code>: The color (web hex formatted) to show while the header is expanded when no
            <code>imageUrl</code> is set. When scrolled it will fade to the navbar/toolbar's color or the one configured in
            <code>&lt;toolbar color=&quot;&quot;&gt;</code> attribute.</li>
          <li><code>titleColor (string)</code>: The text color (web hex formatted) for <code>&lt;ion-title&gt;</code> and
            <code>&lt;ion-back-button&gt;</code> elements when expanded. They will turn to their default color on cover
            collapse.</li>
        </ul>
        <p>Example:</p>
        <pre className="hljs"><code><div><span className="hljs-tag">&lt;<span className="hljs-name">ion-header</span> <span className="hljs-attr">parallax</span> <span className="hljs-attr">imageUrl</span>=<span className="hljs-string">"https://picsum.photos/350"</span> <span className="hljs-attr">maximumHeight</span>=<span className="hljs-string">"350"</span> <span className="hljs-attr">expandedColor</span>=<span className="hljs-string">"#AAA"</span> <span className="hljs-attr">titleColor</span>=<span className="hljs-string">"black"</span>&gt;</span>

          <span className="hljs-tag">&lt;<span className="hljs-name">ion-toolbar</span> <span className="hljs-attr">color</span>=<span className="hljs-string">"primary"</span>&gt;</span>
          <span className="hljs-tag">&lt;<span className="hljs-name">ion-title</span>&gt;</span>
          Parallax Header
          <span className="hljs-tag">&lt;/<span className="hljs-name">ion-title</span>&gt;</span>
          <span className="hljs-tag">&lt;/<span className="hljs-name">ion-toolbar</span>&gt;</span>
          <span className="hljs-tag">&lt;/<span className="hljs-name">ion-header</span>&gt;</span>

          <span className="hljs-tag">&lt;<span className="hljs-name">ion-content</span>&gt;</span>
          Some content here
          <span className="hljs-tag">&lt;/<span className="hljs-name">ion-content</span>&gt;</span>
        </div></code></pre>
        <h2 id="modifying-the-source-code">Modifying the Source Code</h2>
        <p>In case you need to make your own modifications, the package is pretty simple, just 1 .ts file. You can clone the
          repo wherever in your ionic project (usually inside the <code>directives</code> folder):
          <code>$ git clone https://github.com/RaschidJFR/ionic-header-parallax.git</code>. Then edit the file
          <code>src/lib/parallax.directive.ts</code>.</p>
        <h2 id="contributing">Contributing</h2>
        <p>I don't plan to be full-time maintaining this package, but as I'm usually developing in Ionic I'll be glad to
          update it any time I make some upgrades for myself.
          Contributions are very welcome. The source files can be found in the <a
            href="https://github.com/RaschidGithub/ionic-header-parallax">repo</a>.</p>
        <h2 id="credits">Credits</h2>
        <p>Raschid JF. Rafaelly</p>
        <p><a href="mailto:me@raschidjfr.dev">me@raschidjfr.dev</a></p>
        <p><a href="https://raschidjfr.dev">https://raschidjfr.dev</a></p>
        <p>This is an implementation of this awesome tutorial on v2 by <a
          href="https://www.joshmorony.com/how-to-create-a-directive-in-ionic-2-parallax-header/">Josh Morony</a>. Thanks.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
