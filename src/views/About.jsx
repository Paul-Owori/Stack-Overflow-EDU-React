import React, { Component } from "react";
// 
import BlackCard from './../components/BlackCard'
// Stylesheets
import "./../stylesheets/base.css";
import "./../stylesheets/themes/about.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="page-container center-content">
        <BlackCard className="max-width-50 about-card">
          <h1 className="center-this color-orange">About</h1>
          <p>
            We are a Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quidem officiis magni doloremque at, nisi vel, mollitia sit eius tempore consequatur porro, ipsam cum nemo quibusdam eligendi nostrum maxime sequi.

            We also Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi quo, maxime mollitia ratione voluptate dignissimos deserunt hic commodi non aliquid consequuntur ipsum molestias voluptatibus sunt odit ipsa dicta fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit odit eos velit repudiandae quam exercitationem! Nam quisquam vitae a sed, voluptate quidem earum rem voluptas id fugit quae in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa minima illo odio quis in, accusantium possimus, magnam ea commodi nulla molestiae! Impedit placeat soluta, necessitatibus nemo harum quae nihil repudiandae. We're amazing.
          </p>
        </BlackCard>
      </div>);
  }
}

export default About;
