import { styled } from "styled-components";
import PostTweetForm from "../components/post-tweet-form";

const Wrapper = styled.div`
    height: 100%;
    width: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px, 0px;
`;

export default function Home() {
    return <Wrapper>
        <PostTweetForm />
    </Wrapper>;
}