import {TbAirConditioning,BiWind} from "react-icons/fa";
import styled from "styled-components";



function Category() {
  return (
    <List>
        {/* < NavLink to={'/compartment/AC'}> */}
            <TbAirConditioning/>
            <h4>AC Compartment</h4>
        {/* </ NavLink> */}
        {/* < NavLink to={'/compartment/NON-AC'}> */}
            <BiWind/>
            <h4>Non-AC Compartment</h4>
        {/* </ NavLink> */}
    </List>
  )
}


const List = styled.div `
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;

`

export default Category