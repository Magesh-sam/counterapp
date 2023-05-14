import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setNumber } from "../redux/todoSlice";

export const CounterForm = () => {
  const { number } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [newnum, setnewnum] = useState(number);

    const handleSubmit = (e) => {
        e.preventDefault();
    dispatch(setNumber(newnum));
    };
    

  return (
    <form onSubmit={(e) => handleSubmit(e)} style={{display:'flex', gap:'30px'}} >
      <input
        type="number"
        value={newnum}
        onChange={(e) => setnewnum(parseInt(e.target.value))}
        required
      />
      <button type="submit">update</button>
    </form>
  );
};
