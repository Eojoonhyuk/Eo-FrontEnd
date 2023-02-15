import styled from "styled-components";
import { SideBar } from "../components"
const Home = () => {
    return (
        <HomeArea>
            <SideBar/>
        </HomeArea>
    )
};

export default Home;

const HomeArea = styled.div`
    width: 100%;
    height: 100vh;
`;