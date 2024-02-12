import './Card.css';

export const Card: React.FC = (props) => {
    return (
        <>
            <div className='card'>{props.children}</div>
        </>
    );
};
