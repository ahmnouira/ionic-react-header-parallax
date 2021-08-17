import * as React from 'react'

export type UseIonicHeaderParallxInput = {
  image: string
  expandedColor: string
  titleColor: string
  maximumHeight?: number
}

export type UseIonHeaderParallxInputResult = {
  ref: React.MutableRefObject<HTMLElement | null>
}

export function UseIonHeaderParallxInputResult({}: UseIonicHeaderParallxInput): UseIonHeaderParallxInputResult {
  const headerRef = React.useRef<HTMLElement>(null)

  let header: HTMLElement
  let toolbar: HTMLElement | null
  let toolbarBackground: HTMLElement | null
  let imageOverlay: HTMLElement
  let colorOverlay: HTMLElement
  let barButtons: HTMLElement | null
  let scrollContent: HTMLElement | null
  // let headerHeight: any
  // let headerMinHeight: number
  // let translateAmt: any
  // let scaleAmt: any
  // let scrollTop: any
  // let lastScrollTop: any
  // let ticking: any
  // let originalToolbarBgColor: string
  let overlayTitle: HTMLElement | null
  let ionTitle: HTMLElement | null
  // let overlayButtons: HTMLElement[]
  // let scrollContentPaddingTop: number

  React.useEffect(() => {
    setTimeout(() => {
      try {
        initElements()
        initStyles()
        initEvents()
      } catch (e) {
        throw e
      }
    }, 100)
  }, [])

  const initElements = () => {
    if (!(headerRef && headerRef.current)) throw new ReferenceError('Ref is required')

    const parentElement = headerRef.current.parentElement

    if (!parentElement) throw new Error('No parentElemnt')

    header = headerRef.current

    // check this
    toolbar = header.querySelector('IonToolbar')

    if (!toolbar) {
      throw new Error('Parallax requires a <IonToolbar> or navbar element on the page to work.')
    }

    if (!toolbar.shadowRoot) {
      throw new Error('Parallax requires a shadowRoot <IonToolbar>')
    }

    ionTitle = toolbar.querySelector('IonTitle')

    toolbarBackground = toolbar.shadowRoot.querySelector('.toolbar-background')

    console.log('toolbarBackground', toolbarBackground)

    barButtons = header.querySelector('IonButtons')

    const ionContent = parentElement.querySelector('ion-content')

    if (!ionContent) throw new Error('Parallax directive requires an <IonContent> element on the page to work.')

    if (!ionContent.shadowRoot) throw new Error('Parallax requires a shadowRoot <ion-content>')

    scrollContent = ionContent.shadowRoot.querySelector('.inner-scroll')

    if (!scrollContent) {
      throw new Error('Parallax directive requires an <IonContent> element on the page to work.')
    }

    // Create image overlay
    imageOverlay = document.createElement('div')
    console.log('imageOverlay', imageOverlay)
    imageOverlay.classList.add('image-overlay')

    colorOverlay = document.createElement('div')

    colorOverlay.classList.add('color-overlay')

    colorOverlay.appendChild(imageOverlay)
    header.appendChild(colorOverlay)

    // Copy title and buttons
    overlayTitle = ionTitle && (ionTitle.cloneNode(true) as HTMLElement)

    if (!overlayTitle) throw new Error('')
    overlayTitle.classList.add('parallax-title')

    setTimeout(() => {
      const toolbarTitle = overlayTitle?.shadowRoot?.querySelector('.toolbar-title') as HTMLElement
      toolbarTitle.style.pointerEvents = 'unset'
    })

    if (overlayTitle) {
      imageOverlay.appendChild(overlayTitle)
    }
    if (barButtons) {
      imageOverlay.appendChild(barButtons)
    }

    console.log('finished')
  }

  const initStyles = () => {}

  const initEvents = () => {}

  return {
    ref: headerRef,
  }
}
