import './loading.css';

const Loading = ({show = true}) => {
    return (
        <div>
            {show ? (
                <div className="loading-container">
                    <img src="rocket-loader.gif" alt="Loading..." />
                </div>
            ) : ''}
        </div>
    )
}

export default Loading;
