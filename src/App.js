// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './components/data';

//date
//name
//purpose

function App() {
  const cards = data.map(item =>{
    return (
      
      <Card
      //props
      // num = {cardArray}
      key = {item.id}
      // item = {item}
      // Or we can spread objects as props like this ----->
      {...item} //-------> by doing that we dontn need to mention '.item' every time in the card component
      // img={item.coverImg}
      // rating={item.stats.rating}
      // reviewCount={item.stats.reviewCount}
      // location={item.location}
      // title={item.title}
      // price={item.price}
      // openspots = {item.openSpots}
      //We covered up the entire props part coz are card component was getting pretty lengthy
      //so we pass an entire object as a compnonent coz of which we need to change the format in card component also
      />
      
      )
    })
    return (
      <div className="App">
      <Navbar/>
      <Hero/> 
      <section className='cards-list'>
        {cards}
      </section>
      {/* <Card
      img = './images/img-wedding.png'
      infoimg = './images/info-wedding.png'
      name = 'wedding'
      alt = 'weddinginfo'
      />
      <Card
      img = './images/img-bike.png'
      infoimg = './images/info-bike.png'
      name = 'bike'
      alt = 'bikeinfo'
      /> */}
    </div>
  );
}


//Object destructuring
// const person = {
//   name: 'Ojas',
//   lastname: 'Ketkar',
//   age : '19'
// }

// let {name,age}= person
// console.log(name)


export default App;
