import myImage from '../images/avocado_lime.jpg';

const Gallery = () => {
  return (
    <div>
      <img src={myImage} alt="avocado_lime" className='w-1/4 h-1/4'/>
    </div>
  )
}

export default Gallery