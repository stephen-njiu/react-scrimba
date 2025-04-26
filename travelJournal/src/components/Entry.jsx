 export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
            <img src="src/assets/react.svg" alt="React Logo" />
            </div>
            <div>
                <img src="src/assets/react.svg" alt="" />
                <span>Japan</span>
                <a href="https://www.google.com/maps/place/Muiga/@-0.316581,36.8587998,13z/data=!3m1!4b1!4m6!3m5!1s0x182843b82ca63db9:0x662c0ebc975985de!8m2!3d-0.3166669!4d36.9!16s%2Fg%2F1vgx2_w_?entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            </div>
        </article>
    )
 }