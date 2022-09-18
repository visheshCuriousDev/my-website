import './imp-points.css';

const ImpPoints = () => {
    return (
        <div className="imp-points-sec">
            <h3 className="header">Important CSS points</h3>
            <h6 className="sub-header"> Width </h6>
            <ul className="important-points">
                <li><blockquote> box-sizing: border-box </blockquote> will include content, padding and border as  part of the width</li>
                <li>Use auto property to use exsisting space and fill Ex: Fill in available width <blockquote> width: auto </blockquote> </li>
            </ul>
            <h6 className="sub-header"> Height </h6>
            <ul className="important-points">
                <li>Inorder to set heights always start setting <blockquote>height:100%</blockquote> from html and body </li>
            </ul>
            <h6 className="sub-header"> Margins </h6>
            <ul className="important-points">
                <li>To center align you can set margin to auto. Ex: <blockquote> margin: auto </blockquote></li>
                <li>Only horizontal marings collapse - <b>Margin collapse is unique to Flow layout.</b></li>
                <li>Nesting doesn't prevent collapsing. Ex:</li>
                <li>Margin is like putting glue on something before you’ve decided what to stick it to, or if it should be stuck to anything.</li>
            </ul>
            <h6 className="sub-header"> Positions </h6>
            <ul className="important-points">
                <li>It enables using these <blockquote> top </blockquote>,<blockquote> right </blockquote>,<blockquote> bottom </blockquote>,<blockquote> left </blockquote> css properties.</li>
                <li>These propertice does not affect the child components. Hence it might overlay on child element if position overlaps.</li>
                <li>Absolute position wants to be as small as possible hence the content will be broken as small as possible and width is adjusted accordingly.</li>
                <li>Use <blockquote>isolation: isolate</blockquote> to isolate the dom stack. Anything inside this HTML element like z-index will not have impacts outside this HTML element. </li>
                <li><b>Difference between fixed and sticky:</b> Fixed position will not occupy any space in the body, so the next element(eg: an image) will be behind the fixed element. sticky position occupies the space, so the next element will not be hidden behind it.</li>
            </ul>
            <h6 className="sub-header"> Center align techniques </h6>
            <ul className="important-points">
                <li>To center align you can set margin to auto. Ex: <blockquote> margin: auto </blockquote></li>
                <li>To center align you can set position absolute and set <blockquote> top: 0 </blockquote>, <blockquote> bottom: 0 </blockquote>, <blockquote> left: 0 </blockquote>, <blockquote> right: 0 </blockquote></li>
            </ul>
            <h6 className="sub-header"> Scroll </h6>
            <ul className="important-points">
                <li><blockquote>white-space</blockquote> is a property that lets us tweak how words and other inline/inline-block elements wrap.</li>
                <li><b>Horizontal scroll: </b>By setting it to <blockquote>white-space</blockquote> <blockquote>nowrap</blockquote>, we instruct the container to never break lines</li>
            </ul>
            <h6 className="sub-header"> Miscelanious </h6>
            <ul className="important-points">
                <li>Use this <blockquote>CSS box-decoration-break: clone;</blockquote> to word break even long HTML links</li>
            </ul>
        </div>
    )
}

export default ImpPoints