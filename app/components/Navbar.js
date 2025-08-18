'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-sm sticky-top" style={{ background: '#fff' }}>
      <div className="container py-2">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <img src="/images/f1.jpg" alt="Logo" width="30" height="30" className="me-2 rounded-circle" />
          <span style={{ color: '#d291bc', fontWeight: '600', fontFamily: 'Poppins, sans-serif' }}>Find my cat</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar}
          aria-controls="navbarNav" 
          aria-expanded={isOpen ? "true" : "false"} 
          aria-label="Toggle navigation"
          style={{ border: 'none', boxShadow: 'none' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto flex-nowrap"> {}
            <li className="nav-item mx-2">
              <Link href="/" className="nav-link position-relative text-nowrap" style={{ color: '#d291bc', fontWeight: '500' }}> {}
                หน้าแรก
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/about" className="nav-link text-nowrap" style={{ color: '#5bae9e' }}>เกี่ยวกับเรา</Link>
            </li>
            <li className="nav-item dropdown mx-2">
              <a 
                className="nav-link text-nowrap" 
                href="/service" 
                role="button" 
                aria-expanded="false" 
                style={{ color: '#9d7cd8' }}
              >
                น้องหาบ้าน
              </a>
            </li>
            <li className="nav-item mx-2">
              <Link href="/contact" className="nav-link text-nowrap" style={{ color: '#ffb7b2' }}>ติดต่อเรา</Link>
            </li>
          </ul>
          
          <div className="d-flex align-items-center gap-2 flex-nowrap justify-content-center mt-3 mt-lg-0"> {}
            <form className="d-flex" role="search">
              <div className="input-group">
                <input 
                  className="form-control form-control-sm" 
                  type="search" 
                  placeholder="ค้นหา..." 
                  aria-label="Search" 
                  style={{
                    borderRadius:'2rem 0 0 2rem', 
                    background:'#f8f9fa', 
                    border: '1px solid #eee', 
                    borderRight: 'none',
                    fontSize: '0.9rem'
                  }} 
                />
                <button 
                  className="btn btn-sm" 
                  type="submit" 
                  style={{
                    borderRadius:'0 2rem 2rem 0', 
                    background:'#d291bc', 
                    color:'#fff', 
                    fontSize: '0.9rem', 
                    padding: '0.3rem 0.8rem', 
                    border: '1px solid #d291bc'
                  }}
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
            
            <div className="d-flex gap-1 flex-nowrap"> {}
              <Link 
                href="/register" 
                className="btn btn-sm" 
                style={{
                  borderRadius:'2rem', 
                  background:'#b5ead7', 
                  color:'#fff', 
                  fontSize: '0.9rem', 
                  padding: '0.3rem 0.8rem', 
                  boxShadow: '0 2px 5px rgba(181, 234, 215, 0.3)'
                }}
              >
                สมัครสมาชิก
              </Link>
              
              <Link 
                href="/login" 
                className="btn btn-sm" 
                style={{
                  borderRadius:'2rem', 
                  background:'#9d7cd8', 
                  color:'#fff', 
                  fontSize: '0.9rem', 
                  padding: '0.3rem 0.8rem', 
                  boxShadow: '0 2px 5px rgba(157, 124, 216, 0.3)'
                }}
              >
                เข้าสู่ระบบ
              </Link>

              <Link 
                href="/admin/users" 
                className="btn btn-sm" 
                style={{
                  borderRadius:'2rem', 
                  background:'#bce0f3', 
                  color:'#fff', 
                  fontSize: '0.9rem', 
                  padding: '0.3rem 0.8rem', 
                  boxShadow: '0 2px 5px rgba(157, 124, 216, 0.3)'
                }}
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}