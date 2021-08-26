import React from 'react'

const Intro = () => {
    return <div className="intro-home">
        <img 
            src="https://firebasestorage.googleapis.com/v0/b/blog-programming-d228e.appspot.com/o/bk.jpg?alt=media" 
            alt="intro-home-page" 
            className="img" />
        <div className="info-detail">
            <h2>Nestjs best framework for Nodejs</h2>
            <p className="content">
            Mục tiêu của bài blog hôm nay mình chử sử dụng Deno và 
            một vài thư viện js của React để build mà không cần phải 
            sử dụng thêm tool nào để compile như babel, webpack, 
            parcel ... các kiểu con đà điểu nữa.
            </p>
            <button className="read-more">
                Read more
            </button>
        </div>

    </div>
}

export default React.memo(Intro)