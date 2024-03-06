interface ButtonProps {
    label: string;
    isDisabled?: boolean;
    onClick?: () => void;
}

export default function Button({
    label,
    isDisabled = false,
    onClick,
}: ButtonProps) {
    return (
        <button
            className={`bg-amber-800 text-white font-bold py-2 px-4 rounded mx-4 ${
                isDisabled
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-amber-500"
            }`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}
