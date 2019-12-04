import React, { Component } from 'react';

class MyProfile extends Component {
    state = {  }
    render() { 
        return ( 
    <div>
            <div className="jumbotron jumbotron-fluid text-center" style={{backgroundColor:"burlywood", height: "200px"}}>
                    <div className="container">
                    <h1 className="display-4">Welcome to my Profile</h1>
                    <p className="lead">Where you get to know all the cool stuffs about me :)</p>
                    </div>
            </div>
            
        
        
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <img src="images/bisoyefemi.JPG" alt="" className="img-thumbnail" style={{ border:"transparent", height: "150px", width: "150px" }}/>
                </div>
                <div className="col-md-8">
                    <h2>About Me</h2>
                        <p> Hello and welcome to my Page. I am Bisoye Femi Olaiya. I will love to describe myself
                            as a God-fearing, Researved and Optimistic person. I will share with you everything
                            in a brief story about my Early life, Education, Likes, Dislikes, Hobbies, Favorite food, and Business life.
                            That is pretty much all i can tell for now. There is certainly more about me but i guess it will be better
                            you discover them when you meet me in person. So let's get started!
                        </p>
                    </div>
                </div>
            </div>
        
            
                

            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <h4>My Early Life</h4>
                        <p>I was born in Lagos specifically the Lagos Mainland. I grew up in a Military
                            Cantonment so don't get suprised when you hear me speak pidgin. I learnt it while growing up.
                            You will be quick to assume my parent works for the military but you guessed wrong.
                            They are both Civilians. We were opportuned to live with the army officers in Ojo, Lagos Cantonment
                            because my mum works with the Ministry of Defence(Education). As a senior officer she was entitled to
                            the benefit of living in the Cantonment as well as other civillians who were also senior officers. Growing up around children with 
                            parents who were in the military was never intimidating as you will think because they were
                            friendly and good neighbours. You can literally visit your neighbours house and not feel afraid of the
                            military uniform men. Many of my neighbours had junior ranked soilders working for them at home. It was fun
                            seeing them around because they never made it seemed scary to associate with. Childhood was interesting
                            then i can remember after returning from school and finishing my assignment, my friends who lived next to 
                            our block residence would call me and my younger brother to play outside. We did everything small children
                            you can imagine loves doing especially building small houses with sand and the drama moments. Childhood was fun and wonderful.
         
                        </p>

                    </div>
                    <div className="col-md-10">
                        <h4>My Education</h4>
                        <p>Speaking about Education, I attended about three primary schools and four secondary schools. How
                            i managed it as a child i can't really tell. Amazing right ... Lol. But i did. I wasn't really the type
                            of student that will always be at the fore-front answering all the questions in class. Let's just say i 
                            was a quiet gentle one. That kind of girl that sits in the first three rows in class. I was a good student
                            and hardly would cause any trouble in class. After Secondary School, I gained admission into Covenant University
                            to study Management Information System. I initially wanted Engineering but later fell in love with MIS and 
                            gladly accepted it. University days was amazing. I loved every moment in school. Covenant University has a conducive learning
                            environment. So yeah i never had issues being a good student. Some student i realized never desired to school at CU but mine was different. 
                        </p>
                    </div>

                    <div className="col-md-10">
                        <h4>My Likes and Dislikes</h4>
                        <p>I like People with positive and honest attitude. I dislike pride and bullying.</p>

                    </div>
                    <div className="col-md-10">
                        <h4>My Hobbies</h4>
                        <p>I will just state few of them. I enjoy travelling most especially to new places,
                            I love watching movies and cooking.
                        </p>

                    </div>
                    <div className="col-md-10">
                        <h4>My Favorite Food</h4>
                        <p>I guess it will sound okay to say am not really crazy about food, if there is any i will put
                            as favorite it should be pounded yam and vegeatable soup. 
                        </p>

                    </div>
                    <div className="col-md-10">
                        <h4>Business Life</h4>
                        <p>I started doing business as an undergraduate student in the university. A Lecturer who was more like an aunt
                            introduced me to selling ladies weavon to my coursemates and i agreed. I was really not after profits
                            at that time. I did it then because it was a new experience and just wanted to know what it felt like making profits. 
                            i had heard alot about profit and loss and really wanted to have a practical feeling of what i learnt. As time 
                            went on i enjoyed the art and picked interest in knowing more about hair merchandise. After my obtaining
                            my first degree, i continued selling hair during NYSC and afterwards decided to make a brand for myself. I registered
                            the business, opened a business account, registered it with a reputable logistics company, built an ecommerce store
                            and many other essentials. Today am glad with how my business has grown. I can still say for a fact that asides
                            the profits i make, i definately enjoy the art of serving customers while doing business.

                        </p>
                    </div>

                        
                    <div>

                        <p>Wow, I have really discussed alot. I guess you must have a general sense of about my personality. I am not be
                            too far from your imagination. But certainly am sure you can't predict completely all about me. It was great telling and would
                            love to write a book someday maybe a full story about BisoyeFemi
                        </p>

                    </div>

                    </div>

                </div>

           
            
            <footer className="page-footer font-small blue">

            
            <div className="footer-copyright text-center py-3">© 2019 Copyright:
              <a href="https://mdbootstrap.com/bootstrap-tutorial/"> BisoyeFemi </a>
            </div>
            </footer>
</div>         
         );
    }
}
 
export default MyProfile;