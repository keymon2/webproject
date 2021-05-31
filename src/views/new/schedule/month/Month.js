import React, {Component} from 'react';
import {DayPilot, DayPilotMonth} from "daypilot-pro-react";
import "./MonthStyles.css";
import "./icons/style.css";
import "./style.css"
import {findSchedule, insertSchedule ,deleteSchedule} from "../../../../controller/ContollerSchedule.js"
class Month extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventHeight: 30,
      headerHeight: 30,
      cellMarginBottom: 10,
      cellHeaderHeight: 20,
      eventMarginBottom: 5,
      eventEndSpec: "Date",
      updateEvents: [],
       onBeforeEventRender: args => {
        args.data.areas = [
          { top: 6, right: 10, width: 12, height: 14, icon: "icon-triangle-down", visibility: "Visible", action: "ContextMenu", style: "font-size: 12px; background-color: #fff; border: 1px solid #ccc; border-radius: 5px; padding: 3px 3px 0px 3px; cursor:pointer;"}
        ];
        args.data.borderColor = "darker";
      },
      contextMenu: new DayPilot.Menu({
        items: [
          {
            text: "Delete",
            onClick: async (args) => {
              var e = args.source;
              console.log(e.data)
              await deleteSchedule(e.data)
              this.calendar.events.remove(e);
            }
          },
          {
            text: "-"
          },
          {
            text: "Blue",
            icon: "icon icon-blue",
            color: "#3c78d8",
            onClick: args => this.updateColor(args.source, args.item.color)
          },
          {
            text: "Green",
            icon: "icon icon-green",
            color: "#6aa84f",
            onClick: args => this.updateColor(args.source, args.item.color)
          },
          {
            text: "Yellow",
            icon: "icon icon-yellow",
            color: "#e69138",
            onClick: args => this.updateColor(args.source, args.item.color)
          },
          {
            text: "Red",
            icon: "icon icon-red",
            color: "#cc0000",
            onClick: args => this.updateColor(args.source, args.item.color)
          },
          {
            text: "Auto",
            color: null,
            onClick: args => this.updateColor(args.source, args.item.color)
          },

        ]
      }),
      onTimeRangeSelected:  (args) => {
        let dp = this.calendar;
        DayPilot.Modal.prompt("Create a new event:", "Event 1").then(function (modal) {
          dp.clearSelection();
          if (!modal.result) {
            return;
          }
          const event = new DayPilot.Event({
            start: args.start,
            end: args.end,
            id: DayPilot.guid(),
            text: modal.result
          })
          dp.events.add(event);
        });
      },

    };
    this.submitDB = this.submitDB.bind(this)
  }

  async componentDidMount() {

    let first = DayPilot.Date.today().firstDayOfMonth();
    const events = await findSchedule();
    console.log(events)
    // load event data
    this.setState({
      startDate: DayPilot.Date.today(),
      events: events
    });

  }

   updateColor(e, color) {
    e.data.backColor = color
    this.calendar.events.update(e);
  }
  async submitDB(){
    
    const event = this.calendar.events
    const event_b = this.state.events
    console.log(event)
    console.log(event_b)
    let list =[]
    event_b.map( data =>{
      if(data.id != undefined){
        list.push({
          id: data.id,
          start: data.start,
          end: data.end,
          text: data.text
        })
      }
    })
    const resonse = await insertSchedule(list)
    
    
  }

  render() {
    var {...config} = this.state;
    return (
      <div>
        <DayPilotMonth
          {...config}
          ref={component => {
            this.calendar = component && component.control;
          }}
        />
        <button className="button" onClick={() => this.submitDB()} > 저장 </button>
      </div>
    );
  }
}

export default Month;
