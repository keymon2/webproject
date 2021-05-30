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
import { findAlbum} from "../../../../controller/ContollerUser.js"
import "./style.css"

class Sample extends React.Component {
    constructor(props){
        super (props);
        this.state = {
            image: [],
            tag: ""
        };
        this.tagChange = this.tagChange.bind(this)
    }
    async componentDidMount(){
        const data = await findAlbum()

        const image = data.data.image;
        this.setState({image : image});
        
    }
   tagChange= async (e,changeTag) =>{
        e.preventDefault();

        this.setState({tag: changeTag})
   }
    render() {
       const image = this.state.image.map( img =>{
            if(this.state.tag != ""){
                if(img.location == this.state.tag)
                ;
            }   



            return (
                <Item
                    original = {img.src}
                    thumbnail = {img.src}
                    width="1024"
                    height="768"
                >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src={img.src}
                        className ="box-sizing" />
                    )}
                </Item>
           
                )})}
       
            return (
            <div>
                <b > <button> </button></b>

                <br/>
                <list >       
                <Gallery  >
                    <a>
                    {image}
                    </a>
                </Gallery>
                </list>     
            </div>);
        }

    
};
 
export default Sample;
