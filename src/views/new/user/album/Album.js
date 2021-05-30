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
import Button from "./button.js"
class Sample extends React.Component {
    constructor(props){
        super (props);
        this.state = {
            image: [],
            tag: "전체"
        };
        this.tagChange = this.tagChange.bind(this)
    }
    async componentDidMount(){
        const data = await findAlbum()

        const image = data.data.image;
        this.setState({image : image});
        
    }
   tagChange= async (Tag) =>{
        this.setState({tag: Tag})
   }
    render() {
       const image = this.state.image.map( img =>{
            const Tag = this.state.tag
            if(Tag != "전체"){
                if(img.location == Tag){
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
               
                    )
                } 
            }else{
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
        
                )}
        })   

        
            return (
                <div>
                    <b > <Button  onClick={() =>this.tagChange("전체")} children="전체" /></b>

                    <br/>
                    <list >       
                    <Gallery  >
                        <a>
                        {image}
                        </a>
                    </Gallery>
                    </list>     
                </div>
            );}

    
};
 
export default Sample;
