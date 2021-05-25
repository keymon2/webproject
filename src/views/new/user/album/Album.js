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
 
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
 
import { Gallery, Item } from 'react-photoswipe-gallery'

 
const Sample = () => {
 
 
    return (
        <div>
          <Gallery id="my-gallery">
            <CCard>
              <CCardHeader>
                <h2>Running</h2>                
              </CCardHeader>
              <CCardBody>
                <CCarousel>
                  <CCarouselInner>
                    <CCarouselItem>
                      <Item
                            original="https://www.verywellfit.com/thmb/4I4fua472xNbQTaqeOLIDLG__eU=/1500x1125/smart/filters:no_upscale()/Snapwire-Running-17-38ab6267e82c41a0b03b66469087aefb.jpg"
                            thumbnail="https://www.verywellfit.com/thmb/4I4fua472xNbQTaqeOLIDLG__eU=/1500x1125/smart/filters:no_upscale()/Snapwire-Running-17-38ab6267e82c41a0b03b66469087aefb.jpg"
                            width="1024"
                            height="768"
                          
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="https://www.verywellfit.com/thmb/4I4fua472xNbQTaqeOLIDLG__eU=/1500x1125/smart/filters:no_upscale()/Snapwire-Running-17-38ab6267e82c41a0b03b66469087aefb.jpg" />
                            )}
                        </Item>
                    </CCarouselItem>
                    <CCarouselItem>
                      <Item
                            original="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/1200px-Ludovic_and_Lauren_%288425515069%29.jpg"
                            thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/1200px-Ludovic_and_Lauren_%288425515069%29.jpg"
                            width="1024"
                            height="768"
                        >
                        
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/1200px-Ludovic_and_Lauren_%288425515069%29.jpg" />
                            )}   
                        </Item>
                    </CCarouselItem>
                    <CCarouselItem>
                      <Item
                            original="https://images.theconversation.com/files/380799/original/file-20210127-17-if809z.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                            thumbnail="https://images.theconversation.com/files/380799/original/file-20210127-17-if809z.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                            width="1024"
                            height="768"
                        >
                        
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="https://images.theconversation.com/files/380799/original/file-20210127-17-if809z.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" />
                            )}   
                        </Item>
                    </CCarouselItem>
                    <CCarouselItem>
                      <Item
                            original="https://media.timeout.com/images/103202155/image.jpg"
                            thumbnail="https://media.timeout.com/images/103202155/image.jpg"
                            width="1024"
                            height="768"
                        >
                        
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="https://media.timeout.com/images/103202155/image.jpg" />
                            )}   
                        </Item>
                    </CCarouselItem>
                  </CCarouselInner>
                  <CCarouselControl direction="prev"/>
                  <CCarouselControl direction="next"/>  
                </CCarousel>
              </CCardBody>             
            </CCard>         
          </Gallery>





            <Gallery>
                <Item
                    original="https://placekitten.com/1024/768?image=3"
                    thumbnail="https://placekitten.com/80/60?image=1"
                    width="1024"
                    height="768"
                >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=1" />
                    )}
                </Item>
                <Item
                    original="https://placekitten.com/1024/768?image=2"
                    thumbnail="https://placekitten.com/1024/60?image=2"
                    width="1024"
                    height="768"
                >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=2" />
                    )}
                </Item>
            </Gallery>
        </div>
    );
};
 
export default Sample;
