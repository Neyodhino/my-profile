import React, { Component } from 'react';

class Contact extends Component {
    state = {  }
    render() { 
        return (
    <div>
        <br />
        <div className="container">
            <div className="row">
                 <div className="col-md-10">
                    <p>
                        I am pleased to know you will like to contact me. I am friendly and encourage
                        you to fill the form below. Be rest assured i will definately get back to you.
                        I can't wait to get to know and possibly work with you. 
                    </p>
                </div>    
            </div>
        </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <form>
                            <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" placeholder="Full Name" />
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">I'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea className="form-control" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        

         <div>   
            <footer className="page-footer font-small blue">
                    <div className="footer-copyright text-center py-3">© 2019 Copyright:
                      <a href="https://mdbootstrap.com/bootstrap-tutorial/"> BisoyeFemi </a>
                    </div>
                </footer>
        </div>
</div>
         );
    }
}
 
export default Contact;