import React from "react";
import apiUrl from "../apiConfig";

class Home extends React.Component {
    state = {
        recipes:[]
    };
   
    componentDidMount() {
        // AJAX call to the back end to fetch the recipes and then set the state with them
        // for now using an array
        const url = `${apiUrl}/api/recipes/`
        fetch(url, {
            mode: "cors",
            credentials: "include",
            method: "GET",
            headers: {
              "Content-type": "application/json"
            },
          })
            .then(res => res.json())
            .then(data => {
              if (data.status > 200) this.setState({ err: data.message });
              else {
                this.setState({ err: null });
                
                this.setState( {recipes:data.recipes})

                console.log("data", this.state.recipes);
              }
            })
            .catch(e => console.log(e));

        // this.setState({
        //     recipes: [ 
        //         {name: 'Buddha Bowl', image: 'https://tse2.mm.bing.net/th?id=OIP.frwuctRxqaHZiAMXi6h9oQHaKT', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.' },
        //         {name: 'Roasted Zuchinni Burger', image: 'https://www.halfbakedharvest.com/wp-content/uploads/2016/06/Roasted-Zucchini-Burgers-with-Garlic-Whipped-Feta-6.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.' },
        //         {name: 'Rice Paper Rolls', image: 'https://veganheaven.org/wp-content/uploads/2016/07/Rice-Paper-Rolls-with-Mango-and-Mint-13.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.' },
        //         {name: 'Stuffed Mushrooms', image: 'https://veganhuggs.com/wp-content/uploads/2017/12/crabless-vegan-stuffed-mushrooms-3-1024x683.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.' },
        //         {name: 'Muffins', image: 'https://www.halfbakedharvest.com/wp-content/uploads/2015/07/Double-Chocolate-Coconut-oil-Zucchini-Muffins-with-Caramelized-Buckwheat-6.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.' },
        //         {name: 'Noodles', image: 'https://www.halfbakedharvest.com/wp-content/uploads/2019/02/Better-Than-Takeout-Szechuan-Noodles-with-Sesame-Chili-Oil-1-1-700x1050.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.' },
        //     ]
        // })
    }
    render() {
        const recipes = this.state.recipes.map(recipe => { 
          //   return <h1> {recipe.id}</h1>
          const customStyle = {
              background: "url(" + recipe.image + ")",
          }
          return (
            <div className= 'col-sm-12 col-md-3 recipe-box m-4' style={customStyle}>
                <div className='foodpic'> 
                    <div onClick={() => { this.props.setActiveRecipe(recipe) }}>
                        <div className='description'>{recipe.title} </div>
                    </div>
                </div>
            </div> 
        )
      })
      return (
        <div className="container-fluid main-page"> 
            <div className="row">
                <div className="col-3 browsemore"><button className='b1' onClick={() => this.props.changeActivePage ("categories")}> Browse more </button></div>
                <div className="col-9" > <div className="boxes row flex-row-reverse"> {recipes} </div></div>
            </div> 
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 footer"> 
                    {/* logo */}
                </div>
            </div>
            {/* <hr className="footer-line"></hr> */}
            <div className="row footer">
                <div className="col-2 footerlogo"><h1>Recipes</h1></div>
                <div className="col-2 ">
                    <div className="footer-widget ">
                        <div className="footer-title">Company</div>
                        <ul className="list-unstyled">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Legal & Privacy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-2 ">
                    <div className="footer-widget ">
                        <div className="footer-title">Quick Links</div>
                        <ul className="list-unstyled">
                            <li><a href="#">News</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-4 ">
                    <div className="footer-widget">
                        <div className="footer-title">About Us!</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
                <div className="col-2 icons">
                    <img className="socialIcons" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/62-instagram-128.png"/>
                    <img className="socialIcons" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/4-youtube_video-128.png"/>
                    
                    <img className="socialIcons" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/80-facebook-128.png"/>
                    <img className="socialIcons" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/39-snapchat-128.png"/>
                    <img className="socialIcons" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/30-tumblr-128.png"/>
                    <img className="socialIcons" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/48-pinterest-128.png"/>
                    <img className="socialIcons" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/24-twitter_tweet-128.png"/>
                    
                    <img className="socialIcons" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-128.png"/>
                    <img className="socialIcons" src=""/>
                    
                </div>
        </div>
    
        </div>
      );
    }
    
  }
  export default Home;
  
  


