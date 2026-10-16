// Props : it's simple property 
// props : one component to another compoenent data pass
// props : it read only 
// props : deffrent compoenent use
// it mutable
// Class and function 

import React from 'react'
import ClassProps from './ClassProps'
import FuncProps from './FuncProps'

function MainProps() {
    return (
        <div>

            <div className="container">
                <h1>Hello this Class props</h1>
                <div className="row">
                    <ClassProps title="car 1" desc="hello this car" img="https://cdn.pixabay.com/photo/2020/05/19/10/05/opel-5190050_1280.jpg" />
                    <ClassProps title="car 2" desc="hello this car 2" img="https://cdn.pixabay.com/photo/2016/05/18/10/52/buick-1400243_1280.jpg" />
                    <ClassProps title="car 3" desc="hello this car 3" img="https://cdn.pixabay.com/photo/2020/06/22/19/30/automobile-5330343_1280.jpg" />
                    <ClassProps title="car 4" desc="hello this car 4" img="https://cdn.pixabay.com/photo/2015/05/30/19/32/ferrari-790611_1280.jpg" />
                    <ClassProps title="car 5" desc="hello this car 5" img="https://cdn.pixabay.com/photo/2020/05/19/10/05/opel-5190050_1280.jpg" />
                </div>
            </div>

            <div className="container">
                <h1>Hello this fucntion props</h1>
                <div className="row">
                    <FuncProps title="nature 1" desc="hekskjdhku" img="https://cdn.pixabay.com/photo/2021/08/01/17/31/path-6514885_1280.jpg" />
                    <FuncProps title="nature 2" desc="hekskjdhku" img="https://cdn.pixabay.com/photo/2022/01/17/06/38/altai-6943982_1280.jpg" />

                    <FuncProps title="nature 3" desc="hekskjdhku" img="https://cdn.pixabay.com/photo/2023/04/05/21/09/bird-7902319_1280.jpg" />
                    <FuncProps title="nature 4" desc="hekskjdhku" img="https://cdn.pixabay.com/photo/2023/01/08/05/52/sunset-7704594_1280.jpg" />
                    <FuncProps title="nature 5" desc="hekskjdhku" img="https://cdn.pixabay.com/photo/2022/08/27/01/01/waves-7413448_1280.jpg" />
                    <FuncProps title="nature 6" desc="hekskjdhku" img="https://cdn.pixabay.com/photo/2021/08/01/17/31/path-6514885_1280.jpg" />
                </div>
            </div>
        </div>
    )
}

export default MainProps