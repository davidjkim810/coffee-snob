class Comment < ApplicationRecord
  belongs_to :cafe
  validates :content, presence: true
  validates :commenter, presence: true
end
