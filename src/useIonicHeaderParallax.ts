import * as React from 'react'

export type UseIonHeaderParallaxInput = {
  image: string
  expandedColor?: string
  titleColor?: string
  maximumHeight?: number
}

export type UseIonHeaderParallaxResult = void

export function useIonHeaderParallax({
  image,
  titleColor = '#AAA',
  expandedColor = '#313131',
  maximumHeight = 300,
}: UseIonHeaderParallaxInput): UseIonHeaderParallaxResult {
  /** styles */
  const [ticking, setTicking] = React.useState<boolean>(false)

  React.useEffect(() => {
    setTimeout(() => {
      initElements()
    }, 200)
  }, [titleColor, image, expandedColor, maximumHeight])

  const initElements = () => {
    // ion-header
    const header = document.getElementsByTagName('ion-header')[0] as HTMLElement
    const parentElement = header.parentElement
    if (!parentElement) throw new Error('No IonPage parent element')

    // ion-toolbar
    const toolbar = header.querySelector('ion-toolbar') as HTMLElement
    if (!toolbar) throw new Error('No <ion-toolbar>')

    // ion-toolbar background
    const toolbarShadowRoot = toolbar.shadowRoot

    if (!toolbarShadowRoot) throw new Error('No shadow')

    const toolbarBackground = toolbarShadowRoot.querySelector('.toolbar-background') as HTMLElement

    if (!toolbarBackground) throw new Error('No .toolbar-background')

    // ion-title
    const ionTitle = toolbar.querySelector('ion-title') as HTMLElement

    // ion-buttons
    const barButtons = header.querySelector('ion-buttons') as HTMLElement

    // ion-content
    const ionContent = parentElement.querySelector('ion-content') as HTMLElement
    if (!ionContent) throw new Error('Parallax an <ion-content> element on the page to work.')
    const scrollContent = ionContent.shadowRoot?.querySelector('.inner-scroll') as HTMLElement


    // create image overly
    const imageOverlay = document.createElement('div')
    imageOverlay.classList.add('image-overlay')
    const colorOverlay = document.createElement('div')
    colorOverlay.classList.add('color-overlay')
    colorOverlay.appendChild(imageOverlay)
    header.appendChild(colorOverlay)

    const overlayTitle = ionTitle && (ionTitle.cloneNode(true) as HTMLElement)

    if (overlayTitle) {
      overlayTitle.classList.add('parallax-title')
      setTimeout(() => {
        if (overlayTitle.shadowRoot) {
          const toolbarTitle = overlayTitle.shadowRoot.querySelector('.toolbar-title') as HTMLElement
          toolbarTitle.style.pointerEvents = 'unset'
        }
      }, 200)
    }

    if (overlayTitle) {
      imageOverlay.appendChild(overlayTitle)
    }
    if (barButtons) {
      imageOverlay.appendChild(barButtons)
    }

    /***  initStyles ***/
    // still in init use JS DOM
    let headerHeight = scrollContent?.clientHeight
    setTicking(false)

    // fetch styles
    maximumHeight = parseFloat(maximumHeight.toString())
    let headerMinHeight = toolbar.offsetHeight

    let scrollContentPaddingTop = 0

    if (scrollContent) {
      scrollContentPaddingTop = parseFloat(
        window.getComputedStyle(scrollContent as Element, null).paddingTop.replace('px', '')
      )
    }

    let originalToolbarBgColor = 'white'
    originalToolbarBgColor = window.getComputedStyle(toolbarBackground as Element, null).backgroundColor


    // header and title
    header.style.position = 'relative'

    if (overlayTitle) {
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
    imageOverlay.style.backgroundImage = `url(${image})`
    imageOverlay.style.height = '100%'
    imageOverlay.style.width = '100%'
    imageOverlay.style.pointerEvents = 'none'
    imageOverlay.style.backgroundSize = 'cover'
    imageOverlay.style.backgroundPosition = 'center'

    // .toolbar-background
    if (toolbarBackground) {
      toolbarBackground.style.backgroundColor = originalToolbarBgColor
    }

    // .bar-buttons
    if (barButtons) {
      barButtons.style.pointerEvents = 'all'

      Array.from(barButtons.children).forEach((btn) => {
        console.log(btn, btn as HTMLElement)
        const htmlBtn = btn as HTMLElement
        htmlBtn.style.color = titleColor
      })
    }

    // .scroll-content
    if (scrollContent) {
      scrollContent.setAttribute('parallax', '')
      scrollContent.style.paddingTop = `${maximumHeight + scrollContentPaddingTop - headerMinHeight}px`
    }

    /** init events */
    window.addEventListener(
      'resize',
      () => {
        headerHeight = scrollContent.clientHeight
      },
      false
    )

    if (scrollContent) {
      scrollContent.addEventListener('scroll', (_e) => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            // to do

            const scrollTop = scrollContent.scrollTop
            let translateAmt: number
            let scaleAmt: number
            if (scrollTop >= 0) {
              translateAmt = scrollTop / 2
              scaleAmt = 1
            } else {
              translateAmt = 0
              scaleAmt = scrollTop / headerHeight + 1
            }

            // Parallax total progress
            headerMinHeight = toolbar.offsetHeight

            let progress = (maximumHeight - scrollTop - headerMinHeight) / (maximumHeight - headerMinHeight)
            progress = Math.max(progress, 0)

            let targetHeight = maximumHeight - scrollTop
            targetHeight = Math.max(targetHeight, headerMinHeight)

            header.style.transform = 'translate3d(0,' + translateAmt + 'px,0) scale(' + scaleAmt + ',' + scaleAmt + ')'

            // .toolbar-background: change color
            imageOverlay.style.height = `${targetHeight}px`
            imageOverlay.style.opacity = `${progress}`
            colorOverlay.style.height = `${targetHeight}px`
            colorOverlay.style.opacity = targetHeight > headerMinHeight ? '1' : '0'
            toolbarBackground.style.backgroundColor =
              targetHeight > headerMinHeight ? 'transparent' : originalToolbarBgColor

            // .bar-buttons
            if (barButtons) {
              if (targetHeight > headerMinHeight) {
                imageOverlay.append(barButtons)
                Array.from(barButtons.children).forEach((btn) => {
                  const htmlBtn = btn as HTMLElement
                  htmlBtn.style.color = titleColor
                })
              } else {
                toolbar.append(barButtons)
                Array.from(barButtons.children).forEach((btn) => {
                  const htmlBtn = btn as HTMLElement
                  htmlBtn.style.color = 'unset'
                })
              }
            }
          })
        }
        setTicking(true)
      })
    }
  }
}
