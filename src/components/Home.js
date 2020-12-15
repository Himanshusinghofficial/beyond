import React from 'react'

const Home = () => {
    return (
        <div>
            <div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
          <div class="row">
            <div class="col s12 m6" style={{fontFamily:'Barlow'}}>
            <h1 class="header center">Education</h1>
              <div class="row center">
                <h4 style={{fontFamily:'cursive'}}>Education is the passport to the future, for tomorrow belongs to those who prepare for it today</h4>
                <br/>
                <a style={{marginTop:'50px'}} href='https://en.wikipedia.org/wiki/Education' target="_blank" class="btn-large waves-effect waves-light teal lighten-1 Rcom" >Read More</a>
              </div>
            </div>
            <div class="col s12 m6 center-align">
            <div class="row">
              <iframe class="video" src="https://www.youtube.com/embed/kHDxveSlWM4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
            </div>
            </div>
          </div>
        </div>
        <div class="parallax"><img src="https://biteable.com/content/uploads/2020/08/HUB_OG_Images_04-1024x512-c-center.png" alt="background Image" />

        </div>
      </div>
      <div class='container'>
      <div class="row content" style={{paddingBottom:'50px'}}>
                <h4 class="header col s12 center" style={{margin:'40px 0px 40px 0px'}}><b>Right Of Education</b></h4>
                <p>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. Education frequently takes place under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal settings and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.</p>
                <p>Formal education is commonly divided formally into such stages as preschool or kindergarten, primary school, secondary school and then college, university, or apprenticeship.</p>
                <p>A right to education has been recognized by some governments and the United Nations.In most regions, education is compulsory up to a certain age. There is a movement for education reform, and in particular for evidence-based education with global initiatives aimed at achieving the Sustainable Development Goal 4, which promotes quality education for all.</p>
              </div>
      </div>
  </div>
    )
}

export default Home
