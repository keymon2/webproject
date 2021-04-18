import React from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'

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
                <CCol xs="12" sm="6" md="4">
                    <CCard>
                        <CCardHeader>
                            Yum
                        </CCardHeader>
                        <CCardBody>
                          <image src="./yum.jpeg"/>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
};

export default User;