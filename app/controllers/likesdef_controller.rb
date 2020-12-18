class LikesdefController < ApplicationController
   before_action :find_post
  def create
    @post.likesdef.create(user_id: current_user.id)
    redirect_to post_path(@post)
  end
  private
  def find_post
    @post = Post.find(params[:post_id])
  end
end
