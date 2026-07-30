import React, { useState, useRef, useEffect } from 'react';
import { Mail, Play, Pause, Coffee, MapPin, RadioTower, Server, Cog, BrainCircuit, Activity, ExternalLink, Copy, Check } from 'lucide-react';
import { FaJava, FaReact, FaAws, FaDocker, FaGithub, FaLinkedin, FaNodeJs, FaPython, FaRobot, FaEnvelope, FaAward } from 'react-icons/fa';
import { SiSpringboot, SiKubernetes, SiApachekafka, SiRedis, SiJenkins, SiLinux, SiMysql, SiDatabricks } from 'react-icons/si';
import './index.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const audioRef = useRef(null);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText("8717847853");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  // Small UI tick sound for Lofi button
  const playClickSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(800, audioCtx.currentTime); 
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.1);
    } catch (e) {
      console.log('Audio context not supported');
    }
  };

  const togglePlay = () => {
    playClickSound();
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  // Ensure audio loops
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
    }
  }, []);

  return (
    <div className="app">
      
      {/* Floating Bottom Left: Lo-Fi Player */}
      <div className="floating-bottom-left">
        <img src="/lofi_bot.png" className="bot-mascot" alt="Lofi Bot" />
        <button onClick={togglePlay} className="floating-btn" data-tooltip="Play Relaxing Music">
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          <span>Lofi Code</span>
        </button>
        <audio ref={audioRef} src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3" preload="auto"></audio>
      </div>

      {/* Floating Bottom Right: Buy me a Coffee */}
      <div className="floating-bottom-right">
        <img src="/coffee_bot.png" className="bot-mascot" alt="Coffee Bot" />
        <a href="#coffee-section" className="floating-btn floating-coffee" data-tooltip="Support my work">
          <Coffee size={20} />
          <span>Buy me a Coffee</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className="container hero section-wrapper">
        <div className="hero-content">
          <div className="hero-header-row">
            <span className="hero-badge">Senior Full-Stack Software Engineer</span>
            <span className="hero-location" data-tooltip="Mumbai, India"><MapPin size={20} /> Mumbai, India</span>
          </div>
          <h1>Kshitij<br/>Shrivastava</h1>
          <p>
            <span className="drop-cap">5+</span> 
            years of experience developing and shipping high-availability cloud-native systems, microservices architectures, and dynamic frontend experiences. I specialize in building full-stack applications that power millions of users and drive engineering excellence.
          </p>
          <div className="hero-actions">
            <a href="https://github.com/idevkshitij" target="_blank" rel="noopener noreferrer" className="btn btn-primary" data-tooltip="GitHub Profile">
              <FaGithub size={24} /> GitHub
            </a>
            <a href="https://linkedin.com/in/kshitij-shrivastava-" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" data-tooltip="LinkedIn Profile">
              <FaLinkedin size={24} color="#0A66C2" /> LinkedIn
            </a>
            <button onClick={() => setIsModalOpen(true)} className="btn btn-secondary" data-tooltip="Contact Me">
              <Mail size={24} strokeWidth={2.5} /> Let's Connect
            </button>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img src="/profile.png" alt="Kshitij Shrivastava" data-tooltip="Kshitij Shrivastava" className="has-tooltip" />
          </div>
          <div className="hero-username" data-tooltip="Github Username">&lt;/idevkshitij&gt;</div>
        </div>
      </section>

      {/* Skills Marquee Banner */}
      <div className="skills-banner">
        <div className="skills-track">
          <span className="has-tooltip" data-tooltip="Java"><FaJava color="#e32c2e"/> Java</span>
          <span className="has-tooltip" data-tooltip="Spring Boot"><SiSpringboot color="#6db33f"/> Spring Boot</span>
          <span className="has-tooltip" data-tooltip="React"><FaReact color="#61dafb"/> React</span>
          <span className="has-tooltip" data-tooltip="Redis"><SiRedis color="#dc382d"/> Redis</span>
          <span className="has-tooltip" data-tooltip="AWS"><FaAws color="#ff9900"/> AWS</span>
          <span className="has-tooltip" data-tooltip="Kubernetes"><SiKubernetes color="#326ce5"/> Kubernetes</span>
          <span className="has-tooltip" data-tooltip="Docker"><FaDocker color="#2496ed"/> Docker</span>
          <span className="has-tooltip" data-tooltip="Apache Kafka"><SiApachekafka color="#231f20"/> Kafka</span>
          <span className="has-tooltip" data-tooltip="MySQL"><SiMysql color="#4479A1"/> MySQL</span>
          
          <span className="has-tooltip" data-tooltip="Java"><FaJava color="#e32c2e"/> Java</span>
          <span className="has-tooltip" data-tooltip="Spring Boot"><SiSpringboot color="#6db33f"/> Spring Boot</span>
          <span className="has-tooltip" data-tooltip="React"><FaReact color="#61dafb"/> React</span>
          <span className="has-tooltip" data-tooltip="Redis"><SiRedis color="#dc382d"/> Redis</span>
          <span className="has-tooltip" data-tooltip="AWS"><FaAws color="#ff9900"/> AWS</span>
          <span className="has-tooltip" data-tooltip="Kubernetes"><SiKubernetes color="#326ce5"/> Kubernetes</span>
          <span className="has-tooltip" data-tooltip="Docker"><FaDocker color="#2496ed"/> Docker</span>
          <span className="has-tooltip" data-tooltip="Apache Kafka"><SiApachekafka color="#231f20"/> Kafka</span>
          <span className="has-tooltip" data-tooltip="MySQL"><SiMysql color="#4479A1"/> MySQL</span>
        </div>
      </div>

      {/* Domain Expertise */}
      <section className="container section-wrapper">
        <div className="title-wrapper">
          <h2 className="section-title">Domain Expertise</h2>
        </div>
        <div className="domain-grid">
          
          <div className="brutal-card card-yellow">
            <RadioTower className="watermark" />
            <div className="tech-logos">
              <span className="icon-wrapper has-tooltip" data-tooltip="Java"><FaJava color="#e32c2e"/></span>
              <span className="icon-wrapper has-tooltip" data-tooltip="Spring Boot"><SiSpringboot color="#6db33f"/></span>
              <span className="icon-wrapper has-tooltip" data-tooltip="Kubernetes"><SiKubernetes color="#326ce5"/></span>
              <span className="icon-wrapper has-tooltip" data-tooltip="Redis"><SiRedis color="#dc382d"/></span>
            </div>
            <h3>5G Core Telecom</h3>
            <p>
              Engineered distributed microservices (PCF and Rule Engines) for Jio's 5G Core network, handling policy management for 3M+ subscribers. Scaled systems to support ~26K requests per node in production environments.
            </p>
            <div className="tech-tags">
              <span className="tag">Microservices</span>
              <span className="tag">High Availability</span>
            </div>
          </div>

          <div className="brutal-card card-blue">
            <Server className="watermark" />
            <div className="tech-logos">
              <span className="icon-wrapper has-tooltip" data-tooltip="React"><FaReact color="#61dafb"/></span>
              <span className="icon-wrapper has-tooltip" data-tooltip="Java"><FaJava color="#e32c2e"/></span>
              <span className="icon-wrapper has-tooltip" data-tooltip="Spring Boot"><SiSpringboot color="#6db33f"/></span>
              <span className="icon-wrapper has-tooltip" data-tooltip="MySQL"><SiMysql color="#4479A1"/></span>
            </div>
            <h3>Full Stack Development</h3>
            <p>
              Architecting end-to-end web applications using React, modern JavaScript, and robust Java backends. Bridging the gap between highly scalable microservices and dynamic, responsive frontend interfaces.
            </p>
            <div className="tech-tags">
              <span className="tag">Frontend</span>
              <span className="tag">Backend APIs</span>
            </div>
          </div>

          <div className="brutal-card card-pink">
            <Cog className="watermark" />
            <div className="tech-logos">
              <span className="icon-wrapper has-tooltip" data-tooltip="Jenkins"><SiJenkins color="#d33833"/></span>
              <span className="icon-wrapper has-tooltip" data-tooltip="Docker"><FaDocker color="#2496ed"/></span>
              <span className="icon-wrapper has-tooltip" data-tooltip="GitHub Actions"><FaGithub color="#000"/></span>
              <span className="icon-wrapper has-tooltip" data-tooltip="Linux"><SiLinux color="#000"/></span>
            </div>
            <h3>SRE & CI/CD</h3>
            <p>
              Applied Site Reliability Engineering (SRE) principles and designed active-standby failover architectures to achieve 99.99% uptime for mission-critical telecom workloads. Owned CI/CD automation, reducing deployment time by 40%.
            </p>
            <div className="tech-tags">
              <span className="tag">Pipelines</span>
              <span className="tag">Automation</span>
            </div>
          </div>

          <div className="brutal-card card-green">
            <BrainCircuit className="watermark" />
            <div className="tech-logos">
              <span className="icon-wrapper has-tooltip" data-tooltip="Spring AI"><SiSpringboot color="#6db33f"/></span>
              <span className="icon-wrapper has-tooltip" data-tooltip="AI Tools"><FaRobot color="#000"/></span>
              <span className="icon-wrapper has-tooltip" data-tooltip="Node.js"><FaNodeJs color="#339933"/></span>
              <span className="icon-wrapper has-tooltip" data-tooltip="React"><FaReact color="#000"/></span>
            </div>
            <h3>AI Integration & Productivity</h3>
            <p>
              Adapting to the AI revolution to dramatically boost developer productivity. Leveraging GitHub Copilot, ChatGPT, Spring AI, and AI-assisted workflows to accelerate code generation, optimize architectures, and automate repetitive tasks.
            </p>
            <div className="tech-tags">
              <span className="tag">Spring AI</span>
              <span className="tag">Prompt Eng</span>
              <span className="tag">AI Tools</span>
            </div>
          </div>

        </div>
      </section>

      {/* Professional Work */}
      <section className="container section-wrapper">
        <div className="title-wrapper">
          <h2 className="section-title">Professional Work</h2>
        </div>
        
        <div className="brutal-container">
          <div className="project-card">
          <RadioTower className="watermark" style={{opacity: 0.05, width: '300px', height: '300px', left: '-50px', top: '-50px'}} />
          <div className="project-header">
            <h3>Policy Control Function (PCF)</h3>
            <span className="project-date">Jio Platforms Limited</span>
          </div>
          <p>
            Architected and developed a mission-critical Java microservice for Jio's 5G Core network. This backend system supports highly available policy management, seamlessly integrating with AMF, SMF, and NRF network functions under immense load.
          </p>
          <div className="project-metrics">
            <div className="metric" style={{backgroundColor: 'var(--c-blue)'}}>
              <span className="metric-value">3M+</span>
              <span className="metric-label">Subscribers</span>
            </div>
            <div className="metric" style={{backgroundColor: 'var(--c-pink)'}}>
              <span className="metric-value">26K</span>
              <span className="metric-label">Req / Sec / Node</span>
            </div>
          </div>
          <div className="tech-tags">
            <span className="tag">Java</span>
            <span className="tag">Spring Boot</span>
            <span className="tag">Kubernetes</span>
            <span className="tag">Redis</span>
          </div>
        </div>

        <div className="project-card">
          <Activity className="watermark" style={{opacity: 0.05, width: '300px', height: '300px', left: '-50px', top: '-50px'}} />
          <div className="project-header">
            <h3>Centralized Barring System (PIMS)</h3>
            <span className="project-date">Jio Platforms Limited</span>
          </div>
          <p>
            Led a team of 5 engineers to develop a React and Java-based subscriber provisioning platform. Built robust traceability and monitoring modules that dramatically improved platform reliability and operational transparency across the network.
          </p>
          <div className="project-metrics">
            <div className="metric">
              <span className="metric-value">95%</span>
              <span className="metric-label">Less Manual Ops</span>
            </div>
            <div className="metric" style={{backgroundColor: 'var(--c-green)'}}>
              <span className="metric-value">15%</span>
              <span className="metric-label">Reliability Boost</span>
            </div>
          </div>
          <div className="tech-tags">
            <span className="tag">React</span>
            <span className="tag">Java</span>
            <span className="tag">MySQL</span>
            <span className="tag">Microservices</span>
          </div>
        </div>

        <div className="project-card">
          <Server className="watermark" style={{opacity: 0.05, width: '300px', height: '300px', left: '-50px', top: '-50px'}} />
          <div className="project-header">
            <h3>Resilient Microservices Gateway</h3>
            <span className="project-date">Java R&D (Client: Verizon)</span>
          </div>
          <p>
            Engineered a Spring Reactive Cloud Gateway to manage async inter-service communication (Kafka) and Eureka service discovery across 5+ microservices. Integrated Resilience4j circuit breakers and token bucket rate-limiting for robust fault tolerance, highly available live-site operations, and robust DDoS protection.
          </p>
          <div className="project-metrics">
            <div className="metric" style={{backgroundColor: 'var(--c-yellow)'}}>
              <span className="metric-value">3x</span>
              <span className="metric-label">Performance Improvement</span>
            </div>
            <div className="metric" style={{backgroundColor: 'var(--c-purple)'}}>
              <span className="metric-value">99.9%</span>
              <span className="metric-label">Uptime Delivered</span>
            </div>
          </div>
          <div className="tech-tags">
            <span className="tag">Java</span>
            <span className="tag">Spring Reactive</span>
            <span className="tag">Kafka</span>
            <span className="tag">AWS</span>
          </div>
        </div>
        </div>
        
        {/* Section Context Link */}
        <div style={{marginTop: '2rem', textAlign: 'right'}}>
          <a href="https://linkedin.com/in/kshitij-shrivastava-" target="_blank" rel="noopener noreferrer" className="section-context-link">
            + For more professional experience, connect on LinkedIn <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="container section-wrapper">
        <div className="title-wrapper" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
          <h2 className="section-title">Certifications</h2>
          <span className="github-tag" style={{ backgroundColor: '#fff', fontSize: '1rem', boxShadow: '3px 3px 0px 0px var(--c-pink)', marginBottom: '0.4rem' }}>
            Verified on LinkedIn
          </span>
        </div>
        <div className="domain-grid">
          <a href="https://www.coursera.org/account/accomplishments/verify/LF13XVQ9T8FT" target="_blank" rel="noopener noreferrer" className="brutal-card card-blue" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden' }}>
            <img src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~LF13XVQ9T8FT/CERTIFICATE_LANDING_PAGE~LF13XVQ9T8FT.jpeg" alt="Java Microservices Certificate" style={{ width: '100%', height: 'auto', borderBottom: '3px solid #000' }} />
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Building Scalable Java Microservices with Spring Boot and Spring Cloud</h3>
              <p>Issued by: Google Cloud</p>
              <div style={{ marginTop: 'auto', paddingTop: '1rem', fontWeight: 'bold', textDecoration: 'underline' }}>View Credential ↗</div>
            </div>
          </a>
          <a href="https://www.coursera.org/account/accomplishments/verify/1LO6VHPNMRXU" target="_blank" rel="noopener noreferrer" className="brutal-card card-yellow" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden' }}>
            <img src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~1LO6VHPNMRXU/CERTIFICATE_LANDING_PAGE~1LO6VHPNMRXU.jpeg" alt="AWS Cloud Technical Essentials Certificate" style={{ width: '100%', height: 'auto', borderBottom: '3px solid #000' }} />
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>AWS Cloud Technical Essentials</h3>
              <p>Issued by: Amazon Web Services</p>
              <div style={{ marginTop: 'auto', paddingTop: '1rem', fontWeight: 'bold', textDecoration: 'underline' }}>View Credential ↗</div>
            </div>
          </a>
          <a href="https://credentials.databricks.com/profile/kshitijshrivastava357617/wallet" target="_blank" rel="noopener noreferrer" className="brutal-card card-pink" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden' }}>
            <img src="https://pdf.ms.credential.net/v2/certificate/image?env=production&credential=shaobivx&variant=medium" alt="Databricks AI Agent Certificate" style={{ width: '100%', height: 'auto', borderBottom: '3px solid #000' }} />
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>AI Agent Fundamentals</h3>
              <p>Issued by: Databricks Academy</p>
              <div style={{ marginTop: 'auto', paddingTop: '1rem', fontWeight: 'bold', textDecoration: 'underline' }}>View Credential ↗</div>
            </div>
          </a>
        </div>
      </section>

      {/* GitHub Work Section */}
      <section className="container section-wrapper">
        <div className="title-wrapper" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>GitHub Repositories</h2>
          <span className="github-tag" style={{ backgroundColor: 'var(--c-pink)', marginBottom: '0' }}>
            @idevkshitij
          </span>
        </div>
        <div className="github-grid">
          
          <a href="https://github.com/idevkshitij/coronavirus-tracker" target="_blank" rel="noopener noreferrer" className="github-repo" title="Coronavirus Tracker">
            <h4><FaGithub /> coronavirus-tracker</h4>
            <p>A full Corona Virus Stats Tracker Application.</p>
            <div className="tech-tags">
              <span className="tag">Java</span>
              <span className="tag">Spring Boot</span>
              <span className="tag">Web Scraping</span>
              <span className="tag">Bootstrap</span>
            </div>
          </a>

          <a href="https://github.com/idevkshitij/weather-platform-app" target="_blank" rel="noopener noreferrer" className="github-repo">
            <h4><FaGithub /> weather-platform-app</h4>
            <p>A reactive Spring Boot microservices-based Weather Platform using WebClient, Spring WebFlux, and API Gateway for scalable data aggregation.</p>
            <div className="tech-tags">
              <span className="tag">Java</span>
              <span className="tag">WebFlux</span>
              <span className="tag">Microservices</span>
              <span className="tag">API Gateway</span>
            </div>
          </a>

          <a href="https://github.com/idevkshitij/student-management-app" target="_blank" rel="noopener noreferrer" className="github-repo">
            <h4><FaGithub /> student-management-app</h4>
            <p>A full-stack Spring Boot application that manages students using a React-based Web App.</p>
            <div className="tech-tags">
              <span className="tag">React</span>
              <span className="tag">Java</span>
              <span className="tag">Spring Boot</span>
              <span className="tag">MySQL</span>
            </div>
          </a>

          <a href="https://github.com/idevkshitij/trading-system" target="_blank" rel="noopener noreferrer" className="github-repo" title="Trading System">
            <h4><FaGithub /> trading-system</h4>
            <p>A robust backend trading system implementation.</p>
            <div className="tech-tags">
              <span className="tag">Java</span>
              <span className="tag">Spring Boot</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">Kafka</span>
            </div>
          </a>

          <a href="https://github.com/idevkshitij/cardekho-ai-matchmaker" target="_blank" rel="noopener noreferrer" className="github-repo">
            <h4><FaGithub /> cardekho-ai-matchmaker</h4>
            <p>AI matchmaking service for finding the right cars.</p>
            <div className="tech-tags">
              <span className="tag">JavaScript</span>
              <span className="tag">Spring AI</span>
              <span className="tag">LLMs</span>
              <span className="tag">React</span>
            </div>
          </a>

          <a href="https://github.com/idevkshitij/neetcode-submissions" target="_blank" rel="noopener noreferrer" className="github-repo">
            <h4><FaGithub /> neetcode-submissions</h4>
            <p>My NeetCode.io problem submissions demonstrating data structures and algorithms proficiency.</p>
            <div className="tech-tags">
              <span className="tag">Java</span>
              <span className="tag">Data Structures</span>
              <span className="tag">Algorithms</span>
            </div>
          </a>
          
        </div>
        
        {/* Section Context Link */}
        <div style={{marginTop: '2rem', textAlign: 'right'}}>
          <a href="https://github.com/idevkshitij" target="_blank" rel="noopener noreferrer" className="section-context-link">
            + For more projects, visit GitHub <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* Support / Coffee Section */}
      <section id="coffee-section" className="container section-wrapper" style={{ textAlign: 'center' }}>
        <div className="coffee-container">
          <h2 style={{ textTransform: 'uppercase', marginBottom: '1rem', fontSize: '1.5rem' }}>Buy Me a Coffee ☕</h2>
          <p style={{ fontWeight: '500', marginBottom: '1rem', fontSize: '1rem' }}>
            If you appreciate my work, you can send me a coffee via UPI!
          </p>
          <div 
            className="upi-badge" 
            data-tooltip="Click to copy UPI number" 
            onClick={handleCopyUpi}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
          >
            {isCopied ? (
              <span style={{ color: 'black', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1rem' }}>
                <Check size={20} color="green" style={{ flexShrink: 0 }} /> <span>Yay! Cheers! UPI copied 😇</span>
              </span>
            ) : (
              <>
                UPI: +91 87178 47853 <Copy size={20} />
              </>
            )}
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
            <h2 style={{textTransform: 'uppercase', marginBottom: '1.5rem', fontSize: '2rem'}}>Let's Connect</h2>
            
            <div className="modal-action-buttons" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              <a href="mailto:mail.kshitij09@gmail.com" className="btn btn-primary" style={{flex: 1, justifyContent: 'center'}}>
                <FaEnvelope /> Email Me
              </a>
              <a href="https://linkedin.com/in/kshitij-shrivastava-" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{flex: 1, justifyContent: 'center'}}>
                <FaLinkedin color="#0A66C2" /> LinkedIn
              </a>
            </div>

            <div style={{ borderTop: '3px solid #000', margin: '2rem 0', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--bg-main)', padding: '0 10px', fontWeight: 'bold' }}>OR</span>
            </div>
            
            <p style={{fontWeight: 700, marginBottom: '1rem'}}>Send a quick message:</p>
            <form action="https://formspree.io/f/your_formspree_endpoint_here" method="POST">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required placeholder="Jane Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact Info (Email / LinkedIn)</label>
                <input type="text" id="contact" name="contact" required placeholder="jane@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Leave a Word</label>
                <textarea id="message" name="message" rows="3" required placeholder="Say hello, share an opportunity, or leave feedback..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{width: '100%', justifyContent: 'center'}}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p style={{ fontWeight: '600' }}>
            Have a good day visitor! 😊
          </p>
          <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <img src="https://komarev.com/ghpvc/?username=idevkshitij&label=VISITS&color=FF90E8&style=for-the-badge" alt="Hits" style={{ border: '3px solid #000', boxShadow: '4px 4px 0px 0px #000' }} />
          </div>
          <p style={{ marginTop: '1rem', color: '#999', fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} Kshitij Shrivastava | Cooked using creativity, code, skills and patience.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
