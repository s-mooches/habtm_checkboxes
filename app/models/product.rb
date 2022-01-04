class Product < ApplicationRecord
  has_many :categorizations, dependent: :destroy
  has_many :categories, through: :categorizations
  validates :name, presence: true
  validates :price, presence: true
  accepts_nested_attributes_for :categorizations, allow_destroy: :true
  accepts_nested_attributes_for :categories, allow_destroy: :true
end
