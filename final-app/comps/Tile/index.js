export default function tile({
    path="#"
}){
    return(
        <div className={['skeleton']}
        style={{
            display:"flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "228px",
            height: "318px",
            backgroundColor: "#21AAB5",
            borderRadius: "18px"
        }}>
                <div className={['inner-skeleton']}
                style={{
                    display:"flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "186px",
                    height: "271px",
                    backgroundColor: "#F5F1ED",
                    borderRadius: "16px"
                }}>
                    <div className={['text']}
                    style={{
                        marginTop:"30px"
                    }}>
                        Great Job!
                    </div>

                    <div className={['gif']}
                    style={{
                        marginBottom:"50px"
                    }}>
                        <img src={path}/>
                    </div>
                </div>
        </div> 
    )
}