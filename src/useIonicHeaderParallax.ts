import * as React from 'react'

export type UseIonicHeaderParallaxInput = {
  image: string
  expandedColor: string
  titleColor: string
  maximumHeight?: number
}

export type UseIonHeaderParallaxInputResult = {
  ref: React.MutableRefObject<HTMLElement | null>
  onScroll: () => void
}

export function useIonHeaderParallax({
  titleColor,
  image,
  expandedColor,
  maximumHeight = 300,
}: UseIonicHeaderParallaxInput): UseIonHeaderParallaxInputResult {
  const headerRef = React.useRef<HTMLElement>(null)

  let header: HTMLElement
  let toolbar: HTMLElement | null
  let toolbarBackground: HTMLElement | null
  let imageOverlay: HTMLElement
  let colorOverlay: HTMLElement
  let barButtons: HTMLElement | null
  let scrollContent: HTMLElement | null
  let headerHeight: number
  let headerMinHeight: number
  let translateAmt: any
  let scaleAmt: any
  let scrollTop: any
  let lastScrollTop: any
  let ticking: any
  let originalToolbarBgColor: string
  let overlayTitle: HTMLElement | null
  let ionTitle: HTMLElement | null
  let overlayButtons: HTMLElement[]
  let scrollContentPaddingTop: string | number

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
    if (!(headerRef && headerRef.current)) throw new ReferenceError('Ref is required to be set to <IonHeader />')

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

    const ionContent = parentElement.querySelector('IonContent')

    if (!ionContent) throw new Error('Parallax directive requires an <IonContent> element on the page to work.')

    if (!ionContent.shadowRoot) throw new Error('Parallax requires a shadowRoot <ion-content>')

    scrollContent = ionContent.shadowRoot.querySelector('.inner-scroll')

    if (!scrollContent) {
      throw new Error('Parallax directive requires an <IonContent> element on the page to work.')
    }

    headerHeight = scrollContent.clientHeight

    console!.log('headerHeight', headerHeight)

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

  const initStyles = () => {
    ticking = false

    if (!scrollContent || !toolbar) {
      return
    }

    // fetch styles

    headerMinHeight = toolbar.offsetHeight

    scrollContentPaddingTop = window.getComputedStyle(scrollContent, null).paddingTop.replace('px', '')
    scrollContentPaddingTop = parseFloat(scrollContentPaddingTop)

    if (!toolbarBackground) return

    originalToolbarBgColor = window.getComputedStyle(toolbarBackground, null).backgroundColor

    if (!originalToolbarBgColor) {
      throw new Error('Error: toolbarBackround is null.')
    }

    // header and title

    header.style.position = 'relative'

    if (overlayTitle) {
      // rerender here
      overlayTitle.style.color = titleColor
      overlayTitle.style.position = 'absolute'
      overlayTitle.style.width = '100%'
      overlayTitle.style.height = '100%'
      overlayTitle.style.textAlign = 'center'
    }

    // color overlay
    colorOverlay.style.backgroundColor = originalToolbarBgColor
    colorOverlay.style.height = `${maximumHeight}px`
    colorOverlay.style.position = 'absolute'
    colorOverlay.style.top = `${-headerMinHeight * 0}px`
    colorOverlay.style.left = '0'
    colorOverlay.style.width = '100%'
    colorOverlay.style.zIndex = '10'
    colorOverlay.style.pointerEvents = 'none'

    // image overlay

    imageOverlay.style.backgroundColor = expandedColor

    imageOverlay.style.backgroundImage = `url(${image || ''})`

    imageOverlay.style.height = '100%'
    imageOverlay.style.width = '100%'

    imageOverlay.style.pointerEvents = 'none'
    imageOverlay.style.backgroundSize = 'cover'
    imageOverlay.style.backgroundPosition = 'center'
  }

  const initEvents = () => {}

  const onScroll = () => {
    if (!scrollContent || !toolbar) {
      return
    }

    scrollTop = scrollContent.scrollTop
    if (scrollTop >= 0) {
      translateAmt = scrollTop / 2
      scaleAmt = 1
    } else {
      translateAmt = 0
      scaleAmt = -scrollTop / headerHeight + 1
    }

    // Parallax total progress
    headerMinHeight = toolbar.offsetHeight
    let progress = (maximumHeight - scrollTop - headerMinHeight) / (maximumHeight - headerMinHeight)
    progress = Math.max(progress, 0)

    // ion-header: set height
    let targetHeight = maximumHeight - scrollTop
    targetHeight = Math.max(targetHeight, headerMinHeight)

    console.log(lastScrollTop, ticking, overlayButtons, translateAmt, scaleAmt)
  }

  return {
    ref: headerRef,
    onScroll,
  }
}
