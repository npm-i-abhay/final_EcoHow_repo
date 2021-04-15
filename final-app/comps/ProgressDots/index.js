export default function progressDots(){
    return(
        <div style={{
            display: "flex",
            flexDirection: "row no-wrap",
            margin:"20px"
        }}>
                <div
                className={['prog-dot']['current-dot']}
                style={{
                    margin:"8px",
                    backgroundColor:"#5EBA92",
                    width:"15px",
                    height:"16px",
                    border:"2px solid #F5F1ED",
                    borderRadius:"100px"
                }}></div>
                <div className={['prog-dot']} style={{
                    margin:"8px",
                    backgroundColor:"#F5F1ED",
                    width:"15px",
                    height:"16px",
                    border:"2px solid #F5F1ED",
                    borderRadius:"100px"
                }}></div>
                <div className={['prog-dot']} style={{
                    margin:"8px",
                    backgroundColor:"#F5F1ED",
                    width:"15px",
                    height:"16px",
                    border:"2px solid #F5F1ED",
                    borderRadius:"100px"
                }}></div>
        </div> 
    )
}

//for main.js later:
//import ProgressDots from '../comps/ProgressDots'; 
