export default function BarGraph(){
    return (
        <div className="container">
<div className="bar one"></div>
<div className="bar two"></div>
<div className="bar three"></div>
<ul className="v-meter">
<li><div>50m</div></li>
<li><div>15m</div></li>
<li><div>10m</div></li>
<li><div>5m</div></li>
<li><div>0m</div></li>
</ul>
<div className="axis-label x-label">X-Axis Label</div>
<div className="axis-label y-label">Y-Axis Label</div>
<div className="bar-label label-one">Cow</div>
<div className="bar-label label-two">Goat</div>
<div className="bar-label label-three">Chicken</div>
</div>
    )
}