import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./hotel.css"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { useState } from "react"

const Hotel = () => {
  const[slideNumber, setSlideNumber] = useState(0);
  const[open, setOpen] = useState(false);
  const photos =[
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max500/200896438.jpg?k=5cbb0fc5bbe99e8111994dd3ad89d13cd5bb094b829f1c547208ddc13f984257&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max500/200897603.jpg?k=8283bc313091532711186311cf1a8be75b8c97ad2364297fefb74bbdbe6da754&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max500/200896438.jpg?k=5cbb0fc5bbe99e8111994dd3ad89d13cd5bb094b829f1c547208ddc13f984257&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max500/200896438.jpg?k=5cbb0fc5bbe99e8111994dd3ad89d13cd5bb094b829f1c547208ddc13f984257&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max500/200896438.jpg?k=5cbb0fc5bbe99e8111994dd3ad89d13cd5bb094b829f1c547208ddc13f984257&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max500/200896438.jpg?k=5cbb0fc5bbe99e8111994dd3ad89d13cd5bb094b829f1c547208ddc13f984257&o=&hp=1"
    },
  ]
  const handleOpen=(i)=>{
    setSlideNumber(i);
    setOpen(true);
  }
  const handleMove=(direction)=>{
    let newSlideNumber;
    if(direction==="l"){
      newSlideNumber=slideNumber === 0 ? 5 : slideNumber - 1;
    }else{
      newSlideNumber=slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  }
  return (
    <div>
      
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")} />
          
          
        </div>}
        
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Zabłocie 35, Podgórze, 30-701 Krakow, Poland </span>
          </div>
          <span className="hotelDistance">Excellent Location - 500m from center</span>
          <span className="hotelPriceHighlight">
            Book a stay over ₹4000 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {
              photos.map((photo,i)=>(
                <div className="hotelImgWrapper">
                  <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                </div>
              ))
            }

          </div>
          <div className="hotelDetails">
            <div className="hotelDtailsTexts">
              <h1 className="hotelTitle">Unique apt EVE - free garage</h1>
              <p className="hotelDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus sunt esse, doloremque deserunt autem accusamus officiis earum iusto nisi enim molestias atque numquam facere. Ullam est laudantium commodi aut quidem porro architecto, voluptatem ex rem necessitatibus magnam saepe, cum excepturi unde explicabo iusto voluptatibus vero nam nihil ab. Quia est esse blanditiis assumenda, eos omnis voluptatibus quod, fugiat doloremque rem temporibus unde qui id perferendis soluta ab sapiente dignissimos. Veritatis maiores mollitia expedita minus quidem fugiat aut beatae iure amet molestiae tempore odit quibusdam iste culpa, harum temporibus deserunt omnis officiis unde nihil. Possimus, nihil repudiandae a aut voluptates quos?</p>

            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aut voluptas consequatur rem alias quis.</span>
              <h2><b>₹5000</b> (9 nights)</h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
        
      <Footer />
    </div>
  )
}

export default Hotel