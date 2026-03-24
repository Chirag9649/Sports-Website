import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <header className='p-5 m-2 rounded'>
        <div className='text-center bg-dark p-3 rounded bg-opacity-50'>
          <h1 className='text-white '><b>Sport Pulse</b></h1>
          <p className='text-white'>The first place you will think of when you hear or think about spots</p>
        </div>
      </header>


      <div class="container text-center py-5">
      <h1 className='mb-3'><b>Fetured Products</b></h1>
        <div class="row row-cols-4">
          <div class="col">      <div className="card" >
            <img src="https://i5.walmartimages.com/seo/Wilson-Evolution-Official-Game-Basketball-29-5_34756a74-790c-4a69-8eae-09a1a5d41203.418092b7cd03a942f8815040d07f9234.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Wilson Evolution 29.5" Game Basketball</h5>
              <p className="card-text">The Wilson Evolution Basketball is the #1 indoor game basketball in the US, widely used in high school and college. Known for its signature soft feel and superior grip, it features a moisture-wicking composite leather cover and cushioned core technology for ultimate control. </p>
              <Link to="/products" className="btn btn-primary">Check Out</Link>
            </div>
          </div></div>
          <div class="col">      <div className="card" >
            <img src="https://www.diamondsportgear.com/cdn/shop/files/EUS5HYP11_1.png?v=1723152135" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">2025 Easton Hype Fire (-11) 2 5/8" USA Baseball Bat</h5>
              <p className="card-text">The Easton Hype Fire is a top-tier, two-piece composite baseball bat, widely considered one of the hottest performing bats in USSSA, USA, and BBCOR leagues. Renowned for its massive sweet spot created by 3D Ropecoil Composite technology, it delivers high exit velocities, a balanced swing, and minimal vibration.</p>
              <Link to="/products" className="btn btn-primary">Check Out</Link>
            </div>
          </div></div>
          <div class="col">      <div className="card" >
            <img src="https://cdn11.bigcommerce.com/s-qq5h9nclzt/images/stencil/1280x1280/attribute_rule_images/88748_source_1770127404.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Nike Vapor Jet 8.0</h5>
              <p className="card-text">The Nike Vapor Jet 8.0 is a 2024 model, high-performance American football receiver glove featuring enhanced Magnigrip+ palms for superior, sticky grip in all weather conditions. Designed for maximum flexibility, they utilize a lightweight, breathable, quilted backhand, an adjustable neoprene cuff, and index/pinky finger wraps for increased surface area.</p>
              <Link to="/products" className="btn btn-primary">Check Out</Link>
            </div>
          </div></div>
          <div class="col">      <div className="card" >
            <img src="https://smart-armor.com/wp-content/uploads/2022/07/Smart-Armor-Product-image-01-2.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Smart Armor S1 Pro</h5>
              <p className="card-text">Smart Armor Pro S1 (Elite) shin pads are high-performance soccer guards featuring RHEON™, a NASA-inspired, smart-material that is flexible when worn but hardens instantly upon impact for superior protection. They are extremely lightweight, breathable, and designed using 3D CT scans to fit anatomically, making them popular among elite players.</p>
              <Link to="/products" className="btn btn-primary" >Check Out</Link>
            </div>
          </div></div>
        </div>
      </div>


    </div>
  )
}
