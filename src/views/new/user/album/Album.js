import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import React from 'react'

const Album = (props) => {

    //








    return (
        <Gallery>
            <Item
                original="http://img.hani.co.kr/imgdb/resize/2019/0606/00500014_20190606.JPG"
                thumbnail="http://img.hani.co.kr/imgdb/resize/2019/0606/00500014_20190606.JPG"
                width="700"
                height="123"
            >
                {({ ref, open }) => (
                    <img classname='small2' ref={ref} onClick={open} src="http://img.hani.co.kr/imgdb/resize/2019/0606/00500014_20190606.JPG" />
                )}
            </Item>
            <Item
                original="https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2019%2F03%2Frun-crew-88seoul-street-snaps-1a.jpg?q=90&w=1400&cbr=1&fit=max"
                thumbnail="https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2019%2F03%2Frun-crew-88seoul-street-snaps-1a.jpg?q=90&w=1400&cbr=1&fit=max"
                width="1024"
                height="768"
            >
                {({ ref, open }) => (
                    <img classname='small2' ref={ref} onClick={open} src="https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2019%2F03%2Frun-crew-88seoul-street-snaps-1a.jpg?q=90&w=1400&cbr=1&fit=max" />
                )}
            </Item>
        </Gallery>
    )
}

export default Album;