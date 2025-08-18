"use client";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("story");

  // ข้อมูลส่วนตัว
  const personalInfo = {
    name: "Ummara Issaraphakdee",
    nickname: "นิว",
    role: "Cat Lover & Breeder",
    bio: "ฉันเป็นเจ้าของร้านหาบ้านให้น้องแมวหลากหลายสายพันธุ์ ด้วยความรักและความหลงใหลในแมว ฉันมุ่งมั่นที่จะช่วยให้น้องแมวได้เจอกับครอบครัวที่อบอุ่นและเหมาะสมที่สุด",
    quote: "การเลี้ยงแมวคือความสุขที่อบอุ่นในทุกๆ วัน",
    skills: [
      "Cat Care & Health",
      "Cat Adoption & Matching",
      "Animal Welfare Advocacy",
      "Volunteer Coordination",
      "Community Outreach",
    ],
    education: [
      {
        degree: "ระดับประกาศนียบัตรวิชาชีพชั้นสูง",
        school: "วิทยาลัยเทคนิคเชียงใหม่",
        year: "2568-Present",
      },
      {
        degree: "ระดับประกาศนียบัตรวิชาชีพ",
        school: "วิทยาลัยเทคนิคลำพูน",
        year: "2565-2567",
      },
    ],
    experience: [
      {
        position: "เจ้าของร้านหาบ้านให้น้องแมว",
        company: "Cat Home Finder",
        year: "2565-ปัจจุบัน",
      },
      {
        position: "อาสาสมัครดูแลและหาบ้านให้น้องแมว",
        company: "ชมรมรักแมวท้องถิ่น",
        year: "2564-2565",
      },
    ],
    socialMedia: [
      {
        platform: "Instagram",
        handle: "@mupmip_",
        icon: "bi-instagram",
        href: "https://www.instagram.com/mupmip_/",
      },
      
      {
        platform: "Facebook",
        handle: "Ummara Issaraphakdee",
        icon: "bi-facebook",
        href: "https://www.facebook.com/new.umr",
      },
    ],
  };

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-5 text-center mb-4 mb-lg-0">
          <div
            className="position-relative"
            style={{ width: "300px", height: "300px", margin: "0 auto" }}
          >
            <Image
              src="/images/f1.jpg"
              alt={personalInfo.name}
              width={300}
              height={300}
              className="rounded-circle shadow"
              style={{ objectFit: "cover", border: "5px solid white" }}
            />
            <div
              className="position-absolute"
              style={{
                bottom: "10px",
                right: "10px",
                background: "#ff85a2",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                border: "3px solid white",
              }}
            >
              <i className="bi bi-compass-fill fs-4 text-white"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="p-4 rounded-4 shadow-sm">
            <h1 className="display-5 fw-bold mb-2" style={{ color: "#ff85a2" }}>
              {personalInfo.name}
            </h1>
            <h3 className="fs-4 mb-3 text-secondary">
              "{personalInfo.nickname}" - {personalInfo.role}
            </h3>
            <p className="lead mb-4">{personalInfo.bio}</p>
            <div className="d-flex gap-3 mb-3">
              {personalInfo.socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-decoration-none"
                  target="_blank"
                >
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      background: "#ff85a2",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <i className={`bi ${social.icon} fs-5 text-white`}></i>
                  </div>
                </a>
              ))}
            </div>
            <div className="p-3 rounded-3 mb-3" style={{ background: "white" }}>
              <p className="fst-italic mb-0">"{personalInfo.quote}"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="row mb-4">
        <div className="col-12">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "story" ? "active" : ""}`}
                onClick={() => setActiveTab("story")}
                style={{
                  background: activeTab === "story" ? "#ff85a2" : "transparent",
                  color: activeTab === "story" ? "white" : "#666",
                  borderRadius: "30px",
                  padding: "10px 20px",
                  margin: "0 5px",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
              >
                <i className="bi bi-book me-2"></i>
                เรื่องราวของฉัน
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "skills" ? "active" : ""}`}
                onClick={() => setActiveTab("skills")}
                style={{
                  background:
                    activeTab === "skills" ? "#7ec4cf" : "transparent",
                  color: activeTab === "skills" ? "white" : "#666",
                  borderRadius: "30px",
                  padding: "10px 20px",
                  margin: "0 5px",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
              >
                <i className="bi bi-stars me-2"></i>
                ทักษะและความสามารถ
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "experience" ? "active" : ""
                }`}
                onClick={() => setActiveTab("experience")}
                style={{
                  background:
                    activeTab === "experience" ? "#b892ff" : "transparent",
                  color: activeTab === "experience" ? "white" : "#666",
                  borderRadius: "30px",
                  padding: "10px 20px",
                  margin: "0 5px",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
              >
                <i className="bi bi-briefcase me-2"></i>
                ประสบการณ์
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Tab Content */}
      <div className="row">
        <div className="col-12">
          <div
            className="p-4 rounded-4 shadow-sm"
            style={{
              background:
                activeTab === "story"
                  ? "rgba(255, 133, 162, 0.1)"
                  : activeTab === "skills"
                  ? "rgba(126, 196, 207, 0.1)"
                  : "rgba(184, 146, 255, 0.1)",
              minHeight: "300px",
            }}
          >
            {/* My Story Tab */}
            {activeTab === "story" && (
              <div className="story-content">
                <h3 className="mb-4" style={{ color: "#ff85a2" }}>
                  <i className="bi bi-quote me-2"></i>
                  เรื่องราวของฉัน
                </h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="card-title mb-3">
                          จุดเริ่มต้นของความรักแมว
                        </h5>
                        <p className="card-text">
                          ความหลงใหลในแมวของฉันเริ่มตั้งแต่เด็ก เมื่อมีโอกาสดูแลแมวที่บ้านและช่วยเพื่อนบ้านหาน้องแมวที่ถูกทอดทิ้ง จากนั้นฉันได้เรียนรู้เกี่ยวกับการดูแลแมวอย่างจริงจัง และค้นพบว่านี่คือเส้นทางที่ฉันอยากเดิน
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="card-title mb-3">แรงบันดาลใจ</h5>
                        <p className="card-text">
                          แรงบันดาลใจของฉันมาจากความสุขที่เห็นน้องแมวได้รับความรักและบ้านที่อบอุ่น ฉันชอบช่วยแมวจรและแมวหลากหลายสายพันธุ์ให้ได้พบครอบครัวที่เหมาะสม และนำเสนอแนวทางการดูแลแมวอย่างถูกต้องและปลอดภัย
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-4">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title mb-3">ปรัชญาการเลี้ยงแมว</h5>
                        <p className="card-text">
                          ฉันเชื่อว่าการเลี้ยงแมวไม่ใช่แค่การให้อาหารหรือเล่นสนุก แต่เป็นการดูแลความเป็นอยู่ทั้งร่างกายและจิตใจของแมว ฉันมุ่งมั่นที่จะส่งเสริมการรับเลี้ยงแมวอย่างมีความรับผิดชอบ และสร้างความสัมพันธ์ที่อบอุ่นระหว่างแมวกับครอบครัว ทุกกิจกรรมของฉันออกแบบด้วยความใส่ใจในรายละเอียดและคำนึงถึงความสุขของน้องแมว
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === "skills" && (
              <div className="skills-content">
                <h3 className="mb-4" style={{ color: "#7ec4cf" }}>
                  <i className="bi bi-lightning-charge me-2"></i>
                  ทักษะและความสามารถ
                </h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="card-title mb-3">ทักษะหลัก</h5>
                        <ul className="list-group list-group-flush">
                          {personalInfo.skills.map((skill, index) => (
                            <li
                              key={index}
                              className="list-group-item border-0 d-flex align-items-center"
                            >
                              <div
                                style={{
                                  width: "30px",
                                  height: "30px",
                                  background: "#7ec4cf",
                                  borderRadius: "50%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  marginRight: "15px",
                                }}
                              >
                                <i className="bi bi-check-lg text-white"></i>
                              </div>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="card-title mb-3">การศึกษา</h5>
                        <ul className="list-group list-group-flush">
                          {personalInfo.education.map((edu, index) => (
                            <li
                              key={index}
                              className="list-group-item border-0"
                            >
                              <div className="d-flex justify-content-between">
                                <strong>{edu.degree}</strong>
                                <span
                                  className="badge rounded-pill"
                                  style={{
                                    background: "#7ec4cf",
                                    padding: "8px 12px",
                                  }}
                                >
                                  {edu.year}
                                </span>
                              </div>
                              <div>{edu.school}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-4">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body text-center p-4">
                        <h5 className="card-title mb-3">
                          แมวจากทางร้านเรา
                        </h5>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <Image
                              src="/images/f2.jpg"
                              alt="ประตูท่าแพ"
                              width={300}
                              height={200}
                              className="rounded-3 shadow-sm img-fluid"
                              style={{
                                objectFit: "cover",
                                height: "200px",
                                width: "100%",
                              }}
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <Image
                              src="/images/service2.jpg"
                              alt="สถานที่ท่องเที่ยว 2"
                              width={300}
                              height={200}
                              className="rounded-3 shadow-sm img-fluid"
                              style={{
                                objectFit: "cover",
                                height: "200px",
                                width: "100%",
                              }}
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <Image
                              src="/images/service6.jpg"
                              alt="สถานที่ท่องเที่ยว 3"
                              width={300}
                              height={200}
                              className="rounded-3 shadow-sm img-fluid"
                              style={{
                                objectFit: "cover",
                                height: "200px",
                                width: "100%",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === "experience" && (
              <div className="experience-content">
                <h3 className="mb-4" style={{ color: "#b892ff" }}>
                  <i className="bi bi-briefcase me-2"></i>
                  ประสบการณ์การทำงาน
                </h3>
                <div className="timeline position-relative">
                  {personalInfo.experience.map((exp, index) => (
                    <div key={index} className="card border-0 shadow-sm mb-4">
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h5 className="card-title mb-0">{exp.position}</h5>
                          <span
                            className="badge rounded-pill"
                            style={{
                              background: "#b892ff",
                              padding: "8px 12px",
                            }}
                          >
                            {exp.year}
                          </span>
                        </div>
                        <h6 className="card-subtitle mb-3 text-muted">
                          {exp.company}
                        </h6>
                        <p className="card-text">
                          {index === 0
                            ? "ในฐานะเจ้าของร้านหาบ้านให้น้องแมว ฉันได้พัฒนาระบบการดูแลและคัดเลือกบ้านที่เหมาะสมสำหรับแมวแต่ละตัว นำเสนอวิธีการดูแลที่แตกต่าง เน้นความใกล้ชิด ความอบอุ่น และการสร้างความสุขทั้งกับแมวและครอบครัวใหม่"
                            : "ทำงานร่วมกับทีมอาสาสมัครในการดูแลและหาบ้านให้น้องแมว ช่วยในการคัดกรองครอบครัวที่จะรับเลี้ยง ประสานงานกับผู้สนใจรับอุปการะ และดูแลให้แมวได้รับความรักและการดูแลที่เหมาะสม"}
                        </p>
                        <div className="mt-3">
                          <h6 className="mb-2">ผลงานสำคัญ:</h6>
                          <ul className="list-unstyled">
                            <li className="mb-2 d-flex align-items-center">
                              <i
                                className="bi bi-check-circle-fill me-2"
                                style={{ color: "#b892ff" }}
                              ></i>
                              {index === 0
                                ? "พัฒนาโครงการ “Warm Home for Cats” ที่ช่วยหาครอบครัวใหม่ให้น้องแมวมากกว่า 100 ตัว"
                                : "สร้างเครือข่ายกับผู้เลี้ยงแมวและองค์กรท้องถิ่น เพื่อยกระดับคุณภาพการดูแลและส่งเสริมการรับเลี้ยงแมวอย่างมีความรับผิดชอบ"}
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                              <i
                                className="bi bi-check-circle-fill me-2"
                                style={{ color: "#b892ff" }}
                              ></i>
                              {index === 0
                                ? "มีส่วนร่วมในการจัดกิจกรรมหาบ้านให้น้องแมวที่สามารถจับคู่แมวกับครอบครัวใหม่ได้อย่างเหมาะสม"
                                : "พัฒนาระบบติดตามหลังการรับเลี้ยง เพื่อให้มั่นใจว่าแมวได้รับการดูแลที่ดีและมีคุณภาพชีวิตที่เหมาะสม"}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4 text-center">
                    <h5 className="card-title mb-3">เป้าหมายในอนาคต</h5>
                    <p className="card-text">
                      ฉันตั้งใจที่จะขยายร้านหาบ้านให้น้องแมวให้ครอบคลุมมากขึ้น เพื่อช่วยเหลือแมวจรและแมวที่ถูกทอดทิ้งให้ได้พบครอบครัวที่เหมาะสม ฉันมุ่งมั่นที่จะพัฒนามาตรฐานการดูแลและสร้างเครือข่ายผู้เลี้ยงแมวอย่างมีความรับผิดชอบ ในอนาคตฉันหวังว่าจะได้จัดทำคู่มือการดูแลแมว และสร้างแพลตฟอร์มออนไลน์เพื่อเชื่อมโยงน้องแมวกับครอบครัวใหม่อย่างยั่งยืน
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <div
            className="p-4 rounded-4 shadow-sm"
            style={{ background: "rgba(255, 133, 162, 0.1)" }}
          >
            <h3 className="mb-3" style={{ color: "#ff85a2" }}>
              สนใจรับเลี้ยงน้องแมว
            </h3>
            <p className="mb-4">
              หากคุณสนใจรับเลี้ยงน้องแมว หรือต้องการสอบถามเกี่ยวกับการดูแลแมว สามารถติดต่อได้ตามช่องทางด้านล่าง
            </p>
            <div className="d-flex justify-content-center gap-3">
              <button
                className="btn px-4 py-2"
                style={{
                  background: "#ff85a2",
                  color: "white",
                  borderRadius: "30px",
                }}
              >
                <i className="bi bi-envelope-fill me-2"></i>
                ส่งอีเมล
              </button>
              <button
                className="btn px-4 py-2"
                style={{
                  background: "#7ec4cf",
                  color: "white",
                  borderRadius: "30px",
                  
                }}
              >
                <i className="bi bi-chat-fill me-2"></i>
                แชทกับฉัน
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
