import React from 'react';
import { CCard,
    CCardBody,
    CCardHeader,
    CCarousel,
    CCarouselCaption,
    CCarouselControl,
    CCarouselIndicators,
    CCarouselInner,
    CCarouselItem,
    CCol,
    CRow } from '@coreui/react'

const PostsX = () => {
    const postsList =
        [
            {
                head: "이번주 여행계획",
                body: "북한산을 찍고, 남한강, 제주도 를 가고 싶다.~~"
            },
            {
                head: "4월 21 러닝",
                body: "벚꽃이 다 진관계로 우리는 뜁니다. 용산역 출발 여의도 도착"
            }
        ];
    return (
        <>
            <CRow>
                {
                    postsList.map((element)=>{
                        return(
                    <CCol xs="12" sm="6" md="4">
                            <CCard>
                                <CCardHeader>
                                {element.head}
                                </CCardHeader>
                                <CCardBody>
                                {element.body}
                                </CCardBody>
                            </CCard>
                    </CCol>
                            
                        )
                    })
                }
            </CRow>
        </>
    );
};

export default PostsX;