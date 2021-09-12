import './loading.css';

const Loading = ({show = true}) => {
    return (
        <div>
            {show ? (
                <div class="loading-container">
                    <img src="rocket-loader.gif" alt="Loading..." />
                </div>
            ) : ''}
        </div>
    )
}

export default Loading;
