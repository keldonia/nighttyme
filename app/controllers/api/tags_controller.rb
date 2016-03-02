class Api::TagsController < ApplicationController

  def index
    @tags = Tag.select(:name).distinct
    render :index
  end
end
