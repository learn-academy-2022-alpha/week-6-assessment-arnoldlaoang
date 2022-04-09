# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# BlogPostsController is a child class of the ApplicationController. The defined method is index which is the Reading on the CRUD action for listing all items in a particular model.
class BlogPostsController < ApplicationController
  def index

# ---2)
#Because this starts with @ symbol, this means that posts is an instance variable. This instance varirable is given everything that BlogPost.all contains between the model.
    @posts = BlogPost.all
  end

# ---3)
# The define method is show which is the Reading of the CRUD actions for listing an item in a particular model just like in this case using the instance variable @post which is asked to find the partcular placeholder :id as the parameter in the BlogPost table.
  def show
    @post = BlogPost.find(params[:id])
  end

# ---4)
#The define method is new which is one of the CRUD action, respresenting a midway point between Creating and Reading and is the Rails convention for the route that displays a form to the user. The instance variable @post is asking the Blogpost.new to create a new object inside.
#Then it starts defining create.
  def new
    @post = BlogPost.new
  end

  def create

# ---5)
# Above it started calling the define method create which is the Creating of the CRUD actions and is the Rails convention for adding information to the database. The instance variable @post is being asked to create a new object in the BlogPost table and be saved depending if the parameter is met. The conditional if statement will determine if the newly created data in the instance variable @post is valid without complicating the data and a catch all else statement to redirect to the right place if not rendered.
#Then it starts calling the define method edit
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit

# ---6) Above it started calling the define method edit which is not interacting with the data yet that means its a get request and represents Reading in the CRUD actions. The instance variable @post is asking to find the particular placeholder :id as the parameter in the BlogPost table to make edit changes.
# Then it starts calling the define method update which is the Updating of the CRUD actions to modifying information in the database. The instance variable @post is asking to find the particular placeholder :id as the parameter in the BlogPost table to make update changes after editing.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
# ---7)
# This started with an instance variable @post.update with the arguement (blog_post_params) to check with a conditional if statement to see if edits are valid without complicating the data then save changes and a catch all else statement to redirect to refresh if not rendered.
# Then it starts calling the define method destroy which is the Deleting of the CRUD actions for removing information from the database. The instance variable @post is asking to find the particular placeholder :id as the parameter in the BlogPost. The conditional if statement will determine if the requested data to be deleted in the instance variable @post is valid to be granted without complicating the data and a catch all else statement to redirect to same page if not rendered.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
# ---8) This line started in between the redirecting of the else conditional that says if it does cause errors and won't succeed on deleting then it will just redirect to the same place.
      redirect_to blog_post_path(@post)
    end
  end

# ---9)
# The word private is a way that limits the range to be called by the method.
# Then it starts calling the define method blog_post_params to set out the parameters that will make this section private according to the following instructions that will be set out next.
  private
  def blog_post_params
# ---10)
# This starts with the line that sets the paramter that requires the blog_post value column only permits title and content and none other than that specified will not be granted to render.
    params.require(:blog_post).permit(:title, :content)
  end
end
