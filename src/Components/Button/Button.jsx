

const Button = ({className="cursor-pointer",title="Sign In"}) => {
    return (
        <div className={`${className}`}>
          <p>{title}</p> 
        </div>
    );
};

export default Button;