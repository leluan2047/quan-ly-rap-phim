import React, { useState } from 'react'

import './Details_movie.scss'
function Details_movie() {
  
return (
    <>
        <div class="details-movie">
            <div class="page-title">Nội dung phim</div>	
            <div className='content'>
                <div class="image-movie">
                    <img id="image-main" class="gallery-image visible" src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/d/r/dr-strange-payoff-poster_1_.jpg" alt="PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN" title="PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN">
                    </img>                            
                </div>
                <div class="info-movie">
                    <div>
                        <h1>PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN</h1>
                    </div>   
                    <div>         
                    <div class="std"><label>Đạo diễn: </label> &nbsp; Sam Raimi</div>			  
                    <div class="std"><label>Diễn viên:</label>&nbsp; Benedict Cumberbatch, Elizabeth Olsen Rachel McAdams</div>
                    <div class="std"><label>Thể loại: </label>&nbsp; Hành Động, Phiêu Lưu, Thần thoại</div> 
                    <div class="std"><label>Khởi chiếu: </label>&nbsp; 04/05/2022</div>
                    <div class="std"><label>Thời lượng: </label>&nbsp; 126 phút</div>
                    <div class="std"><label>Ngôn ngữ: </label>&nbsp; Tiếng Anh - Phụ đề Tiếng Việt</div> 
                    <div class="std"><label>Rated: </label>&nbsp; C13 - Phim cấm khán giả dưới 13 tuổi</div>
                    </div>
                </div>     
            </div>
            <div className='resume'>
            Sau các sự kiện của Avengers: Endgame, Tiến sĩ Stephen Strange tiếp tục nghiên cứu về Viên đá Thời gian. Nhưng một người bạn cũ đã trở thành kẻ thù tìm cách tiêu diệt mọi phù thủy trên Trái đất, làm xáo trộn kế hoạch của Strange và cũng khiến anh ta mở ra một tội ác khôn lường.    
            </div>
            <div className='buy-ticket'>
                <button type="button"  title="Mua vé"  onclick=""><span>Mua vé</span></button>
            </div>
        </div>
    </>
  )
}
export default Details_movie
