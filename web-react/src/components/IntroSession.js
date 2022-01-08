import GrandStackImg from '../assets/images/grandstack.png';
import GrandStackArchitectureImg from '../assets/images/grandstack_architecture.png';
import styled from 'styled-components';

const IntroSessionStyles = styled.div`
    .architecture__pic{
    width: 60%;
    height: auto;
        align-content: center;
    }
    .grandstack__pic {
        width: 50%;
        height: auto;
        align-content: center;
    }
`

export default function IntroSession() {
    return (
        <IntroSessionStyles>
            <h1>GRAND stack Hands on Project</h1>
            <p>This is a simple Hello World project based on GRAND stack (<b>G</b>raphQL, <b>R</b>eact, <b>A</b>pollo, <b>N</b>eo4J <b>D</b>atabase) with the visualization part using <b>react-force-graph</b>.</p>
            <p>The key components of the GRAND stack are as follow:</p>
            <div >
                <img className='grandstack__pic' src= {GrandStackImg}></img>
            </div>
            <p>Here is the sample architecture diagram shared in a course by william lyon:</p>
            <div>
                <img className='architecture__pic' src={GrandStackArchitectureImg}></img>
            </div>
        </IntroSessionStyles>
    )
}