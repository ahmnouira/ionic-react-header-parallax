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

## Overview

<p align="center">
<img hight="60px;" src="images/demo.gif"></img>
</p>

## [Youtube video URL](https://www.youtube.com/watch?v=YZ5nlRjstA4)
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
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { useIonHeaderParallax } from 'ionic-react-header-parallax'

const Home: React.FC = () => {

   const { ref } = useIonHeaderParallax({
    image: 'https://picsum.photos/1080',
    showBarButtons: true,
  })

  return (
    <IonPage>
      <IonHeader ref={ref}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Post Title</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding-start ion-padding-end">
        {...}
      </IonContent>
    </IonPage>
  )
}

export default Home

```

## API

- [useIonHeaderParallax](https://github.com/ahmnouira/ionic-react-header-parallax#useIonHeaderParallax)

### `useIonHeaderParallax`
