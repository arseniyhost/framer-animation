import React, { useState } from 'react'
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordingSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    background: #D8A402;

    h1 {
        font-size: 3rem;
        color: #000;
        margin-bottom: 30px;
        text-align: center;
    }

    @media(max-width: 933px) {
        h1 {
            font-size: 2rem;
            
        }
    }
`;

const Container = styled.div`
    position: absolute;
    top: 30%;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
    background: #272727;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
    cursor: pointer;

    h3 {
        padding: 2rem;
        font-size: 2rem;
    }

    span {
        margin-right: 1.5rem;
    }

    @media (max-width: 670px) {
        h3 {
            font-size: 1.5rem;
        }
        
    }

    @media (max-width: 585px) {
        h3 {
            font-size: 1rem;
        }
        
    }
`;

const Dropdown = styled.div`
    background: #1c1c1c;
    color: #FCF2D6;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #25BAE5;
    border-top: 2px solid #25BAE5;

    p {
        font-size: 1.5rem;
    }

    @media (max-width: 670px) {
        p {
            font-size: 1rem;
        }
        
    }

    @media (max-width: 585px) {
        p {
            font-size: 0.8rem;
        }
        
    }
`;

const According = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }

        setClicked(index);
    }

    return (
        <IconContext.Provider value={{
            color: "#F4CA16",
            size: '25px'
        }}>
            <AccordingSection>
                <Container>
                    <div>
                        <h1>Краткое описание как пользоваться</h1>
                    </div>
                    {Data.map((item, index) => {
                        return (
                            <>
                                <Wrap onClick={() => toggle(index)} key={index} >
                                    <h3>{item.question}</h3>
                                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                </Wrap>
                                {clicked === index ? (
                                    <Dropdown>
                                        <p>{item.answer}</p>
                                    </Dropdown>
                                ) : null}

                            </>
                        )
                    })}
                </Container>
            </AccordingSection>
        </IconContext.Provider>
    )
}

export default According
