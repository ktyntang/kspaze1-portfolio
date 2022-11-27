import LoadingImg from '../assets/loadingImg.webp'

export default function Loading() {
    return(
      <div style={{position:'relative',margin:'2% 0 0 0'}}>
           <img src={LoadingImg} alt="loadingBg" style={{filter:'blur(2px) grayscale(0.5)'}}/>
              <h1 style={{
                position:'absolute',
                inset:'0 0 0 15%', 
                display:'flex',
                justifyContent:'left',
                alignItems:'center',
                fontSize:'4vw',
                textShadow:'purple 1px 0 1px'
                }} >
                    LOADING...
                 </h1>
        </div>
        );
      };




