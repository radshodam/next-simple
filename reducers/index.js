import { combineReducers } from "redux";
import CounterReducer from "./Counter";
import ModalReduce from './ModalReduc'
const AllReducers = combineReducers({
  Counter: CounterReducer,
  DataMod:ModalReduce
});
export default AllReducers;
