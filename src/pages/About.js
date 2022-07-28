import { getData } from "../store/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


export default function About() {
    const state = useSelector(state => state);

    const dispatch = useDispatch();
    dispatch(getData());
    useEffect(() => {
        console.log(state.data);
    }, [state.loading]);
    return (
        <div className="container">
            <h1>About</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur consectetur,
                nisl nisl consectetur nisl, eu consectetur nisl nisl euismod
                nisl.
            </p>
        </div>
    );
}