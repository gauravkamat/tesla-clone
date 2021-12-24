import React from 'react'
import styled from "styled-components";
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order online for Touchless Delivery"
                backgroundImg="model-s.JPG"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model Y"
                description="Order online for Touchless Delivery"
                backgroundImg="model-y.JPG"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model 3"
                description="Order online for Touchless Delivery"
                backgroundImg="model-3.JPG"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model X"
                description="Order online for Touchless Delivery"
                backgroundImg="model-x.JPG"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Lowest Cost Solar Panels in America"
                description="Money back guarentee"
                backgroundImg="solar-panel.JPG"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section 
                title="Solar for New Roofs"
                description="Solar Roof Costs less Than a New Roof"
                backgroundImg="solar-roof.JPG"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section 
                title="Accessories"
                description="Order online for Touchless Delivery"
                backgroundImg="accessories.JPG"
                leftBtnText="Shop now"
               
            />
      
        </Container>
    )
}

export default Home

const Container =styled.div`

`
