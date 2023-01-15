import React from 'react'
import { Container } from 'react-bootstrap'
import './footer.css'
import FaceBook from '../assets/project-img/facebook.svg'
import Instagram from '../assets/project-img/Instagram.svg'
import Linkedin from '../assets/project-img/Linkedin.svg'
import Music from '../assets/project-img/music.svg'
import youtube from '../assets/project-img/youtube.svg'
import Twitter from '../assets/project-img/Twitter.svg'
import logo from '../assets/project-img/logo.png'
export default function Footer() {
    return (
        <div class="page-footer">
            <Container>
                <div class="section-left">
                    <img src={logo} />
                    <div class="social-media-icon">
                        <img src={FaceBook} />
                        <img src={Instagram} />
                        <img src={Linkedin} />
                        <img src={Music} />
                        <img src={Twitter}/>
                        <img src={youtube}/>
                    </div>
                </div>
                <div class="section-right">
                    <ul class="ul-list me-8">
                        <li class="li-title">Our Company</li>
                        <li>Our Team</li>
                        <li>Company Vision</li>
                        <li>Our History</li>
                        <li>Instrutors</li>
                    </ul>
                    <ul class="ul-list me-8">
                        <li class="li-title">Our Resources</li>
                        <li>The Blog</li>
                        <li>Downloads</li>
                        <li>Change Log</li>
                        <li>Slack Channel</li>
                    </ul>
                    <ul class="ul-list me-8">
                        <li class="li-title">Our Courses</li>
                        <li>New Features</li>
                        <li>Roadmap</li>
                        <li>Product Demo</li>
                        <li>Pricing</li>
                    </ul>
                    <ul >
                        <li class="li-title">Our Product</li>
                        <li>New Features</li>
                        <li>Roadmap</li>
                        <li>Product Demo</li>
                        <li>Pricing</li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}
