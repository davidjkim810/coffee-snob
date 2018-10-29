class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :set_cafe, only: [:index, :create]

  def index
    @comments = @cafe.comments
    render json: @comments
  end

  def show
    render json: @comment
  end

  def create
    @comment = Comment.new(comment_params)
    binding.pry
    if @comment.save
      render json: @comment
    end
  end

  def destroy
    @comment.destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :commenter, :cafe_id)
  end

  def set_cafe
    @cafe = Cafe.find_by(id: params[:cafe_id])
  end
end
