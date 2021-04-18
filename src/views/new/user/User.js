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
import pro from './yum.jpeg'

const User = ({ match }) => {
    const user = {
        id: 1234,
        name: "seungWon Lee",
        birth: 970112,
        SubScribe: ["HIKEY", "SeoulRun"],
        comments: "I LOVE READING",

    }
    const userDetails = Object.entries(user)
    return (
        <>
            <CRow>
                <CCol lg={6}>
                    <CCard>
                        <CCardHeader>
                            User id: {match.params.id}
                            <img className="d-block w-100" src={pro}/>
                        </CCardHeader>
                        <CCardBody>
                            <table className="table table-striped table-hover">
                                <tbody>
                                    {
                                        userDetails.map(([key, value], index) => {
                                            return (
                                                <tr key={index.toString()}>
                                                    <td>{`${key}:`}</td>
                                                    <td><strong>{value}</strong></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
};

export default User;