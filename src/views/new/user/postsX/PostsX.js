import React from 'react'
import Board from 'react-trello'

const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'Planned Tasks',
        label: '3/3',
        collapsibleLanes: true,
        cards: [
          {id: 'Card1', title: 'Running', description: '벚꽃이 다 진관계로 우리는 뜁니다. 용산역 출발 여의도 도착', label: '4/27 4명 모집', draggable: true, editable: true},
          {id: 'Card2', title: '등산의 목적', description: '북한산을 찍고, 남한강, 제주도 를 가고 싶다.~~', label: '04/27 4명 모집', metadata: {sha: 'be312a1'},editable: true},
          {id: 'Card3', title: 'NextLevel', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'},canAddLanes: true,editable: true}
        ]
      },
      {
        id: 'lane2',
        title: '고민 중',
        label: '0/0',
        cards: []
      },
      {
        id: 'lane3',
        title: 'Completed',
        label: '0/0',
        cards: []
      }
    ]
  }

export default class App extends React.Component {
  render() {
    return <Board data={data} />
  }
}