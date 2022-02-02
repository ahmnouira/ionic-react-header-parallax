<h1 align="center">
    Easy to use hook to handle the parallax effect for <b>IonHeader</b> component in React Ionic.
</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/ionic-react-header-parallax
"><img src="https://img.shields.io/npm/v/ionic-react-header-parallax.svg"></a>
  <a href="https://travis-ci.com/ahmnouira/ionic-react-header-parallax"><img src="https://api.travis-ci.com/ahmnouira/ionic-react-header-parallax.svg?branch=master"></a>
  <a href="https://github.com/ahmnouira/ionic-react-header-parallax"><img src="https://img.shields.io/github/stars/ahmnouira/ionic-react-header-parallax"></a>
</p>

<p align="center">
  <a href="https://codecov.io/gh/ahmnouira/ionic-react-header-parallax"><img src="https://codecov.io/gh/ahmnouira/ionic-react-header-parallax/coverage.svg"></a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
</p>

 <p align="center">
   <a href="https://www.npmjs.com/package/ionic-react-header-parallax"><img src="https://img.shields.io/npm/dw/ionic-react-header-parallax.svg?style=for-the-badge"></a>
  <a href="https://www.npmjs.com/package/ionic-react-header-parallax"><img src="https://img.shields.io/npm/dm/ionic-react-header-parallax.svg?style=for-the-badge"></a>
  <a href="https://www.npmjs.com/package/ionic-react-header-parallax"><img src="https://img.shields.io/npm/dt/ionic-react-header-parallax.svg?style=for-the-badge"></a>
</p>

## [Live Demo](https://github-mjaqg5-pzh6fv.stackblitz.io)

## [Stackblitz Editor URL](https://stackblitz.com/edit/github-mjaqg5-pzh6fv?file=src/pages/Home.tsx)

## Installation with npm

```sh
npm install ionic-react-header-parallax --save
```

## Installation with yarn

```sh
yarn add ionic-react-header-parallax
```

## Example

```tsx
import * as React from 'react'
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { useIonHeaderParallax } from 'ionic-react-header-parallax'

const Home: React.FC = () => {

 const {ref} = useIonHeaderParallax({ image: 'https://picsum.photos/1080' })

  return (
    <IonPage>
      <IonHeader translucent ref={ref}>
        <IonToolbar mode="ios">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Post Details</IonTitle>
          <IonButtons slot="end">
            <IonButton>Button</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {...}
      </IonContent>
    </IonPage>
  )
}

```

## API

- [useIonHeaderParallax](https://github.com/ahmnouira/ionic-react-header-parallax#useIonHeaderParallax)

### `useIonHeaderParallax`
