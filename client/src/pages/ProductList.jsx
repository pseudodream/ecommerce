import React, { useState } from 'react'
import styled from "styled-components"
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom';

const Container=styled.div``

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({width:"0px 20px",display:"flex",flexDirection:"column"})}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({marginRight:"0px"})}
  
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

  ${mobile({margin:"10px 0px"})}
`;
const Option = styled.option``;
const ProductList = () => {
  const location=useLocation();
  const category=(location.pathname.split("/")[2])
  
  const [filters,setFilter]=useState({});
  const [sort,setSort]=useState("newest");

  const handleFilters=(event)=>{
    const value=event.target.value;
    setFilter({
      ...filters,
      [event.target.name]:value,
    })
  }
  return (
    <Container>
         <Announcement/>
        <Navbar/>
       
        <Title>{category}</Title>

        <FilterContainer>
            <Filter><FilterText>Filter Products: </FilterText> 
            <Select name="color" onChange={handleFilters}>
                <Option disabled >Color</Option>
                <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>

            </Select>

            <Select  name="size" onChange={handleFilters}>
            <Option disabled >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>

            </Filter>
            <Filter><FilterText>Sort Products: </FilterText> 
            <Select onChange={event=>setSort(event.target.value)}>
            <Option value="newest" >Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
            
            </Filter>

        </FilterContainer>

        <Products category={category} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList