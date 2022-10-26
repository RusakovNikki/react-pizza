import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="200" rx="10" ry="10" width="240" height="0" />
        <rect x="0" y="243" rx="10" ry="10" width="240" height="32" />
        <circle cx="120" cy="113" r="100" />
        <rect x="0" y="287" rx="10" ry="10" width="240" height="94" />
        <rect x="4" y="410" rx="11" ry="11" width="98" height="24" />
        <rect x="120" y="400" rx="19" ry="19" width="119" height="41" />
    </ContentLoader>
)

export default Skeleton
