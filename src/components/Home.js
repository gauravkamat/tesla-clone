import React from 'react'
import styled from "styled-components";
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order online for Touchless Delivery"
                backgroundImg="Model-s.JPG"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model Y"
                description="Order online for Touchless Delivery"
                backgroundImg="Model-y.JPG"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model 3"
                description="Order online for Touchless Delivery"
                backgroundImg="Model-3.JPG"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model X"
                description="Order online for Touchless Delivery"
                backgroundImg="Model-x.JPG"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Lowest Cost Solar Panels in America"
                description="Money back guarentee"
                backgroundImg="Solar-panel.JPG"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section 
                title="Solar for New Roofs"
                description="Solar Roof Costs less Than a New Roof"
                backgroundImg="Solar-roof.JPG"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section 
                title="Accessories"
                description="Order online for Touchless Delivery"
                backgroundImg="Accessories.JPG"
                leftBtnText="Shop now"
               
            />
      
        </Container>
    )
}

export default Home

const Container =styled.div`

`
