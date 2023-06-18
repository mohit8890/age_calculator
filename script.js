//make years and days array
function generateArray(start, end) {
  let arr = [];
  for (start; start <= end; start++) {
    arr.push(start);
  }
  return arr;
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = generateArray(1, 31);
const years = generateArray(1900, new Date().getFullYear());
function calculateAge(birthday) {
  let today = new Date(),
  dob = new Date(birthday),
  diff = today.getTime() - dob.getTime(),
  years = Math.floor(diff / 31556736000),
  days_diff = Math.floor(diff % 31556736000 / 86400000),
  months = Math.floor(days_diff / 30.4167),
  days = Math.floor(days_diff % 30.4167);

  console.log(`${years} years ${months} months ${days} days`);
  return `${years} years ${months} months ${days} days`;
}


class AgeCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 18,
      month: 'Jun',
      year: 2023,
      age: '0 years 0 months 0 days' };


    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
  }

  handleDayChange(e) {
    this.setState({
      day: e.target.value });

  }

  handleMonthChange(e) {
    this.setState({
      month: e.target.value });

  }

  handleYearChange(e) {
    this.setState({
      year: e.target.value });

  }

  handleSubmit(e) {
    e.preventDefault();

    const day = this.state.day,
    month = this.state.month,
    year = this.state.year;

    let age = calculateAge(`${month} ${day} ${year}`);

    this.setState({
      age: age });


  }

  render() {

    return /*#__PURE__*/React.createElement("div", null, 
    React.createElement("h1", null, "Age Calculator"), 
    React.createElement("form", { onSubmit: this.handleSubmit }, 
    React.createElement("div", { className: "container" }, 
    React.createElement(Input, { arr: days, handleChange: this.handleDayChange, val: this.state.day }), 
    React.createElement(Input, { arr: months, handleChange: this.handleMonthChange, val: this.state.month }), 
    React.createElement(Input, { arr: years, handleChange: this.handleYearChange, val: this.state.year })), 

    React.createElement("button", { type: "submit" }, "Calculate")), 

    React.createElement("article", null, 
    React.createElement("h2", null, "Your age is"), 
    React.createElement("span", null, this.state.age)), 

    React.createElement("footer", null, "Made with ", React.createElement("a", { href: "https://reactjs.org/", target: "_blank" }, "ReactJS")));


  }}



function Input(props) {
  let options = props.arr.map(item => React.createElement("option", { value: item, key: item }, item));

  return React.createElement("select", { onChange: props.handleChange, value: props.val },
  options);

}



ReactDOM.render(React.createElement(AgeCalculator, null), document.getElementById('root'));