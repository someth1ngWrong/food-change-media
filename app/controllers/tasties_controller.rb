class TastiesController < ApplicationController
   before_action :find_post
   before_action :find_tasty, only: [:destroy]
  # 2. если лайкнут то можно поставить
  def create
  if already_tastied?
    flash[:notice] = "Слишком вкусно!"
  else
    @post.tasties.create(user_id: current_user.id)
  end
  redirect_to post_path(@post)
  end

  # 3. если лайкнут то можно убрать
  def destroy
  if !(already_tastied?)
    flash[:notice] = "Вы не можете убрать"
  else
    @tasty.destroy
  end
  redirect_to post_path(@post)
end

  private
    # 4. поиск лайков
    def find_tasty
     @tasty = @post.tasties.find(params[:id])
  end

  # 1. пользователь поставил лайк?
  def already_tastied?
    Tasty.where(user_id: current_user.id, post_id:
    params[:post_id]).exists?
  end

  def find_post
    @post = Post.find(params[:post_id])
  end
end
