import React from 'react';
import Wrap from '../../Layout/Wrap';
import LargeCard from '../../UI/LargeCards/LargeCard';
import './Portfolio.css'

import takeaway from '../../Assets/Images/takeaway.jpg';
import plassurg from '../../Assets/Images/plassurg.jpg';
import peak from '../../Assets/Images/peak.jpg';
import radio from '../../Assets/Images/radio.jpg';
import appplus from '../../Assets/Images/app.jpg';
import m2 from '../../Assets/Images/m2.jpg';
import csv from '../../Assets/Images/csv.jpg';
import navbg from '../../Assets/Images/nav.jpg';

const Portfolio = (props) => (
    <Wrap>
        <div className="header">
            <h1>My Works</h1>
        </div>
        <div className="container">
            <LargeCard title="www.takeaway101.co.nz" url="http://www.takeaway101.co.nz" type="Wordpress/Woocommerce" bgImage={takeaway}>
                <p><strong>Employment: </strong> Zeald</p>

                <p><strong>Work: </strong> Layout conversion, Plugin integration, Custom Plugin solution.</p>
                <p>Check it out! try to type in "Tauranga" on the search field</p>
            </LargeCard>
            <LargeCard title="www.plassurg.co.nz" url="http://www.plassurg.co.nz" type="Wordpress" bgImage={plassurg}>
                <p><strong>Employment: </strong> Zeald</p>

                <p><strong>Work: </strong> Layout conversion, Plugin integration, Custom Plugin solution.</p>
            </LargeCard>
            <LargeCard title="www.peakpilatesgroup.co.nz" url="http://www.peakpilatesgroup.co.nz" type="Wordpress" bgImage={peak}>
                <p><strong>Employment: </strong> Zeald</p>

                <p><strong>Work: </strong> Layout conversion, Plugin integration, Custom Plugin solution.</p>
                
            </LargeCard>
            <LargeCard title="www.radiotainui.co.nz" url="http://www.radiotainui.co.nz" type="Wordpress" bgImage={radio}>
                <p><strong>Employment: </strong> Zeald</p>
            
                <p><strong>Work: </strong> Layout conversion, Custom Plugin solution, API Integration.</p>
            </LargeCard>
            <LargeCard title="www.applianceplus.co.nz" url="http://www.applianceplus.co.nz" type="Magento 2" bgImage={appplus}>
                <p><strong>Employment: </strong> Zeald</p>
            
                <p><strong>Work: </strong> Website transfer, Plugin setup and system upgrades, Layout improvements.</p>
            </LargeCard>
            <LargeCard title="Reviews Importer for Magento 2" url="https://github.com/perrymarkg/m2-reviews-importer" type="Personal" bgImage={m2}>
                <p>A Reviews Importer project I made for Magento 2 which allows import of product reviews from the admin panel.</p>
            </LargeCard>
            <LargeCard title="CSV Reader/Write" url="https://github.com/perrymarkg/simplecsv" type="Personal" bgImage={csv}>
                <p>Handles CSV interaction that I made and used in some of my projects.</p>
            </LargeCard>
            <LargeCard title="Nav Builder" url="https://github.com/perrymarkg/nav-builder" type="Personal" bgImage={navbg}>
                <p>A personal project I made that converts a nested array or a flat array containing a parent and child relation to nested list. Primarily used to create menu navigation and even list items.</p>
                <p>Looking forward to use this on my next project.</p>
            </LargeCard>
        </div>
    </Wrap>
)

export default Portfolio;