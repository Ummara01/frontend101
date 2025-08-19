'use client';

import { useState } from 'react';

export default function Card(){
    const [hoveredCard, setHoveredCard] = useState(null);
    
    const handleMouseEnter = (index) => {
        setHoveredCard(index);
    };
    
    const handleMouseLeave = () => {
        setHoveredCard(null);
    };
    
    const cards = [
      {
        image: "/images/carousel-3.jpg",
        title: "แมวบ้าน",
        description: 
        "เป็นแมวที่พบเห็นได้ทั่วไปมากที่สุดในชีวิตประจำวัน ไม่ได้ถูกผสมพันธุ์หรือคัดเลือกโดยมนุษย์เพื่อสร้างลักษณะเฉพาะที่ตายตัว",
        gradient: "linear-gradient(to bottom, #ffe5acff, #fff)",
        titleColor: "#ffaf38ff",
        buttonColor: "#d291bc",
      },
      {
        image: "/images/card-2.jpg",
        title: "แมวป่า",
        description:
          "เป็นแมวที่ไม่ได้ถูกนำมาเลี้ยงเป็นสัตว์เลี้ยงโดยทั่วไป และมีสัญชาตญาณความเป็นนักล่าสูง",
        gradient: "linear-gradient(to bottom, #bfffafff, #fff)",
        titleColor: "#2bd32bff",
        buttonColor: "#9d7cd8",
      },
      {
        image: "/images/f7.jpg",
        title: "แมวพันธ์",
        description:
          "เป็นแมวที่ถูกพัฒนาและคัดเลือกสายพันธุ์โดยมนุษย์อย่างเป็นระบบมาเป็นเวลานาน เพื่อให้มีลักษณะทางกายภาพและนิสัยที่คงที่และเป็นไปตามมาตรฐานของสมาคมแมว",
        gradient: "linear-gradient(to bottom, #b5ead7, #fff)",
        titleColor: "#5bae9e",
        buttonColor: "#5bae9e",
      },
    ];
    
    return (
        <div className="container my-5">
            <h3 className="mb-4 text-center" style={{color:'#FFB6C1', fontWeight:'600', fontFamily:'Poppins, sans-serif'}}>ความต่างของแมวแต่ละสายพันธ์</h3>
            <div className="row g-4 justify-content-center">
                {cards.map((card, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div 
                            className="card shadow-sm h-100" 
                            style={{ 
                                borderRadius: '1rem', 
                                background: '#fff', 
                                border: 'none',
                                overflow: 'hidden',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                transform: hoveredCard === index ? 'translateY(-5px)' : 'none',
                                boxShadow: hoveredCard === index ? '0 10px 20px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.05)'
                            }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div 
                                className="card-img-container" 
                                style={{
                                    overflow: 'hidden', 
                                    height: '240px'
                                }}
                            >
                                <img
                                    src={card.image}
                                    className="card-img-top"
                                    alt={`Card ${index + 1}`}
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s',
                                        transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)'
                                    }}
                                />
                            </div>
                            <div 
                                className="card-body text-center" 
                                style={{
                                    background: card.gradient,
                                    padding: '1.5rem 1rem'
                                }}
                            >
                                <h5 style={{color: card.titleColor, fontFamily:'Poppins, sans-serif', fontWeight: '500', marginBottom: '0.5rem'}}>
                                    {card.title}
                                </h5>
                                <p className="card-text" style={{color:'#888', fontSize: '0.9rem', marginBottom: '1rem'}}>
                                    {card.description}
                                </p>
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
