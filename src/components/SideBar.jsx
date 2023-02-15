import styled from "styled-components";
import { 
    AiFillHome, 
    IoPaperPlaneOutline, 
    AiOutlineHeart, 
    FiPlusSquare, 
    FaUserCircle,
    AiOutlineMenu
} from "react-icons/ai";

const Items = [
    { id: "1", icon: "AiFillHome", content: "홈" },
    { id: "2", icon: "IoPaperPlaneOutline", content: "메시지" },
    { id: "3", icon: "AiOutlineHeart", content: "알림" },
    { id: "4", icon: "FiPlusSquare", content: "만들기" },
    { id: "5", icon: "FaUserCircle", content: "프로필" },
]


const SideBar = () => {
    return (
        <SideBarArea>
            <TopBottomBox>
                <SideBarImg src="../../images/instagram_logo.svg.png" alt="SideBar-Logo"/>
            </TopBottomBox>
            <ItemArea>
            {Items.map((item)=>(
                <ItemBox key={item.id}>
                    <ItemIconBox>
                        <ItemIcon>{item.icon}</ItemIcon>
                    </ItemIconBox>
                    <ItemContent>{item.content}</ItemContent>
                </ItemBox>
            ))}
            </ItemArea>
            <TopBottomBox>
                <ItemBox>
                    <ItemIconBox>
                        <AiOutlineMenu/>
                    </ItemIconBox>
                    <ItemContent>더보기</ItemContent>
                </ItemBox>
            </TopBottomBox>
        </SideBarArea>
    )
};

export default SideBar;

const SideBarArea = styled.div`
    width: 250px;
    height: 100%;
    border-right: 1px solid #ced4da;
    padding: 2rem 1rem;
`;

const TopBottomBox = styled.div`
    width: 60%;
    padding: 1rem 0;
`;

const SideBarImg = styled.img`
    width: 100%;
`;

const ItemArea = styled.div`
    height: 80%;
`

const ItemBox = styled.div`
    display: flex;
    align-items: center;
    height: 8%;
`;

const ItemIconBox = styled.div`
    
`;

const ItemIcon = styled.div`
    
`;

const ItemContent = styled.div`

`;
