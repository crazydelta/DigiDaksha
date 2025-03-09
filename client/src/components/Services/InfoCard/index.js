import styled from 'styled-components';

const InfoCard = (props) => {
    const { heading, displaytext } = props; // Destructure heading and displaytext from props
    return (
        <StyledInfo>
            <HeadStyle>{heading}</HeadStyle>
            <StyledItems>
                {displaytext.map((item, index) => (
                    <StyledItem key={index}>
                        <p style={{color: '#d0d2d6',margin: '0',fontSize:'22px'}}>{item}</p>
                    </StyledItem>
                ))}
            </StyledItems>
        </StyledInfo>
    );
};

export default InfoCard;

const StyledInfo = styled.div`
`;

const StyledItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

const HeadStyle= styled.h1`
text-decoration: underline;
font-size: 30px;
letter-spacing: 3px;
font-family: 'Bebas Neue', sans-serif;
`
const StyledItem = styled.div`
    display: inline-block; 
    border-style: solid;
    border-width: 1.5px;
    border-radius: 10px;
    padding: 10px; 
    border-color: #c0c5ca;
`;
