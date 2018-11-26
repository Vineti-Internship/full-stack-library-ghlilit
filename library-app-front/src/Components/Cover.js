import React from 'react';

class Cover extends React.Component {

    render() {

      return (
        <div  class="container text-center center-block">
        <main class="inner cover">
         <h1 class="cover-heading">Share your story</h1>
         <p class="lead">We created this platform for everyone who wants to share their stories, inspire us and be a part of our community.</p>
         <h5><span>Sign in to share your work with us.</span></h5>
         <p class="lead">
           <a href="/signin" class="btn btn-lg btn-secondary">Sign in</a>
           <br/>
           <br/>
           <a href="/signup" class="btn btn-lg btn-secondary">Sign up</a>
         </p>
       </main>
       </div>
      );
      
    }
  }
  
  export default Cover;