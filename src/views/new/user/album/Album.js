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

import "./style.css"
import {insertAlbum,findAlbum} from "../../../../controller/controllerAlbum"
import { arrayOf } from 'prop-types'

class Sample extends React.Component {
    constructor(props){
        super (props);
        this.state = {
            image: [],
            tag: "전체",
            list: [],
            ele: ""
        };
        this.tagChange = this.tagChange.bind(this)
    }
    async componentDidMount(){
        const data = await findAlbum()
        const image = data.data.image;
        console.log(image)
        console.log(typeof(image))
        this.setState({image : image});
        
    }
   tagChange= async (Tag) =>{
       console.log("asdasd")
        this.setState({tag: Tag})
   }
   addList = ()=>{
       const list = this.state.list
       list.push(this.state.ele)
       this.setState( { 
           list: list,
           ele: ""
        })
   }
   listRemove= (id) =>{
        const list = this.state.list
        for(let i = 0; i < list.length; i++){
            if(list[i] === id){
                list.splice(i,1);
                break;
            }
        }
        this.setState({list: list})
   }
   submit= async() => {
        const list = this.state.list
        var listSubmit=[];
        list.map(ele => {
            listSubmit.push({
                src: ele,
                location: "personal"
            })
        })
        const response = await insertAlbum(listSubmit)
        if( response.success == false){
            alert("땡!")
        }
        const image = await findAlbum();

       this.setState({
           image: image.data.image,
           list:[],
           ele: ""
       })
   }
    render() {
        const image_t = this.state.image.map( img =>{
            var Tag = this.state.tag
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
                    <b > 
                        <button className="button" onClick={() =>this.setState({tag: "전체"})} children="전체" />
                        <button className="button" onClick={() =>this.setState({tag: "personal"})} children="개인" />
                        <button className="button" onClick={() =>this.setState({tag: "gruop"})} children="그룹" />
                    </b>

                    <br/>
                    <list >       
                    <Gallery  >
                        <a>
                        {image_t}
                        </a>
                    </Gallery>
                    </list> 
                    <br/>
                    <CCard>
                        <input type="text" name="name" onChange={(e)=>this.setState({ele: e.target.value})}/> 
                        <list>
                            {
                                    this.state.list.map(ele => {
                                        return(
                                            <div>
                                                <a>{ele}</a>
                                                <button className = "button" onClick={(e)=>this.listRemove(ele)} > 삭제 </button>
                                            </div>
                                        )
                                    })
                                
                            }
                        </list>
                        <button className="button" onClick = {()=>this.addList()}> 추가 </button>
                        <button className="button" onClick ={() => this.submit()}> 올리기 </button>
                    </CCard>
                </div>
            );}

    
};

 
export default Sample;
