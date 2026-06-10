interface Props {
    htmlClass?: string;
    oneChange: (e: string) => void;
    placeholder: string;
    value: string;
}

const TextArea = (props: Props) => {
    const { oneChange, placeholder, value, htmlClass } = props;
    return (
        <textarea
            onChange={(e) => oneChange(e.target.value)}
            placeholder={placeholder}
            value={value}
            className={`textarea ${htmlClass}`}
            rows={6}
        />
    );
};

export default TextArea;
