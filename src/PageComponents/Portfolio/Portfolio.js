import React from 'react';
import Wrap from '../../Layout/Wrap';
import LargeCard from '../../UI/LargeCards/LargeCard';
import './Portfolio.css'

import img from '../../Assets/Images/bg.jpg';

const Portfolio = (props) => (
    <Wrap>
        <div className="header">
            <h1>My Works</h1>
        </div>
        <div className="container full">
            <LargeCard title="www.takeaway101.co.nz" url="http://www.takeaway101.co.nz" type="Wordpress/Woocommerce" bgImage={img}>
                <p><strong>Employment: </strong> Zeald</p>

                <p><strong>Work: </strong> Layout conversion, Plugin integration, Custom Plugin solution.</p>
                <p>Check it out! try to type in "Tauranga" on the search field</p>
            </LargeCard>
            <LargeCard title="www.plassurg.co.nz" url="http://www.plassurg.co.nz" type="Wordpress" bgImage={img}>
                <p><strong>Employment: </strong> Zeald</p>

                <p><strong>Work: </strong> Layout conversion, Plugin integration, Custom Plugin solution.</p>
                <p>Check it out! try to type in "Tauranga" on the search field</p>
            </LargeCard>
            <LargeCard title="www.peakpilatesgroup.co.nz" url="http://www.peakpilatesgroup.co.nz" type="Wordpress" bgImage={img}>
                <p><strong>Employment: </strong> Zeald</p>

                <p><strong>Work: </strong> Layout conversion, Plugin integration, Custom Plugin solution.</p>
                
            </LargeCard>
            <LargeCard title="www.radiotainui.co.nz" url="http://www.radiotainui.co.nz" type="Wordpress" bgImage={img}>
                <p><strong>Employment: </strong> Zeald</p>
            
                <p><strong>Work: </strong> Layout conversion, Custom Plugin solution, API Integration.</p>
            </LargeCard>
            <LargeCard title="www.applianceplus.co.nz" url="http://www.applianceplus.co.nz" type="Magento 2" bgImage={img}>
                <p><strong>Employment: </strong> Zeald</p>
            
                <p><strong>Work: </strong> Website transfer, Plugin setup and system upgrades, Layout improvements.</p>
            </LargeCard>
            <LargeCard title="Reviews Importer for Magento 2" url="https://github.com/perrymarkg/m2-reviews-importer" type="Personal" bgImage={img}>
                <p>A Reviews Importer project I made for Magento 2 which allows import of product reviews from the admin panel.</p>
            </LargeCard>
            <LargeCard title="CSV Reader/Write" url="https://github.com/perrymarkg/simplecsv" type="Personal" bgImage={img}>
                <p>Handles CSV interaction that I made and used in some of my projects.</p>
            </LargeCard>
            <LargeCard title="Nav Builder" url="https://github.com/perrymarkg/nav-builder" type="Personal" bgImage={img}>
                <p>A personal project I made that converts an array to list. Primarily used to create menu navigation and even list items.</p>
                <p>Looking forward to use this on my next project.</p>
            </LargeCard>
        </div>
    </Wrap>
)

export default Portfolio;