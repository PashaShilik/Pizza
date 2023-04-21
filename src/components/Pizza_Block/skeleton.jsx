        import React from "react"
        import ContentLoader from "react-content-loader" /*Подключение библиотеки для создания скелета контента при загрузке */

        const Skeleton = (props) => (
            <ContentLoader 
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#bababa"
            foregroundColor="#ecebeb"
            {...props}
            >
            <circle cx="141" cy="121" r="120" /> 
            <rect x="0" y="259" rx="0" ry="0" width="280" height="20" /> 
            <rect x="0" y="396" rx="10" ry="10" width="100" height="30" /> 
            <rect x="127" y="396" rx="20" ry="20" width="152" height="45" /> 
            <rect x="208" y="438" rx="0" ry="0" width="0" height="6" /> 
            <rect x="0" y="296" rx="10" ry="10" width="280" height="88" />
            </ContentLoader>
        )

export default Skeleton;