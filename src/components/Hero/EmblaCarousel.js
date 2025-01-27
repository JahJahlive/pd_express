import React, { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useAutoplay } from './EmblaCarouselAutoplay'
import { useAutoplayProgress } from './EmblaCarouselAutoplayProgress'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { Title, Description, Link, SlideItem } from './HeroStyles'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const progressNode = useRef(null)
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 })
  ])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi)

  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map(({ id, title, description, target }) => (
            <div className="embla__slide" key={id} style={{ position: 'relative', textAlign: 'center'}}>
              <SlideItem bg={`https://picsum.photos/1100/450?v=${id}`}>
                <div style={{ padding: "15%", width: '100%', height: '100%', backgroundColor: "rgba(0,0,0,0.5)"}}>
                  <Title>{title}</Title>
                  <Description>{description}</Description>
                  <br />
                  <Link href={target}>Cliquez ici</Link>
                </div>
              </SlideItem>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onAutoplayButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        <div
          className={`embla__progress`.concat(
            showAutoplayProgress ? '' : ' embla__progress--hidden'
          )}
        >
          <div className="embla__progress__bar" ref={progressNode} />
        </div>
{/* 
        <button className="embla__play" onClick={toggleAutoplay} type="button">
          {autoplayIsPlaying ? 'Stop' : 'Start'}
        </button> */}
      </div>
    </div>
  )
}

export default EmblaCarousel
