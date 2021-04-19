import React from 'react';
import { CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CCardGroup } from '@coreui/react'
import { element } from 'prop-types';
import { cilSpaceBar } from '@coreui/icons';

const MyGroups = (props) => {
    const groupList =[
        {
            id: "1",
            name: "졸업 프로젝트 ",
            picture: "https://cdn.edujin.co.kr/news/photo/202007/33322_61050_3538.jpg",
            user: [
                {
                    id:"1"
                },
                {
                    id:"2"
                }
            ],
            bio: "어렵지만 끝까지"
            
        },
        {
            id: "2",
            name: "러닝 동아리 ",
            picture: "https://mblogthumb-phinf.pstatic.net/MjAxODEyMTdfMTcw/MDAxNTQ1MDE5ODc3NjQz.u9At68ZhZ_yBTxdslVrwJ9Cjlu7u6p01aHdCiDukkLwg.QlDEELO0nHdkoZWvIjenZ6BHYj232mo9hQr3K6_maFkg.JPEG.so_moim/SE-c692b2ba-86d8-4d7c-b7a9-8548501ab521.jpg?type=w800",
            user: [
                {
                    name:"이승원",
                    src: "http://image.kmib.co.kr/online_image/2020/0122/202001220402_11170924119205_1.jpg"

                },
                {
                    name:"홍성현",
                    src: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/EOM/image/EV3g4h4SblKS1SL5QHgT5cU-CbM.png"
                }
            ],
            bio: " 혼자 다니는건 어렵지만 같이 간다면 할만 하다!"
        }
    ]
    return(
        <>
         <CCardGroup columns className = "cols-2" >
          <CCol lg ={11}>
            {groupList.map(( element ) =>
                <CCard>
                    <CCardHeader>
                       id: {element.id}
                       <img className="d-block w-100" src = {element.picture} ></img>
                    </CCardHeader>
                    <CCardBody>
                        <tbody>
                            <tr key = {1}>
                                <td>name: </td>
                                <td><strong>{   element.name}</strong></td>
                            </tr>
                        
                            <tr>
                                <td>bior: </td>
                                <td><strong>{   element.bio}</strong></td>
                            </tr>

                        </tbody>
                    </CCardBody>
                </CCard>
            )}
          </CCol>
         </CCardGroup>
        </>
    );

    
}

export default MyGroups;