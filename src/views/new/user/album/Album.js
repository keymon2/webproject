/*
import React from 'react';
const Album = (props) => {
    return (
        <div>
            imBack
        </div>
    )
    
}
export default Album;
*/

import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CRow 
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

import imgfile from './bbak2.jpeg';
import imgfile2 from './bbak.jpeg';
import imgfile3 from './bbak3.jpeg';
//<img src={imgfile} />

const slides = [
  imgfile,
  imgfile2,
  imgfile3,
]

const Album = () => {
  const [activeIndex] = useState(1)

  return (
    <CRow>
      <CCol xs="12" xl="6">
        <CCard>
          <CCardHeader>
            Carousel with controls
            <DocsLink name="CCarousel"/>
          </CCardHeader>
          <CCardBody>
            <CCarousel>
              <CCarouselInner>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[0]} alt="slide1"/>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[1]} alt="slide 2"/>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[2]} alt="slide 3"/>
                </CCarouselItem>
              </CCarouselInner>
              <CCarouselControl direction="prev"/>
              <CCarouselControl direction="next"/>
            </CCarousel>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" xl="6">
        <CCard>
          <CCardHeader>
            Carousel with controls, indicators and caption
          </CCardHeader>
          <CCardBody>
            <CCarousel activeIndex={activeIndex}>
              <CCarouselIndicators/>
              <CCarouselInner>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[0]} alt="slide 1"/>
                  <CCarouselCaption><h3>Slide 1</h3><p>Slide 1</p></CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[1]} alt="slide 2"/>
                  <CCarouselCaption><h3>Slide 2</h3><p>Slide 2</p></CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[2]} alt="slide 3"/>
                  <CCarouselCaption><h3>Slide 3</h3><p>Slide 3</p></CCarouselCaption>
                </CCarouselItem>
              </CCarouselInner>
              <CCarouselControl direction="prev"/>
              <CCarouselControl direction="next"/>
            </CCarousel>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" xl="6">
        <CCard>
          <CCardHeader>
            Carousel animation
          </CCardHeader>
          <CCardBody>
            <CCarousel animate>
              <CCarouselIndicators/>
              <CCarouselInner>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[0]} alt="slide 1"/>
                  <CCarouselCaption><h3>Slide 1</h3><p>Slide 1</p></CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[1]} alt="slide 2"/>
                  <CCarouselCaption><h3>Slide 2</h3><p>Slide 2</p></CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[2]} alt="slide 3"/>
                  <CCarouselCaption><h3>Slide 3</h3><p>Slide 3</p></CCarouselCaption>
                </CCarouselItem>
              </CCarouselInner>
              <CCarouselControl direction="prev"/>
              <CCarouselControl direction="next"/>
            </CCarousel>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" xl="6">
        <CCard>
          <CCardHeader>
            Carousel animation with autoSlide
          </CCardHeader>
          <CCardBody>
            <CCarousel animate autoSlide={3000}>
              <CCarouselIndicators/>
              <CCarouselInner>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[0]} alt="slide 1"/>
                  <CCarouselCaption><h3>Slide 1</h3><p>Slide 1</p></CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[1]} alt="slide 2"/>
                  <CCarouselCaption><h3>Slide 2</h3><p>Slide 2</p></CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[2]} alt="slide 3"/>
                  <CCarouselCaption><h3>Slide 3</h3><p>Slide 3</p></CCarouselCaption>
                </CCarouselItem>
              </CCarouselInner>
              <CCarouselControl direction="prev"/>
              <CCarouselControl direction="next"/>
            </CCarousel>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Album