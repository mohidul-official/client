import "./searchitem.css"

function SearchItem() {
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square200/448499913.webp?k=7605308e3284dbb9c6aded2c53935c52b5da215f85e14e813749cdbf8dd175f8&o=" alt="" className="siImg" />
        <div className="siDesc">
           <h1 className="siTitle">MalinoweLove - 3 pokoje, parking, ogród</h1>
           <span className="siDistance">4.6 km from center</span>
           <span className="siTaxiOp">Free airport taxi</span>
           <span className="siSubtitle">Two-Bedroom Apartment</span>
           <span className="siFeatures">4 beds (2 twins, 1 full, 1 sofa bed)</span>
           <span className="siCancelOp">Free cancelation</span>
           <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span> 
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">₹5000</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem