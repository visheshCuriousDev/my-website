import './width-algo.css';

const WidthAlgo = () => {
    return (
        <div class="width-algo">
            <h3> Width Algorithms </h3>
            <div class="fit-content">
                <h4>Short</h4>
                <h4>This uses fit-content</h4>
                <h4>The simplest way to fit the length of an element to it content width 😬😬😬😬😬😬😬😬😬😬😬😬😬😬</h4>
            </div>
            <div class="no-fit-content-ex1">
                <h4>Short</h4>
                <h4>This uses table display</h4>
                <h4>Thi uses table display property but its old and bring in the height issues 😬😬😬😬😬😬😬</h4>
            </div>
            <div class="no-fit-content-ex2">
                <h4>Short</h4>
                <h4>This uses min, max content width</h4>
                <h4>This uses a mix of min and max width. This solution works as hack but cannot use it 😬😬😬😬😬😬😬</h4>
            </div>
            <div class="no-fit-content-ex3">
                <h4>Short</h4>
                <h4 style={{marginLeft: "10px"}}>This uses</h4>
                <h4>display: inline-block</h4>
                <h4>The problem is that if sentence is short it will automatically adjust to previous line 😬😬😬😬😬😬</h4>
            </div>
        </div>
    )
}

export default WidthAlgo