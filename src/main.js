import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
// import { Money } from './../src/money.js'; 

$( document ).ready(function() {
  console.log(getChange(5.42, ['quarters', 'dimes', 'nickels', 'pennies'],  [0.25, 0.10, 0.05, 0.01]))
});
