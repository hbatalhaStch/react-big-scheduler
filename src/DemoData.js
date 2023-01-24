const DemoData = {
    resources: [   
      
      {
        id: "r1",
        name: "",
        groupOnly: true
      }
    ],
    events: [
  
      ...Array.from({ length: 3 }, (_, index) => {
        function getRndInteger(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }
        let dayStart = 1;
        let dayEnd = 15;
        let monthStart = 1;
        let monthEnd = 1;
  
        return {
          id: `xx${index}`,
          start: `2017-${monthStart}-${dayStart} 00:00:00`,
          end: `2017-${monthEnd}-${dayEnd} 05:31:00`,
          resourceId: "r1",
          title: `${index+1} - I am finished`,
        }
      }),
      ...Array.from({ length: 500 }, (_, index) => {
        function getRndInteger(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }
        let dayStart = 1;
        let dayEnd = 15;
        let monthStart = 1;
        let monthEnd = 1;
  
        // if (dayEnd >= dayStart) {
        //   if (monthEnd === monthStart) {
        //     let temp = dayEnd;
        //     dayEnd = dayStart;
        //     dayStart = temp
        //   }
        // }
  
        // if (monthEnd < monthStart) {
        //   let temp = monthEnd;
        //   monthEnd = monthStart;
        //   monthStart = temp
        // }
  
        return {
          id: `df${index}`,
          start: `2017-${monthStart}-${dayStart} 00:00:00`,
          end: `2017-${monthEnd}-${dayEnd} 02:01:00`,
          resourceId: "r1",
          title: `${index+1} - I am finished`,
        }
      }),
      // {
      //   id: 1,
      //   start: "2017-12-18 09:30:00",
      //   end: "2017-12-19 23:30:00",
      //   resourceId: "r1",
      //   title: "I am finished",
      //   bgColor: "#D9D9D9",
      //   showPopover: false
      // },
      // {
      //   id: 2,
      //   start: "2017-12-18 12:30:00",
      //   end: "2017-12-26 23:30:00",
      //   resourceId: "r4",
      //   title: "I am not resizable",
      //   resizable: false
      // },
      // {
      //   id: 3,
      //   start: "2017-12-19 12:30:00",
      //   end: "2017-12-20 23:30:00",
      //   resourceId: "r1",
      //   title: "I am not movable",
      //   movable: false
      // },
      // {
      //   id: 4,
      //   start: "2017-12-19 14:30:00",
      //   end: "2017-12-20 23:30:00",
      //   resourceId: "r1",
      //   title: "I am not start-resizable",
      //   startResizable: false
      // },
      // {
      //   id: 5,
      //   start: "2017-12-19 15:30:00",
      //   end: "2017-12-20 23:30:00",
      //   resourceId: "r1",
      //   title: "I am not end-resizable",
      //   endResizable: false
      // },
      // {
      //   id: 6,
      //   start: "2017-12-19 15:35:00",
      //   end: "2017-12-19 23:30:00",
      //   resourceId: "r1",
      //   title: "I am normal"
      // },
      // {
      //   id: 7,
      //   start: "2017-12-19 15:40:00",
      //   end: "2017-12-20 23:30:00",
      //   resourceId: "r1",
      //   title: "I am exceptional",
      //   bgColor: "#FA9E95"
      // },
      // {
      //   id: 8,
      //   start: "2017-12-19 15:50:00",
      //   end: "2017-12-19 23:30:00",
      //   resourceId: "r1",
      //   title: "I am locked",
      //   movable: false,
      //   resizable: false,
      //   bgColor: "red"
      // },
      // {
      //   id: 9,
      //   start: "2017-12-19 16:30:00",
      //   end: "2017-12-27 23:30:00",
      //   resourceId: "r1",
      //   title: "R1 has many tasks 1"
      // },
      // {
      //   id: 10,
      //   start: "2017-12-19 17:30:00",
      //   end: "2017-12-19 23:30:00",
      //   resourceId: "r1",
      //   title: "R1 has recurring tasks every week on Tuesday, Friday",
      //   rrule: "FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR",
      //   bgColor: "#f759ab"
      // },
      // {
      //   id: 11,
      //   start: "2017-12-19 18:30:00",
      //   end: "2017-12-20 23:30:00",
      //   resourceId: "r1",
      //   title: "R1 has many tasks 3"
      // },
      // {
      //   id: 12,
      //   start: "2017-12-20 18:30:00",
      //   end: "2017-12-20 23:30:00",
      //   resourceId: "r1",
      //   title: "R1 has many tasks 4"
      // },
      // {
      //   id: 13,
      //   start: "2017-12-21 18:30:00",
      //   end: "2017-12-24 23:30:00",
      //   resourceId: "r1",
      //   title: "R1 has many tasks 5"
      // },
      // {
      //   id: 14,
      //   start: "2017-12-23 18:30:00",
      //   end: "2017-12-27 23:30:00",
      //   resourceId: "r1",
      //   title: "R1 has many tasks 6"
      // },
      // {
      //   id: 1111,
      //   start: "2017-12-18 09:30:00",
      //   end: "2017-12-19 23:30:00",
      //   resourceId: "r1",
      //   title: "I am finished",
      //   bgColor: "#D9D9D9",
      //   showPopover: false
      // },
      // {
      //   id: 2111,
      //   start: "2017-12-18 12:30:00",
      //   end: "2017-12-26 23:30:00",
      //   resourceId: "r4",
      //   title: "I am not resizable",
      //   resizable: false
      // },
      // {
      //   id: 33344,
      //   start: "2017-12-19 12:30:00",
      //   end: "2017-12-20 23:30:00",
      //   resourceId: "r1",
      //   title: "I am not movable",
      //   movable: false
      // },
      // {
      //   id: 4455,
      //   start: "2017-12-19 14:30:00",
      //   end: "2017-12-20 23:30:00",
      //   resourceId: "r1",
      //   title: "I am not start-resizable",
      //   startResizable: false
      // },
      // {
      //   id: 577,
      //   start: "2017-12-19 15:30:00",
      //   end: "2017-12-20 23:30:00",
      //   resourceId: "r1",
      //   title: "I am not end-resizable",
      //   endResizable: false
      // },
      // {
      //   id: 6889,
      //   start: "2017-12-19 15:35:00",
      //   end: "2017-12-19 23:30:00",
      //   resourceId: "r1",
      //   title: "I am normal"
      // },
      // {
      //   id: 7788,
      //   start: "2017-12-19 15:40:00",
      //   end: "2017-12-20 23:30:00",
      //   resourceId: "r1",
      //   title: "I am exceptional",
      //   bgColor: "#FA9E95"
      // },
      // {
      //   id: 8856,
      //   start: "2017-12-19 15:50:00",
      //   end: "2017-12-19 23:30:00",
      //   resourceId: "r1",
      //   title: "I am locked",
      //   movable: false,
      //   resizable: false,
      //   bgColor: "red"
      // },
      // {
      //   id: 9677,
      //   start: "2017-12-19 16:30:00",
      //   end: "2017-12-27 23:30:00",
      //   resourceId: "r1",
      //   title: "R1 has many tasks 1"
      // },
      // {
      //   id: 108989,
      //   start: "2017-12-19 17:30:00",
      //   end: "2017-12-19 23:30:00",
      //   resourceId: "r1",
      //   title: "R1 has recurring tasks every week on Tuesday, Friday",
      //   rrule: "FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR",
      //   bgColor: "#f759ab"
      // },
      // {
      //   id: 1133,
      //   start: "2017-12-19 18:30:00",
      //   end: "2017-12-20 23:30:00",
      //   resourceId: "r1",
      //   title: "R1 has many tasks 3"
      // },
      // {
      //   id: 124676,
      //   start: "2017-12-20 18:30:00",
      //   end: "2017-12-20 23:30:00",
      //   resourceId: "r1",
      //   title: "R1 has many tasks 4"
      // },
      // {
      //   id: 136677,
      //   start: "2017-12-21 18:30:00",
      //   end: "2017-12-24 23:30:00",
      //   resourceId: "r1",
      //   title: "R1 has many tasks 5"
      // },
      // {
      //   id: 1478,
      //   start: "2017-12-23 18:30:00",
      //   end: "2017-12-27 23:30:00",
      //   resourceId: "r1",
      //   title: "R1 has many tasks 6"
      // },
      // {
      //   id: 11171,
      //   start: "2017-12-18 09:30:00",
      //   end: "2017-12-19 23:30:00",
      //   resourceId: "r1",
      //   title: "I am finished",
      //   bgColor: "#D9D9D9",
      //   showPopover: false
      // },
      // {
      //   id: 21171,
      //   start: "2017-12-18 12:30:00",
      //   end: "2017-12-26 23:30:00",
      //   resourceId: "r4",
      //   title: "I am not resizable",
      //   resizable: false
      // },
      // {
      //   id: 3338944,
      //   start: "2017-12-19 12:30:00",
      //   end: "2017-12-20 23:30:00",
      //   resourceId: "r1",
      //   title: "I am not movable",
      //   movable: false
      // },
      // {
      //   id: 43455,
      //   start: "2017-12-19 14:30:00",
      //   end: "2017-12-20 23:30:00",
      //   resourceId: "r1",
      //   title: "I am not start-resizable",
      //   startResizable: false
      // },
      // {
      //   id: 5747,
      //   start: "2017-12-19 15:30:00",
      //   end: "2017-12-20 23:30:00",
      //   resourceId: "r1",
      //   title: "I am not end-resizable",
      //   endResizable: false
      // },
      // {
      //   id: 68989,
      //   start: "2017-12-19 15:35:00",
      //   end: "2017-12-19 23:30:00",
      //   resourceId: "r1",
      //   title: "I am normal"
      // },
      // {
      //   id: 77088,
      //   start: "2017-12-19 15:40:00",
      //   end: "2017-12-20 23:30:00",
      //   resourceId: "r1",
      //   title: "I am exceptional",
      //   bgColor: "#FA9E95"
      // },
      // {
      //   id: 88056,
      //   start: "2017-12-19 15:50:00",
      //   end: "2017-12-19 23:30:00",
      //   resourceId: "r1",
      //   title: "I am locked",
      //   movable: false,
      //   resizable: false,
      //   bgColor: "red"
      // },
      // {
      //   id: 96977,
      //   start: "2017-12-19 16:30:00",
      //   end: "2017-12-27 23:30:00",
      //   resourceId: "r1",
      //   title: "R1 has many tasks 1"
      // },
      // {
      //   id: 1908989,
      //   start: "2017-12-19 17:30:00",
      //   end: "2017-12-19 23:30:00",
      //   resourceId: "r1",
      //   title: "R1 has recurring tasks every week on Tuesday, Friday",
      //   rrule: "FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR",
      //   bgColor: "#f759ab"
      // },
      // {
      //   id: 11033,
      //   start: "2017-12-19 18:30:00",
      //   end: "2017-12-20 23:30:00",
      //   resourceId: "r1",
      //   title: "R1 has many tasks 3"
      // },
      // {
      //   id: 1204676,
      //   start: "2017-12-20 18:30:00",
      //   end: "2017-12-20 23:30:00",
      //   resourceId: "r1",
      //   title: "R1 has many tasks 4"
      // },
      // {
      //   id: 1369677,
      //   start: "2017-12-21 18:30:00",
      //   end: "2017-12-24 23:30:00",
      //   resourceId: "r1",
      //   title: "R1 has many tasks 5"
      // },
      // {
      //   id: 14780,
      //   start: "2017-12-23 18:30:00",
      //   end: "2017-12-27 23:30:00",
      //   resourceId: "r1",
      //   title: "R1 has many tasks 6"
      // }
    ],
  
  };
  
  export default DemoData;
  