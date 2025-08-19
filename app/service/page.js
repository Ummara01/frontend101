'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Service() {
  const [activeCategory, setActiveCategory] = useState('all');

  // ข้อมูลบริการท่องเที่ยว
  const tourServices = [
    {
      id: 1,
      title: "น้องลีโอ",
      description: "ลีโอเป็นแมวหนุ่มที่ดูสุขุมและมีเสน่ห์ เขามักจะใช้เวลาส่วนใหญ่นอนอาบแดดอยู่ริมหน้าต่าง เฝ้ามองผู้คนและนกที่ผ่านไปมา ลีโอเป็นแมวที่ฉลาดและช่างสังเกต",
      image: "/images/service1.jpg",
      duration: "ยังไม่มีบ้าน",
      price: "ราคา: 4 ใบเทา 8 ใบแดง",
      category: "cultural",
      highlights: [
        "พันธุ์บริติช ช็อตแฮร์",
        "เพศ: ผู้",
        "ฉีดวัคซีนแล้ว: ฉีดแล้ว"
      ]
    },
    {
      id: 2,
      title: "การ์ฟิลด์",
      description: "การ์ฟิลด์เป็นแมวที่มีพลังงานล้นเหลือและเป็นมิตร เขาชอบวิ่งเล่นไปทั่วบ้านและกระโดดตะครุบของเล่นทุกชนิด",
      image: "/images/service2.jpg",
      duration: "ยังไม่มีบ้าน",
      price: "ราคา: 1 ใบเทา 5 ใบแดง",
      category: "adventure",
      highlights: [
        "พันธุ์อเมริกัน ช็อตแฮร์",
        "เพศ: ผู้",
        "ฉีดวัคซีนแล้ว: ฉีดแล้ว"
      ]
    },
    {
      id: 3,
      title: "มานูล",
      description: "มานูลเป็นแมวป่าที่มีสัญชาตญาณนักล่าสูง เขามีความสามารถในการซุ่มและดักเหยื่อได้อย่างเงียบเชียบและแม่นยำ",
      image: "/images/card-2.jpg",
      duration: "ยังไม่มีบ้าน",
      price: "ราคา: 15 ใบเทา 2 ใบแดง",
      category: "beach",
      highlights: [
        "พันธุ์แมวมานูล",
        "เพศ: ผู้",
        "ฉีดวัคซีนแล้ว: ไม่แน่ใจ (เป็นแมวป่า)"
      ]
    },
    {
      id: 4,
      title: "โอลิเวอร์",
      description: "โอลิเวอร์เป็นแมวที่มีขนาดใหญ่และมีขนยาวฟู เขามีลักษณะนิสัยที่อ่อนโยนและเป็นมิตร ทำให้เขาได้รับการขนานนามว่าเป็น ยักษ์ใหญ่ใจดี",
      image: "/images/service4.jpg",
      duration: "ยังไม่มีบ้าน",
      price: "ราคา: 7 ใบเทา 2 ใบแดง",
      category: "cultural",
      highlights: [
        "พันธุ์เมนคูน",
        "เพศ: ผู้",
        "ฉีดวัคซีนแล้ว: ฉีดแล้ว"
      ]
    },
    {
      id: 5,
      title: "สโนวี่",
      description: "สโนวี่เป็นลูกแมวตัวน้อยที่มีความขี้เล่นและซุกซนตามวัย เขามีความสามารถในการวิ่งไล่จับสิ่งของเล็กๆ ได้อย่างรวดเร็ว",
      image: "/images/service5.jpg",
      duration: "ยังไม่มีบ้าน",
      price: "ราคา: 3 ใบแดง",
      category: "adventure",
      highlights: [
        "พันธุ์แมวบ้านขนสั้น",
        "เพศ: เมีย",
        "ฉีดวัคซีนแล้ว: ยังไม่ได้ฉีด (ยังเป็นลูกแมว)"
      ]
    },
    {
      id: 6,
      title: "ธอร์",
      description: "ธอร์เป็นแมวที่มีขนหนาและยาว ซึ่งช่วยปกป้องเขาจากสภาพอากาศที่หนาวเย็น",
      image: "/images/service6.jpg",
      duration: "ยังไม่มีบ้าน",
      price: "ราคา: 6 ใบเทา 5 ใบแดง",
      category: "cultural",
      highlights: [
        "พันธุ์นอร์เวย์เจียน ฟอเรสต์ แคท",
        "เพศ: ผู้",
        "ฉีดวัคซีนแล้ว: ฉีดแล้ว"
      ]
    },
    {
      id: 7,
      title: "ฮันเตอร์",
      description: "ฮันเตอร์เป็นแมวป่าที่มีความเฉลียวฉลาดและว่องไว เธอมีความสามารถในการปีนป่ายต้นไม้และจับสัตว์เล็กๆ",
      image: "/images/carousel-2.jpg",
      duration: "ยังไม่มีบ้าน",
      price: "ราคา: 20 ใบเทา 5 ใบแดง",
      category: "beach",
      highlights: [
        "พันธุ์แมวป่า",
        "เพศ: เมีย",
        "ฉีดวัคซีนแล้ว: ไม่แน่ใจ (เป็นแมวป่า)"
      ]
    },
    {
      id: 8,
      title: "ลูน่า",
      description: "ลูน่าเป็นแมวที่มีลวดลายสวยงามและมีสัญชาตญาณความเป็นนักล่าที่แข็งแกร่ง",
      image: "/images/card-3.jpg",
      duration: "ยังไม่มีบ้าน",
      price: "ราคา: 18 ใบเทา 3 ใบแดง",
      category: "beach",
      highlights: [
        "พันธุ์แมวดาว",
        "เพศ: เมีย",
        "ฉีดวัคซีนแล้ว: ไม่แน่ใจ (เป็นแมวป่า)"
      ]
    },
    {
      id: 9,
      title: "โกโก้",
      description: "โกโก้เป็นแมวที่มีขนยาวสลวยและมีท่าทางสง่างาม เธอเป็นแมวที่รักความสงบและชอบการดูแลเอาใจใส่ และมีผมแบบจินตหรา",
      image: "/images/service3.jpg",
      duration: "ยังไม่มีบ้าน",
      price: "ราคา: 5 ใบเทา 5 ใบแดง",
      category: "adventure",
      highlights: [
        "แมวบ้าน",
        "เพศ: เมีย",
        "ฉีดวัคซีนแล้ว: ฉีดแล้ว"
      ]
    }
  ];

  // กรองบริการตามหมวดหมู่
  const filteredServices = activeCategory === 'all' 
    ? tourServices 
    : tourServices.filter(service => service.category === activeCategory);

  // หมวดหมู่ทั้งหมด
  const categories = [
    { id: 'all', name: 'ทั้งหมด', icon: 'bi-grid-fill', color: '#ff85a2' },
    { id: 'cultural', name: 'แมวพันธ์', icon: 'bi-water', color: '#5bae9e' },
    { id: 'adventure', name: 'แมวบ้าน', icon: 'bi-bank2', color: '#ffaf38ff' },
    { id: 'beach', name: 'แมวป่า', icon: 'bi-tree-fill', color: '#2bd32bff' }
  ];

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3" style={{ color: '#ff85a2' }}>น้องหาบ้าน</h1>
        <p className="lead mb-4">พ่อๆแม่ๆ คนไหนสนใจรับน้องๆไปเลี้ยงสามารถเลือกและติดต่อทางร้านได้เลยนะคะ</p>
        
        {/* Categories */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
          {categories.map((category) => (
            <button 
              key={category.id}
              className={`btn px-4 py-2 d-flex align-items-center gap-2 ${activeCategory === category.id ? 'text-white' : 'text-dark'}`}
              style={{ 
                background: activeCategory === category.id ? category.color : 'transparent',
                borderRadius: '30px',
                border: `1px solid ${category.color}`,
                transition: 'all 0.3s ease'
              }}
              onClick={() => setActiveCategory(category.id)}
            >
              <i className={`bi ${category.icon}`}></i>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="row g-4">
        {filteredServices.map((service) => (
          <div key={service.id} className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">
              <div className="position-relative">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  width={500} 
                  height={300}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="position-absolute bottom-0 start-0 p-3 w-100" style={{ 
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                  color: 'white'
                }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge rounded-pill" style={{ 
                      background: service.category === 'cultural' ? '#5bae9e' : 
                                service.category === 'adventure' ? '#ffaf38ff' : '#228f22c0',
                      padding: '8px 12px'
                    }}>
                      <i className={`bi ${
                        service.category === 'cultural' ? 'bi-water' : 
                        service.category === 'adventure' ? 'bi-bank2' : 'bi-tree-fill'
                      } me-1`}></i>
                      {service.category === 'cultural' ? 'แมวพันธ์' : 
                       service.category === 'adventure' ? 'แมวบ้าน' : 'แมวป่า'}
                    </span>
                    <span className="badge rounded-pill bg-white text-dark" style={{ padding: '8px 12px' }}>
                      <i className="bi bi-clock me-1"></i>
                      {service.duration}
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-body p-4">
                <h5 className="card-title mb-3" style={{ 
                  color: service.category === 'cultural' ? '#5bae9e' : 
                         service.category === 'adventure' ? '#ffaf38ff' : '#1f8d1fc0'
                }}>{service.title}</h5>
                <p className="card-text mb-3">{service.description}</p>
                <div className="mb-3">
                  <h6 className="mb-2">ไฮไลท์:</h6>
                  <ul className="list-unstyled">
                    {service.highlights.map((highlight, index) => (
                      <li key={index} className="mb-1 d-flex align-items-center">
                        <i className="bi bi-check-circle-fill me-2" style={{ 
                          color: service.category === 'cultural' ? '#5bae9e' : 
                                service.category === 'adventure' ? '#ffaf38ff' : '#239c23c0'
                        }}></i>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="card-footer bg-white border-0 p-4 pt-0 d-flex justify-content-between align-items-center">
                <div className="fw-bold" style={{ 
                  color: service.category === 'cultural' ? '#5bae9e' : 
                         service.category === 'adventure' ? '#ffaf38ff' : '#24aa24c0',
                  fontSize: '1.1rem'
                }}>
                  {service.price}
                </div>
                <button className="btn px-4 py-2" style={{ 
                  background: service.category === 'cultural' ? '#5bae9e' : 
                            service.category === 'adventure' ? '#ffaf38ff' : '#28a128ff',
                  color: 'white',
                  borderRadius: '30px'
                }}>
                  <i className="bi bi-info-circle me-2"></i>
                  รายละเอียด
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Special Offers Section */}
      

      {/* Testimonials Section */}
      <div className="row mt-5">
        <div className="col-12 text-center mb-4">
          <h3 className="mb-3" style={{ color: '#7ec4cf' }}>เสียงจากลูกค้า</h3>
          <p className="mb-4">ความประทับใจจากผู้ที่เคยรับเลี้ยงน้องแมวกับเรา</p>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm h-100 p-4 rounded-4">
            <div className="d-flex align-items-center mb-3">
              <div className="me-3">
                <Image 
                  src="/images/testimonial1.jpg" 
                  alt="ลูกค้า 1" 
                  width={60} 
                  height={60}
                  className="rounded-circle"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h5 className="mb-1">คุณมณีสีสวย</h5>
                <div className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
            <p className="card-text fst-italic">"ประทับใจมากกับน้องแมวที่ได้รับจากร้านนี้ พนักงานให้คำแนะนำการดูแลละเอียดและเป็นกันเอง น้องแมวสุขภาพดี ร่าเริง และเข้ากับครอบครัวได้ง่าย แนะนำเลยค่ะ"</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm h-100 p-4 rounded-4">
            <div className="d-flex align-items-center mb-3">
              <div className="me-3">
                <Image 
                  src="/images/testimonial2.jpg" 
                  alt="ลูกค้า 2" 
                  width={60} 
                  height={60}
                  className="rounded-circle"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h5 className="mb-1">คุณแต้น</h5>
                <div className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                </div>
              </div>
            </div>
            <p className="card-text fst-italic">"การหาบ้านให้น้องแมวของที่นี่ดีมาก มีการคัดเลือกแมวอย่างเหมาะสม ทำให้เราพบน้องแมวที่เข้ากับไลฟ์สไตล์ของเรา การติดตามหลังรับเลี้ยงก็ดีเยี่ยม จะกลับมารับเลี้ยงอีกแน่นอนค่ะ"</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm h-100 p-4 rounded-4">
            <div className="d-flex align-items-center mb-3">
              <div className="me-3">
                <Image 
                  src="/images/testimonial3.jpg" 
                  alt="ลูกค้า 3" 
                  width={60} 
                  height={60}
                  className="rounded-circle"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h5 className="mb-1">คุณวะรีเด็ด</h5>
                <div className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
            <p className="card-text fst-italic">"ประทับใจสุดๆ กับการบริการและความเอาใจใส่ของทีมงาน แมวทุกตัวได้รับการดูแลดีมาก การให้คำแนะนำเรื่องอาหารและสุขภาพแมวละเอียด ทำให้มั่นใจว่าจะเลี้ยงแมวได้อย่างถูกต้องและมีความสุข"</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="row mt-4">
        <div className="col-12 text-center">
          
        </div>
      </div>
    </div>
  );
}