import NavBar from '../NavBar';
import './PhotoGallery.css';
import Footer from '../Footer';
import image6 from '../../assets/image 6.png';
import image7 from '../../assets/image 7.png';
import image8 from '../../assets/image 8.png';
import image9 from '../../assets/image 9.png';
import image10 from '../../assets/image 10.png';
import image11 from '../../assets/image 11.png';
import image13 from '../../assets/image 13.png';
import image14 from '../../assets/image 14.png';
import image19 from '../../assets/image 19.png';
import image20 from '../../assets/image 20.png';


const gallery = [
  { image: image6 },
  { image: image7 },
  { image: image8 },
  { image: image9 },
  { image: image10 },
  { image: image11 },
  { image: image13 },
  { image: image14 },
  { image: image19 },
  { image: image20 },
];


const PhotoGallery=()=>{
    return(
        <>
            <NavBar/>

            <div id="galleryContainer">
                <h2>Photo <br/><span>Gallery</span></h2>
                <div className="imgContainer">
                    {gallery.map(pic =>{
                        return (<img src={pic.image} />);
                    })}
                </div>
                <div className="Button">
                        <button>←</button>
                    
                        <button>→</button>
                    </div>

            </div>

            <Footer />
        </>
    );
}
export default PhotoGallery;