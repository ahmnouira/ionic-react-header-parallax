import * as React from 'react'

export type UseIonHeaderParallaxInput = {
  image: string
  expandedColor?: string
  titleColor?: string
  maximumHeight?: number
  defaultImage?: string
  showBarButtons?: boolean
}

export type UseIonHeaderParallaxResult = {
  ref: React.RefObject<any>
  loading: boolean
}

export function useIonHeaderParallax({
  image,
  defaultImage = image,
  titleColor = '#AAA',
  expandedColor = '#313131',
  maximumHeight = 300,
  showBarButtons = false,
}: UseIonHeaderParallaxInput): UseIonHeaderParallaxResult {
  const [ticking, setTicking] = React.useState<boolean>(false)
  const [loading, setLoading] = React.useState<boolean>(true)

  const ref: React.RefObject<any> = React.useRef<any>(null)

  React.useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => {
      initElements()
      setLoading(false)
    }, 300)
    return () => {
      clearTimeout(timeout)
    }
  }, [image, titleColor, expandedColor, maximumHeight, ref.current])

  const initElements = () => {
    // ion-header
    if (ref && ref.current) {
      const header = ref.current
      const parentElement = header.parentElement
      if (!parentElement) throw new Error('No IonPage parent element')

      // ion-toolbar
      const toolbar = header.querySelector('ion-toolbar') as HTMLElement
      if (!toolbar) throw new Error('Parallax requires an <ion-toolbar> element on the page to work')

      // ion-toolbar background
      const toolbarShadowRoot = toolbar.shadowRoot

      if (!toolbarShadowRoot) throw new Error('No shadow')
      const toolbarBackground = toolbarShadowRoot.querySelector('.toolbar-background') as HTMLElement

      // ion-buttons
      const barButtons = header.querySelector('ion-buttons') as HTMLElement

      const endBarButtons = header.querySelector('ion-buttons[slot="end"]') as HTMLElement

      // ion-content
      const ionContent = parentElement.querySelector('ion-content')
      if (!ionContent) throw new Error('Parallax requires an <ion-content> element on the page to work.')
      const scrollContent = ionContent.shadowRoot?.querySelector('.inner-scroll') as HTMLElement
      if (!scrollContent) {
        return
        //throw new Error('Parallax directive requires an <ion-content> element on the page to work.')
      }

      // create image overlay
      const imageOverlay = document.createElement('div')
      imageOverlay.classList.add('image-overlay')
      const colorOverlay = document.createElement('div')
      colorOverlay.classList.add('color-overlay')
      colorOverlay.appendChild(imageOverlay)
      header.appendChild(colorOverlay)

      if (barButtons) {
        imageOverlay.appendChild(barButtons)
      }

      if (endBarButtons) {
        imageOverlay.appendChild(endBarButtons)
      }

      /***  initStyles ***/
      // still in init use JS DOM
      setTicking(false)

      maximumHeight = parseFloat(maximumHeight.toString())
      let headerMinHeight = toolbar.offsetHeight
      // fetch styles
      const originalToolbarBgColor = window.getComputedStyle(toolbarBackground as Element, null).backgroundColor
      if (!originalToolbarBgColor) {
        throw new Error('Error: toolbarBackround is null.')
      }

      // header and title
      header.style.position = 'relative'

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
      imageOverlay.style.backgroundImage = `url(${image || defaultImage})`
      imageOverlay.style.height = '100%'
      imageOverlay.style.width = '100%'
      imageOverlay.style.pointerEvents = 'none'
      imageOverlay.style.backgroundSize = 'cover'
      imageOverlay.style.backgroundPosition = 'center'
      imageOverlay.style.display = 'flex'
      imageOverlay.style.justifyContent = 'space-between'
      imageOverlay.style.alignItems = 'flex-start'

      // .toolbar-background
      toolbarBackground.style.backgroundColor = originalToolbarBgColor

      // .bar-buttons
      if (barButtons) {
        barButtons.style.pointerEvents = 'all'
        Array.from(barButtons.children).forEach((btn) => {
          const htmlBtn = btn as HTMLElement
          htmlBtn.style.color = titleColor
        })
      }
      if (endBarButtons) {
        endBarButtons.style.pointerEvents = 'all'
        Array.from(endBarButtons.children).forEach((btn) => {
          const htmlBtn = btn as HTMLElement
          htmlBtn.style.color = titleColor
        })
      }
      // .scroll-content
      if (scrollContent) {
        scrollContent.style.paddingTop = `${imageOverlay.clientHeight - toolbar.clientHeight}px`
        scrollContent.addEventListener('scroll', (_e) => {
          if (!ticking) {
            window.requestAnimationFrame(() => {
              // to do

              const scrollTop = scrollContent.scrollTop

              // Parallax total progress
              headerMinHeight = toolbar.offsetHeight

              let progress = (maximumHeight - scrollTop - headerMinHeight) / (maximumHeight - headerMinHeight)
              progress = Math.max(progress, 0)

              let targetHeight = maximumHeight - scrollTop
              targetHeight = Math.max(targetHeight, headerMinHeight)

              // .toolbar-background: change color
              imageOverlay.style.height = `${targetHeight}px`
              imageOverlay.style.opacity = `${progress}`
              colorOverlay.style.height = `${targetHeight}px`
              colorOverlay.style.opacity = targetHeight > headerMinHeight ? '1' : '0'

              /* TODO: add support for dark mode for toolbar*/
              toolbarBackground.style.backgroundColor =
                targetHeight > headerMinHeight ? 'transparent' : originalToolbarBgColor

              // .bar-buttons
              if (barButtons && showBarButtons) {
                if (targetHeight > headerMinHeight) {
                  imageOverlay.append(barButtons)
                  imageOverlay.append(endBarButtons)

                  Array.from(barButtons.children).forEach((btn) => {
                    const htmlBtn = btn as HTMLElement
                    if (htmlBtn) {
                      htmlBtn.style.color = titleColor
                      // allow custom styles TODO
                    }
                  })
                } else {
                  toolbar.append(barButtons)
                  toolbar.append(endBarButtons)

                  Array.from(barButtons.children).forEach((btn) => {
                    const htmlBtn = btn as HTMLElement
                    if (htmlBtn) {
                      htmlBtn.style.color = 'unset'
                      // allow custom styles TODO
                    }
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

  return {
    ref,
    loading,
  }
}
