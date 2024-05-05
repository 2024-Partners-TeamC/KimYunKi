import { styled } from "styled-components";

const Form = styled.form`
    margin-top: 50px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

const Textarea = styled.textarea`
    width: 100%;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    font-size: 16px;
    color: white;
    background-color: #333;
    resize: none;
`;

const AttachFileButton = styled.label`
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    font-size: 16px;
    color: white;
    background-color: #1d9bf0;
    text-align: center;
`;

const AttachFileInput = styled.input`
    display: none;
`;

const SubmitBtn = styled.input`
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    font-size: 16px;
    color: white;
    background-color: #1d9bf0;
    &:hover {
        opacity: 0.8;
    }
`;

export default function PostTweetForm() {
    const [tweet, setTweet] = useState("");
    const [attachment, setAttachment] = useState<File | null>(null);
    const history = useHistory();

    const onTweetChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTweet(event.target.value);
    }

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        if (files !== null) {
            const file = files[0];
            setAttachment(file);
        }
    }

    const onTweetSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let attachmentUrl = "";
        if (attachment !== null) {
            attachmentUrl = await uploadAttachment(attachment);
        }
        await db.collection("tweets").add({
            text: tweet,
            createdAt: Date.now(),
            attachmentUrl,
            userId: auth.currentUser?.uid,
        });
        history.push("/");
    }

    return <Form onSubmit={onTweetSubmit}>
        <Textarea placeholder="What is happening?!" value={tweet} onChange={onTweetChange} rows={4} required />
        <AttachFileButton htmlFor="file">Attach photo</AttachFileButton>
        <AttachFileInput id="file" accept="image/*" onChange={onFileChange} />
        <SubmitBtn type="submit" value="Tweet" />
    </Form>;
}