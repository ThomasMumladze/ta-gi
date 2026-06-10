interface Props {
    htmlClass?: string;
    oneChange: (e: string) => void;
    placeholder: string;
    type: string;
    value: string;
}

const Input = (props: Props) => {
    const { oneChange, placeholder, type, value, htmlClass } = props;

    if (!type) throw new Error("type required for input");

    return (
        <input
            className={`input ${htmlClass}`}
            onChange={(e) => oneChange(e.target.value)}
            placeholder={placeholder}
            type={type}
            value={value}
        />
    );
};

export default Input;
