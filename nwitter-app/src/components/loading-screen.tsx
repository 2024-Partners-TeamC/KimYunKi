import { styled } from "styled-components";

const Wapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Text = styled.span`
    font-size: 20px;
`;

export default function LoadingScreen() {
    return <Wapper><Text>Loading...</Text></Wapper>
}