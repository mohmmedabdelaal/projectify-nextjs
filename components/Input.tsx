import clx from 'clsx'
const Input = ({className,...props}) => {
    return (
        <input className={clx('border-solid border-gray border-2 py-2 text-lg rounded-3xl w-full',className)} {...props}/>
    );
};

export default Input;
