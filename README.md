
<h1 align="center">ionic-react-header-parallax</h1>

<p align="center">
  Easy-to-use React hook to add a parallax header effect to Ionic `IonHeader`.
</p>

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

`ionic-react-header-parallax` exposes a single hook: `useIonHeaderParallax`.
Attach the returned `ref` to your `IonHeader`, and the hook handles:

- Header image expansion/collapse on scroll
- Toolbar background transitions
- Optional movement/styling of header buttons
- Dynamic title/button styles when collapsed



## Video Examples
<p align="center">
<table>
<tr>
<td>
  <video src="https://github.com/user-attachments/assets/891e3f47-7ff0-46e8-9bcd-e5b2404600e1" controls></video>
</td>
<td>
  <video src="https://github.com/user-attachments/assets/3e98636c-1c8a-4ac2-966b-c42aa9f60dc3" controls></video>
</td>
</tr>

<tr>
<td>
  <video src="https://github.com/user-attachments/assets/fde6530a-921c-423d-a471-ba65434f3fca" controls></video>
</td>
<td>
  <video src="https://github.com/user-attachments/assets/17cfeb13-3b3c-412e-b2e8-2ab096798722" controls></video>
</td>
</tr>
</table>
</p>

Existing YouTube demo: [Watch on YouTube](https://www.youtube.com/watch?v=YZ5nlRjstA4)

## Installation (npm)

```sh
npm install ionic-react-header-parallax --save
```

## Installation (yarn)

```sh
yarn add ionic-react-header-parallax
```

## Quick Start

```tsx
import * as React from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useIonHeaderParallax } from "ionic-react-header-parallax";

const Home: React.FC = () => {
  const { ref } = useIonHeaderParallax({
    image: "https://picsum.photos/1080",
    showBarButtons: true,
  });

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

      <IonContent className="ion-padding-start ion-padding-end">{/* Your page content */}</IonContent>
    </IonPage>
  );
};

export default Home;

```

## API

### `useIonHeaderParallax(input)`

Returns:

```ts
{
  ref: React.RefObject<any>
  loading: boolean
}
```

Input options:

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `image` | `string` | required | Main image URL used for the expanded header. |
| `defaultImage` | `string` | `image` | Fallback image URL. |
| `maximumHeight` | `number` | `300` | Expanded header max height in pixels. |
| `expandedColor` | `string` | `#313131` | Overlay color behind/with image. |
| `titleColor` | `string` | `#AAA` | Title and button color (collapsed/managed states). |
| `wait` | `number` | `300` | Delay before initialization (ms). Useful for async page layout. |
| `showBarButtons` | `boolean` | `false` | Move `IonButtons` into image area while expanded. |
| `buttonsToShow` | `"start" \| "end"` | `undefined` | Controls which slot buttons appear after collapse when `showBarButtons` is enabled. |
| `titleStyle` | `Partial<CSSStyleDeclaration>` | `undefined` | Custom inline style applied to `IonTitle` (collapsed state). |
| `startButtonStyle` | `Partial<CSSStyleDeclaration>` | `undefined` | Custom inline style applied to start `IonButtons` (collapsed state). |
| `endButtonStyle` | `Partial<CSSStyleDeclaration>` | `undefined` | Custom inline style applied to end `IonButtons` (collapsed state). |

## More Examples

### 1) Minimal setup

```tsx
const { ref } = useIonHeaderParallax({
  image: "https://picsum.photos/1200/700",
});
```

### 2) Taller hero image + transparent toolbar when expanded

```tsx
const { ref } = useIonHeaderParallax({
  image: "https://picsum.photos/1600/900",
  maximumHeight: 420,
  expandedColor: "#111",
  titleColor: "#fff",
});
```

### 3) Keep action buttons visible in expanded header

```tsx
const { ref } = useIonHeaderParallax({
  image: "https://picsum.photos/1500/900",
  showBarButtons: true,
  buttonsToShow: "end",
  endButtonStyle: { marginRight: "8px" },
});
```

### 4) Dynamic image updates

```tsx
const [cover, setCover] = React.useState("https://picsum.photos/1400/800");
const { ref, loading } = useIonHeaderParallax({
  image: cover,
  wait: 100,
});
```

## Requirements

- An `IonPage` wrapper
- An `IonHeader` containing at least one `IonToolbar`
- An `IonContent` in the same page

## Troubleshooting

- If nothing happens, verify `ref` is attached to `IonHeader`.
- If styles look wrong, ensure Ionic core CSS is loaded in your app.
- If content overlaps, check custom CSS that alters `IonContent` scroll container.

## Documentation Notes

- Start from the `Quick Start` section, then adjust behavior using the options listed in `API`.
- Use `showBarButtons` and `buttonsToShow` when you want action buttons in the expanded header.
- Use `wait` when your layout depends on async data and header initialization happens too early.
- Review `More Examples` and the `videos/` clips together to map each configuration to scroll behavior.

## License

MIT
