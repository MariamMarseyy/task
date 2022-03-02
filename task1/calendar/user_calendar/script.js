var titles=['Room C', 'Room A','Room E','Room B','Room F', 'Room D'];
titles=(titles.sort());

$(function() { // document ready

  $('#calendar').fullCalendar({

    defaultView: 'agendaDay',
    // defaultView: 'resourceTimeGridDay', 
    initialView: 'resourceTimeGridDay',
    // defaultDate: '2018-05-23',
    editable: true,
    minTime:'06:00:00',
    maxTime:'20:05:00',
    selectable: true,
    eventLimit: true, // allow "more" link when too many events
    header: {
      left: 'prev,next today',
      right: 'month,agendaWeek,agendaDay'
    },

    //// uncomment this line to hide the all-day slot
    allDaySlot: false,
    slotLabelFormat: "HH:mm",
    columnFormat: "dddd",
    slotDuration: '00:05:00',
    slotLabelInterval: 5,
    resources: [{
      id: 'a',
      title: titles[0],
    }, {
      id: 'b',
      title: titles[1],
      eventColor: 'green'
    }, {
      id: 'c',
      title: titles[2],
      eventColor: 'orange'
    }, {
      id: 'd',
      title: titles[3],
      eventColor: 'red'
    }, {
      id: 'E',
      title: titles[4],
      eventColor: 'orange'
    }, {
      id: 'F',
      title: titles[5],
      eventColor: 'red'
    }],
    events: [{
      id: '1',
      resourceId: 'a',
      start: '06:00:00',
      end: '06:10:00',
      title: 'event 1'
    }, {
      id: '2',
      resourceId: 'b',
      start: '06:30:00',
      end: '06:45:00',
      title: 'event 2'
    }, {
      id: '3',
      resourceId: 'c',
      start: '07:00:00',
      end: '07:15:00',
      title: 'event 3'
    }, {
      id: '4',
      resourceId: 'd',
      start: '15:00:00',
      end: '16:00:00',
      title: 'event 4'
    }, {
      id: '5',
      resourceId: 'd',
      start: '17:00:00',
      end: '19:00:00',
      title: 'event 5'
    }],

    select: function(start, end, jsEvent, view, resource) {
      console.log(
        'select',
        start.format(),
        end.format(),
        resource ? resource.id : '(no resource)'
      );
    },
    dayClick: function(date, jsEvent, view, resource) {
      console.log(
        'dayClick',
        date.format(),
        resource ? resource.id : '(no resource)'
      );
    }
  });

});