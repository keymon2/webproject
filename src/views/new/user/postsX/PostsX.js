import React, {useState} from 'react'
import {
  CButton,  
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,  
  CCardHeader,
  CCol,
  CDataTable,
  CCollapse,
  CFade,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

import usersData from '../../../users/UsersData'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}



const PostsX = () => {
    /*
    const postsList =
        [
            {
                head: "이번주 여행계획",
                body: "북한산을 찍고, 남한강, 제주도 를 가고 싶다.~~",
                day : "04/15 4명 모집합니다."
            },
            {
                head: "4월 21 러닝",
                body: "벚꽃이 다 진관계로 우리는 뜁니다. 용산역 출발 여의도 도착",
                day: "04/27 4명 모집! "
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
                                {element.day}
                                </CCardBody>
                            </CCard>
                    </CCol>
                            
                        )
                    })
                }
            </CRow>
        </>
    );
    */
    const fields = ['name','registered', 'role', 'accordion']
    const [collapse, setCollapse] = useState(false)
    const [collapseMulti, setCollapseMulti] = useState([false, false])
    const [accordion, setAccordion] = useState(1)
    const [fade, setFade] = useState(true)
    const toggle = (e) => {
        setCollapse(!collapse)
        e.preventDefault()
      }
    
      const toggleMulti = (type) => {
        let newCollapse = collapseMulti.slice()
        switch (type) {
          case "left":
            newCollapse[0] = !collapseMulti[0];
            break;
          case "right":
            newCollapse[1] = !collapseMulti[1];
            break;
          case "both":
            newCollapse[0] = !collapseMulti[0];
            newCollapse[1] = !collapseMulti[1];
            break;
          default:
        }
        setCollapseMulti(newCollapse)
      }
    
      const toggleFade = () => {
        setFade(!fade)
      }


    return (
        <>    
          <CRow>
            <CCol>
              <CCard>
                <CCardHeader>
                  Combined All Table
                </CCardHeader>
                <CCardBody>
                <CDataTable
                  items={usersData}
                  fields={fields}
                  hover
                  striped
                  bordered
                  size="sm"
                  itemsPerPage={10}
                  pagination
                  scopedSlots = {{
                    'accordion':
                      (item)=>(
                        <td>
                            a=fields.accordion
                          <div id="accordion">
                            <CCard className="mb-0">
                                <CCardHeader id="headingOne">
                                <CButton 
                                    block 
                                    color="link" 
                                    className="text-left m-0 p-0" 
                                    onClick={() => setAccordion(accordion === 0 ? null : 0)}
                                >
                                    <h5 className="m-0 p-0">see more</h5>
                                </CButton>
                                </CCardHeader>
                                <CCollapse show={accordion === 0}>
                                <CCardBody>
                               accordion
                                </CCardBody>
                                </CCollapse>
                            </CCard>
                          </div>
                        </td>
                      )
                  }}
                >
                    <CButton>hi</CButton>
                </CDataTable>

                </CCardBody>
              </CCard>
            </CCol>
          </CRow>



          <CCol xl="6">
        <CCard>
          <CCardHeader>
            Collapse
            <small> accordion</small>
          </CCardHeader>

          <CCardBody>
            <div id="accordion">
              <CCard className="mb-0">
                <CCardHeader id="headingOne">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 0 ? null : 0)}
                  >
                    <h5 className="m-0 p-0">Collapsible Group Item #1</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 0}>
                  <CCardBody>
                    1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                    cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                    beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven''t heard of them accusamus labore sustainable VHS.
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingTwo">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 1 ? null : 1)}
                  >
                    <h5 className="m-0 p-0">Collapsible Group Item #2</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 1}>
                  <CCardBody>
                    2. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                    cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                    beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven''t heard of them accusamus labore sustainable VHS.
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 2 ? null : 2)}
                  >
                    <h5 className="m-0 p-0">Collapsible Group Item #3</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 2}>
                  <CCardBody>
                    3. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                    cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                    beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
                  </CCardBody>
                </CCollapse>
              </CCard>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
        </>


    )
}

export default PostsX;