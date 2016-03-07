/^(\d{1,2}):(\d{2}).(\w).*\s(\d{1,2}):(\d{2}).(\w)/ -- for time opperations

var times = days[day].match(/^(\d{1,2}):(\d{2}).(\w).*\s(\d{1,2}):(\d{2}).(\w)/);
var startHour = times[3] === "p" ? parseInt(times[1]) + 12 : parseInt(times[1]);
var endHour = times[6] === "p" ? parseInt(times[4]) + 12 : parseInt(times[4]);
endHour = times[6] === "a" && parseInt(times[4]) === 12 ? parseInt(times[4]) + 12 : parseInt(times[4]);
if (currentDay === date.getDay() )
  ) {
  capitalizedDay = "Open Now!  " + capitalizedDay;
  return <li key={idx} className="Hour green">
    <div className="day">{capitalizedDay}:</div>
    <div className="hour">{days[day]}</div>
  </li>
} else {



var currentDay;
if (date.getHours() <= 4) {
  currentDay = (idx + 5) % 6;
} else {
  currentDay = (idx + 6) % 6;
}
