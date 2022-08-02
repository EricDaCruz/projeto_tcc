import { Content } from "./styles";

export const SelectPhoto = ({src, onClick, photoSelect}) => {
    return(
        <Content 
            src={src}
            onClick={()=>onClick(src)}
            photoSelect={photoSelect}
        >
            
        </Content>
    )
};

