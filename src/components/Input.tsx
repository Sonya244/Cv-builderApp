const Input = ({ label, type = 'text', value, onChange = () => {}, id}) => {
    return (
    <div className='input-wrapper'>
        {label && <label htmlFor={id}>{label}</label>}
        <input 
        type ={type}
        id={id}
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        />
    </div>
    );
};

export default Input 