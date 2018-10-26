class Cafe < ApplicationRecord
  has_many :comments
  validates :name, presence: true
  validates :address, presence: true
  validates :brew_methods, presence: true
  validates :price_range, presence: true
  validates :bean_source, presence: true
end
