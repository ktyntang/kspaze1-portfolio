import LoadingImg from '../assets/loadingImg.webp'

export default function Loading() {
    return(
      <div style={{position:'relative',margin:'2% 0 0 0'}}>
           <img src={LoadingImg} alt="loadingBg"/>
              <h1 style={{
                position:'absolute',
                inset:'0 0 0 10%', 
                display:'flex',
                justifyContent:'left',
                alignItems:'center',
                fontSize:'4vw'
                }} >
                    LOADING...
                 </h1>
        </div>
        );
      };




