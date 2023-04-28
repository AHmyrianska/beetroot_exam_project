import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const UL = styled.ul`
display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;

  @media screen and (max-width: 992px) {
    flex-flow: column nowrap;
    align-items: center;
    background-color: #fefee2;
    box-shadow: inset 0 0 10px #23482a;
    border-radius: 5px;
    position: fixed;
    top: 0px;
    right: 0;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 300ms ease-in-out;
    padding-top: 10px;
    padding-bottom: 10px;  
    gap: 0; 
    width: 250px;
    z-index: 100;
  }
`;

function Category( {open} ) {
    const setActive = ({isActive}) => isActive ? 'categories__link categories__link-active' : 'categories__link';


  return (
        
        <UL open={open}>
          <li>
            <NavLink to={'/cuisine/Italian'} className={setActive}> <FaPizzaSlice size={'1.3rem'}/>
            <h4 className='categories__title'>Italian</h4>
            </NavLink>
          </li>

          <li>
            <NavLink to={'/cuisine/American'} className={setActive}> <FaHamburger size={'1.3rem'}/>
            <h4 className='categories__title'>American</h4>
            </NavLink>
          </li>

          <li>
            <NavLink to={'/cuisine/Thai'} className={setActive}> <GiNoodles size={'1.3rem'}/>
            <h4 className='categories__title'>Thai</h4>
            </NavLink>
          </li>

          <li>
            <NavLink to={'/cuisine/Japanese'} className={setActive}> <GiChopsticks size={'1.3rem'}/>
            <h4 className='categories__title'>Japanese</h4>
            </NavLink>
          </li>
        </UL>

  )
}

export default Category