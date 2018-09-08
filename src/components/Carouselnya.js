import React, { Component } from 'react';
import { Carousel} from 'react-responsive-carousel';

class Carouselnya extends Component {
    render() {
        return (
            <div>
                <Carousel className='container'>
                        <div className='merdeka'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStS9x8IAq5zVp4htanCdthsQdXnc2IKMzL-ulrdYmL030A2L6PJA" />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div className='merdeka'>
                            <img src="https://cdn.vox-cdn.com/thumbor/R0nwmyv-EKKDdXlFvxBk0P3VUZM=/0x0:1920x1767/1200x675/filters:focal(807x731:1113x1037)/cdn.vox-cdn.com/uploads/chorus_image/image/57202637/gundam_versus_review_art.0.jpg" />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div className='merdeka'>
                            <img src="https://vignette.wikia.nocookie.net/gunfamfanon/images/7/78/Gundam_00.jpg/revision/latest?cb=20121108100401" />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
            </div>
        )
    }
}

export default Carouselnya;