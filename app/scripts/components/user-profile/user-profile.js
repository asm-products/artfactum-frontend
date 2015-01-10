'use strict'

var Router = window.ReactRouter,
    Route = Router.Route,
    Routes = Router.Routes,
	Link = Router.Link,
    RouteHandler = Router.RouteHandler;
	
var Actions = require('./../../actions/actions.js'),
	TopNav = require('./../TopNav/TopNav.js'),
	Footer = require('./../footer/footer.js');
 
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

 
require('./user-profile.css');
require('../../../styles/color-swatch.css');
 
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
}; 
 

var UserProfile = React.createClass({
  
  getDefaultProps: function(){
    return {
	  data: 'data'
	}
  },
  
  getInitialState: function(){
    return { 
	  username: 'user profile'
	} 
  },
  
  componentDidMount: function(){
    	
	// Change this to the location of your server-side upload handler:
    var url = '';
  
    $('#fileupload').fileupload({
	
        url: url,
        dataType: 'json',
        done: function (e, data) {
            
		  $.each(data.result.files, function (index, file) {
          
  		    $('<p></p>').text(file.name).appendTo('#files');
				
          });
			
        },
		fail: function(){  
		       
		  alert('invalid url');
            
		},
	    progressall: function (e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progress .progress-bar').css(
                'width',
                progress + '%'
            );
        }
    }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');    
  
  },
  
  handleSubmit: function(e){  
    e.preventDefault();
	var userInput = JSON.stringify($(form).serializeObject());
	/*Validate on the server
	  If valid then save to the store 
	  If not show a message
	*/
	
	var modal = this.refs.modal.getDOMNode(),
	    form = this.refs.form.getDOMNode();
	$(modal).find('.modal-body').html('<p>' + $('form').serializeObject() + '</p>');
	$(modal).modal('show');
	//alert(JSON.stringify($(form).serializeObject()));
	Actions.setUserProfile(
	  JSON.stringify($(form).serializeObject())
	);
  },
  
  render: function(){
    
	var data = this.props.data;
    var userProfile = data.userProfile;
	
    return (
	 
      <div className='user-profile'>	  
	   <TopNav></TopNav>
		    <div className='modal fade' ref='modal' id='basicModal' tabindex='-1' role='dialog' 
			    aria-labelledby='basicModal' aria-hidden='true'>
				<div className='modal-dialog'>
				  <div className='modal-content'>
				    <div className='modal-header'>
					  <button type='button' className='close' data-dismiss='modal' aria-hiddden='true'>x</button>
	                  <h4 className='modal-title' id='myModalLabel'>Modal title</h4>
                    </div>
                  <div className='modal-body'>
                    <h3>Modal body</h3>
                  </div>
                  <div className='modal-footer'>
                    <button type='button' className='btn btn-default' data-dismiss='modal' >Close</button>
           			<button type='button' className='btn btn-primary'>Save Changes</button>
                  </div>					
                </div>					
              </div>					
            </div>				
	    <div className='container'>
		    
		  <div className='row user-profile-head'>
		   
		    <div className='col-xs-12'>
		      <h1 className='text-center vertical-align'>
			    
				username
				
			    <div className='photo-circle'>
				  <div className='inner-circle'>
				    <img src='images/camera.png' alt='camera' title='camera' />
				  </div>
				</div>
			  </h1>
			</div>
		   
		  </div>{/*end second row*/}
		  
		  <div className='row user-profile-menu'>
		  
		    <div className='col-xs-12'>			
			  <menu>
			  
			    <menuitem><a href='#myAccount'>My Account </a>| </menuitem>
			    <menuitem><a href='#aboutMe'>About Me </a>| </menuitem>
			    <menuitem><a href='#social'>Social </a>| </menuitem>
			    <menuitem><a href='#background'>Background </a>| </menuitem>
			    <menuitem><a href='#interests'>Interests</a></menuitem>
			  
			  </menu>
			
			</div>
			
		  </div>{/*end third row*/}
		  
          <form ref='form' role='form' onSubmit={this.handleSubmit}>          
		  
		  
		  <div className='row user-profile-forms center-block'>
		  
		    <div className='col-xs-12 col-md-8 col-md-offset-2'>
			  
			  <article>
			  
			    <h3 className='underline' >My Account</h3>
			    <strong>*required</strong>
			    
				<div className='center-block my-account'>  
			      
				  <span>username</span>
			      <div className='input-group'>
			    
				    <input type='text' name='username' className='form-control' placeholder='username' required/>
				   <span className='input-group-addon'><span className="glyphicon glyphicon-ok"></span></span>
                  </div>
			
			      <span>Artfactum url</span>
			  
			      <div className='input-group'>
			    
				    <input type='text' name='arfactumUrl' className='form-control' placeholder='url' required/>
				     <span className='input-group-addon'><span className="glyphicon glyphicon-ok"></span></span>
                  </div>
				
				  <div className='center-block button-wrapper'>
                    <div className='btn-group'>
				      <button type="button" className="btn btn-default dropdown-toggle artist" data-toggle="dropdown">
                        Artist <span className="caret"></span>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Artist</a></li>
                        <li><a href="#">Art Lover</a></li>
                      </ul>
                    </div>
				  </div>
			    </div>
			  </article>
			
			</div>			
		  
		  </div>{/*end fifth row*/}
		
	
    	  <div className='row user-profile-forms center-block'>
	        <div className='col-xs-12 col-md-8 col-md-offset-2'>
			    
			  <h3 id='aboutMe' className='underline'>About Me</h3>
			  		 
			</div>
           	
		    
			<div className='col-xs-12 col-md-8 col-md-offset-2'>
			  
			  <article>
			  
			    <span>Living in</span>
			  
			    <div className='input-group'>
			    
				  <input type='text' name='livingIn' className='form-control' placeholder='country' required/>
				  <span className='input-group-addon'><span className="glyphicon glyphicon-ok"></span></span>
			  
                </div>
			
			    <span>Spoken languages</span>
			  
			    <div className='input-group'>
			    
				  <input type='text' name='spokenLanguages' className='form-control' placeholder='url' required/>
				   <span className='input-group-addon'><span className="glyphicon glyphicon-ok"></span></span>
			  
			  
                </div>
				
				<p className='gray help-block'>Suggestions  
				  <button type='button' className='btn btn-default'>English</button>
				  <button type='button' className='btn btn-default'>Spanish</button>
				</p>
                
			  </article>
			
			</div>			
		  
		  </div>{/*end seventh row*/}
		
		  <div className='row user-profile-forms center-block social'>
			  
			<div className='col-xs-12 col-md-8 col-md-offset-2 '>
			    
			  <h3 id='social' className='underline'>Social</h3>
			 
			</div>
			
		    <div className='row center-block'>
			
			  <div className='col-xs-12 col-md-4 padding1 social-buttons'>
			
			    <span className='btn-lg btn-primary center-block'>Facebook</span>
			
			  </div>
          
		      <div className='col-xs-12 col-md-4 padding1 social-buttons'>
			
			    <span className='btn-lg btn-primary center-block'>Twitter</span>
			
			  </div>
			
			  <div className='col-xs-12 col-md-4 padding1 social-buttons'>
			
			    <span className='btn-lg btn-primary center-block'>Google+</span>
			
			  </div>
			
		    </div>{/*end sub-row*/}
		  
		  </div>{/*end eighth row*/}
		
		  <div className='row user-profile-forms center-block'>
			  
			<div className='col-xs-12 col-md-8 col-md-offset-2'>
			    
			  <h3 id='background' className='underline'>Artistic Background</h3>
			 
			</div>
          
		  </div>{/*end ninth row*/}
		  
		  <div className='row user-profile-forms center-block'>
		  
		    <div className='col-xs-12 col-md-8 col-md-offset-2'>
			  
			  <article>
			  
			    <span>Artistic Disciplines</span>
			  
			    <div className='input-group'>
			    
				  <input name='artisticDisciplines' type='text' className='form-control' placeholder='country' />
			  
                </div>
				
				<p className='gray help-block'>Suggestions  
				  <button type='button' className='btn btn-default'>Photography</button>
				  <button type='button' className='btn btn-default'>Painting</button>
				</p>
			
			    <p>Artistic CV</p>
			    
			    <div className='input-group'>
			      <span className="btn btn-success fileinput-button">
                    <i className="glyphicon glyphicon-plus"></i>
                    <span> Select file...</span>
                    <input id="fileupload" type="file" name="files[]" multiple />
                  </span>
				  <span id="files" className="files"></span>
				  <p></p>  
                  <div id="progress" className="progress">
                    <div className="progress-bar progress-bar-success"></div>
                  </div>
	              <p></p>
                </div>
	
				  {/*<span className="input-group-btn">
                    <button className="btn btn-default" type="button">Browse</button>
                  </span>*/}
              
     			
			  </article>
			
			</div>			
		  
		  </div>{/*end tenth row*/}
		
		  <div className='row user-profile-forms center-block'> 
			  
	 	    <div className='col-xs-12 col-md-8 col-md-offset-2'> 
			    
			  <h3 id='interests' className='underline'>
				Personal Interests
		      </h3>
			</div>
			  
		  </div> {/*end 11th row*/} 
		  
		  <div className='row user-profile-forms center-block' > 
		  
		    <div className='col-xs-12 col-md-8 col-md-offset-2' > 
			  
			  <article>
			  
			    <span>Favorite art styles</span>
			  
			    <div className='input-group' > 
			    
				  <input type='text' name='favoriteArtStyles' className='form-control' placeholder='username' /> 
			    </div>
				
				  <p className='gray help-block'>Suggestions  
				    <button type='button' className='btn btn-default'>English</button>
				    <button type='button' className='btn btn-default'>Spanish</button>
				  </p>
			
			    <span>Featured interests</span> 
			  
			    <div className='input-group' >
			    
				  <input type='text' name='featuredInterests' className='form-control' placeholder='url' /> 
			      
				</div>
				  <p className='gray help-block'>Suggestions  
				    <button type='button' className='btn btn-default'>English</button>
				    <button type='button' className='btn btn-default'>Spanish</button>
				  </p>
				
				<span>Influences</span> 
			  
				<div className='input-group'> 
			    
				  <input type='text' name='influences' className='form-control' placeholder='influences' /> 
			    </div>     
				  <div className='gray help-block'>Suggestions  
				    <button type='button' className='btn btn-default'>Surrealism</button>
				    <button type='button' className='btn btn-default'>Cubism</button>
				  </div>
			
				
				<div className='center-block button-wrapper'> 
                  <div className='btn-group'> 
				    
					<button type='submit' className='btn btn-active' > 
                      Save
                    </button>
                  </div>
				
				</div>
		    
			  </article>
			
			</div>			
		  
		  </div> {/*end 12th row*/} 
		
		  </form>
		
		  <div className='row user-profile-bottom'> 
		    <Footer></Footer>
		  </div>{/*end 13th row*/}
		</div>
		
	  </div>
		
	);
	
  }
  
});



module.exports = UserProfile;